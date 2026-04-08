import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type postListItemFragment$key } from './__generated__/postListItemFragment.graphql'
import { DestroyFeedItem } from './destroy-post'

const PostListItemFragment = graphql`
  fragment postListItemFragment on Post {
    id
    content
    createdAt
    ...destroyPostFragment
  }
`

interface PostListItemProps {
  post: postListItemFragment$key
}

export function PostListItem({ post }: PostListItemProps) {
  const data = useFragment(PostListItemFragment, post)

  return (
    <li className="flex items-start justify-between rounded-lg bg-gray-50 p-4 shadow-sm">
      <div>
        <p>{data.content}</p>
        <small>Created at: {data.createdAt}</small>
      </div>
      <DestroyFeedItem post={data} />
    </li>
  )
}
