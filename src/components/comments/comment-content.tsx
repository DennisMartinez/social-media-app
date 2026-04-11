import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type commentContentFragment$key } from './__generated__/commentContentFragment.graphql'

const CommentContentFragment = graphql`
  fragment commentContentFragment on Comment {
    content
  }
`

interface CommentContentProps {
  comment: commentContentFragment$key
}

export function CommentContent({ comment }: CommentContentProps) {
  const data = useFragment(CommentContentFragment, comment)
  const highlightedContent = data.content.replace(
    /#(\w+)/g,
    '<span class="text-blue-500">#$1</span>'
  )

  return (
    <div
      dangerouslySetInnerHTML={{ __html: highlightedContent }}
      className="text-sm wrap-break-word text-gray-900"
    />
  )
}
