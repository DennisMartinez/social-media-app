import { MessageCircleIcon } from 'lucide-react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type commentCountFragment$key } from './__generated__/commentCountFragment.graphql'

const CommentCountFragment = graphql`
  fragment commentCountFragment on Node {
    ... on Post {
      commentsCount
    }
  }
`

interface CommentCountProps {
  commentable: commentCountFragment$key
}

export function CommentCount({ commentable }: CommentCountProps) {
  const data = useFragment(CommentCountFragment, commentable)

  return (
    <div className="flex items-center gap-1 text-sm">
      <MessageCircleIcon className="size-4" />
      <div>{data.commentsCount || 0} comments</div>
    </div>
  )
}
