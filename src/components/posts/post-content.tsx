import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import type { postContentFragment$key } from './__generated__/postContentFragment.graphql'

const PostContentFragment = graphql`
  fragment postContentFragment on Post {
    content
  }
`

interface PostContentProps {
  post: postContentFragment$key
}

export function PostContent({ post }: PostContentProps) {
  const data = useFragment(PostContentFragment, post)
  const highlightedContent = data.content.replace(
    /#(\w+)/g,
    '<span class="text-blue-500">#$1</span>'
  )

  return (
    <div
      dangerouslySetInnerHTML={{ __html: highlightedContent }}
      className="wrap-break-word"
    />
  )
}
