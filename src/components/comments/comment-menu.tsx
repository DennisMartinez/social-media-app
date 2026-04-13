import { EllipsisIcon, Loader2Icon, TrashIcon } from 'lucide-react'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger
} from '../common/dropdown'
import { type commentMenuFragment$key } from './__generated__/commentMenuFragment.graphql'

const CommentMenuFragment = graphql`
  fragment commentMenuFragment on Comment {
    id
    viewerCanDestroy
  }
`

const CommentMenuDestroyMutation = graphql`
  mutation commentMenuDestroyMutation($input: DestroyCommentInput!) {
    destroyComment(input: $input) {
      comment {
        id @deleteRecord
      }
    }
  }
`

interface CommentMenuProps {
  comment: commentMenuFragment$key
  onDestroy?: () => void
}

export function CommentMenu({ comment, onDestroy }: CommentMenuProps) {
  const data = useFragment(CommentMenuFragment, comment)
  const [destroyComment, isDestroyingComment] = useMutation(
    CommentMenuDestroyMutation
  )

  if (!data.viewerCanDestroy) {
    return null
  }

  return (
    <Dropdown>
      <DropdownTrigger
        disabled={isDestroyingComment}
        className="flex size-7 items-center justify-center rounded-full text-gray-500 not-data-disabled:hover:bg-gray-100 data-popup-open:bg-gray-100">
        {isDestroyingComment ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <EllipsisIcon />
        )}
      </DropdownTrigger>
      <DropdownMenu align="end">
        <DropdownMenuItem
          variant="danger"
          loading={isDestroyingComment}
          onClick={() => {
            destroyComment({
              variables: {
                input: {
                  commentId: data.id
                }
              },
              onCompleted: () => {
                onDestroy?.()
              }
            })
          }}>
          {!isDestroyingComment && <TrashIcon />}
          Delete Comment
        </DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  )
}
