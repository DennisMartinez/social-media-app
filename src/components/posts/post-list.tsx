import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type postListFragment$key } from './__generated__/postListFragment.graphql'
import { PostListItem } from './post-list-item'

const PostListFragment = graphql`
  fragment postListFragment on User
  @argumentDefinitions(first: { type: "Int", defaultValue: 10 }) {
    posts(first: $first) @connection(key: "Feed_posts") {
      edges {
        node {
          id
          ...postListItemFragment
        }
      }
    }
    ...newPostFormFragment
  }
`

interface PostListProps {
  user: postListFragment$key
}

export function PostList({ user }: PostListProps) {
  const data = useFragment(PostListFragment, user)

  return (
    <ol className="grid w-full gap-4">
      {data.posts?.edges?.map((edge) => {
        if (!edge?.node) return null
        return <PostListItem key={edge.node.id} post={edge.node} />
      })}
    </ol>
  )
}
