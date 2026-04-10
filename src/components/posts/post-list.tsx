import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type postListFragment$key } from './__generated__/postListFragment.graphql'
import { type postListViewerFragment$key } from './__generated__/postListViewerFragment.graphql'
import { Post } from './post'

const PostListViewerFragment = graphql`
  fragment postListViewerFragment on User {
    ...postViewerFragment
  }
`

const PostListFragment = graphql`
  fragment postListFragment on User
  @refetchable(queryName: "postListPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 5 }
  ) {
    posts(after: $cursor, first: $first) @connection(key: "User_posts") {
      edges {
        node {
          id
          ...postFragment
        }
      }
    }
  }
`

interface PostListProps {
  viewer: postListViewerFragment$key
  user: postListFragment$key
}

export function PostList({ viewer, user }: PostListProps) {
  const viewerData = useFragment(PostListViewerFragment, viewer)
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    PostListFragment,
    user
  )

  return (
    <div>
      <ol className="grid w-full gap-4">
        {data.posts?.edges?.map((edge) => {
          if (!edge?.node) return null
          return (
            <Post key={edge.node.id} viewer={viewerData} post={edge.node} />
          )
        })}
      </ol>
      {isLoadingNext && <p>Loading...</p>}
      {hasNext && <button onClick={() => loadNext(5)}>Load more</button>}
    </div>
  )
}
