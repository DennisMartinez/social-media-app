import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useFragment, useMutation, useRelayEnvironment } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'
import * as yup from 'yup'
import { Button } from '../common/button'
import { UserAvatar } from '../user-avatar'
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
  const [createComment, isCreatingComment] =
    useMutation<createCommentFormMutation>(CreateCommentFormMutation)
  const { register, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content: ''
    }
  })

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
      <div className="flex grow gap-4">
        <UserAvatar user={viewerData} />
        <input
          type="text"
          autoFocus
          className="focus:ring-opacity-50 w-full flex-1 rounded-lg bg-gray-50 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-500"
          placeholder="Write a comment..."
          {...register('content')}
          maxLength={MAX_LIMIT}
        />
        <Button type="submit" variant="ghost" disabled={isCreatingComment}>
          Send
        </Button>
      </div>
    </form>
  )
}
