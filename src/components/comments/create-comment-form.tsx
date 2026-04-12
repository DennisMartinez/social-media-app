import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from 'react-hook-form'
import { useFragment, useMutation, useRelayEnvironment } from 'react-relay'
import TextareaAutosize from 'react-textarea-autosize'
import { ConnectionHandler, graphql } from 'relay-runtime'
import * as yup from 'yup'
import { Button } from '../common/button'
import { Input } from '../common/input'
import { UserAvatar } from '../users/user-avatar'
import { type createCommentFormCommentableFragment$key } from './__generated__/createCommentFormCommentableFragment.graphql'
import { type createCommentFormMutation } from './__generated__/createCommentFormMutation.graphql'
import { type createCommentFormViewerFragment$key } from './__generated__/createCommentFormViewerFragment.graphql'

const CreateCommentFormViewerFragment = graphql`
  fragment createCommentFormViewerFragment on User {
    id
    name
    avatarUrl
    ...userAvatarFragment
  }
`

const CreateCommentFormCommentableFragment = graphql`
  fragment createCommentFormCommentableFragment on Node {
    __typename
    id
    ... on Post {
      commentsCount
    }
  }
`

const CreateCommentFormMutation = graphql`
  mutation createCommentFormMutation(
    $connections: [ID!]!
    $input: CreateCommentInput!
  ) {
    createComment(input: $input) {
      errors
      commentEdge @prependEdge(connections: $connections) {
        node {
          commentable {
            __typename
            ... on Post {
              id
              commentsCount
            }
          }
          ...commentFragment
        }
      }
    }
  }
`

const MAX_LIMIT = 500
const schema = yup.object({
  content: yup
    .string()
    .required('Content is required')
    .max(MAX_LIMIT, `Content must be at most ${MAX_LIMIT} characters`)
})

interface CreateCommentFormProps {
  viewer: createCommentFormViewerFragment$key
  commentable: createCommentFormCommentableFragment$key
}

export function CreateCommentForm({
  viewer,
  commentable
}: CreateCommentFormProps) {
  const env = useRelayEnvironment()
  const viewerData = useFragment(CreateCommentFormViewerFragment, viewer)
  const commentableData = useFragment(
    CreateCommentFormCommentableFragment,
    commentable
  )
  const [createComment] = useMutation<createCommentFormMutation>(
    CreateCommentFormMutation
  )
  const { register, handleSubmit, reset, control, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content: ''
    }
  })
  const content = useWatch({ control, name: 'content' })

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        const connections = ['Post_comments']
          .map((key) =>
            ConnectionHandler.getConnectionID(commentableData.id, key)
          )
          .filter((id) => env.getStore().getSource().get(id))

        reset()
        createComment({
          variables: {
            connections,
            input: {
              content: formData.content,
              commentableId: commentableData.id
            }
          },
          optimisticResponse: {
            createComment: {
              errors: [],
              commentEdge: {
                node: {
                  id: new Date().toISOString(),
                  content: formData.content,
                  createdAt: new Date().toISOString(),
                  viewerCanDestroy: true,
                  commentable:
                    commentableData.__typename === 'Post'
                      ? {
                          __typename: commentableData.__typename,
                          id: commentableData.id,
                          commentsCount:
                            (commentableData.commentsCount || 0) + 1
                        }
                      : {
                          id: commentableData.id
                        },
                  user: {
                    id: viewerData.id,
                    name: viewerData.name,
                    avatarUrl: viewerData.avatarUrl
                  }
                }
              }
            }
          },
          onError: () => {
            setValue('content', formData.content)
          }
        })
      })}>
      <div className="flex w-full gap-4">
        <UserAvatar user={viewerData} />
        <div className="relative w-full">
          <Input
            {...register('content')}
            as={TextareaAutosize}
            autoFocus
            variant="secondary"
            placeholder="Write a comment..."
            maxLength={MAX_LIMIT}
            className="rounded-xl pb-10"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
          <div className="absolute right-2 bottom-2 flex items-center gap-2">
            <div className="text-xs text-gray-400">
              {content.length}/{MAX_LIMIT}
            </div>
            <Button
              variant={content ? 'primary' : 'outline'}
              size="xs"
              disabled={!content}>
              Post Comment
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
