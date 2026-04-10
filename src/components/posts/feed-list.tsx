import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type feedListFragment$key } from './__generated__/feedListFragment.graphql'
import { type feedListViewerFragment$key } from './__generated__/feedListViewerFragment.graphql'
import { Post } from './post'

const FeedListViewerFragment = graphql`
  fragment feedListViewerFragment on User {
    ...postViewerFragment
  }
`

const FeedListFragment = graphql`
  fragment feedListFragment on User
  @refetchable(queryName: "feedListPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 5 }
  ) {
    feed(after: $cursor, first: $first) @connection(key: "User_feed") {
      edges {
        node {
          id
          ...postFragment
        }
      }
    }
  }
`

interface FeedListProps {
  viewer: feedListViewerFragment$key
  user: feedListFragment$key
}

export function FeedList({ viewer, user }: FeedListProps) {
  const viewerData = useFragment(FeedListViewerFragment, viewer)
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    FeedListFragment,
    user
  )

  return (
    <div>
      <ol className="grid w-full gap-4">
        {data.feed?.edges?.map((edge) => {
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
