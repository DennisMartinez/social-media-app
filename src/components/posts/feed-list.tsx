import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type feedListFragment$key } from './__generated__/feedListFragment.graphql'
import { PostListItem } from './post-list-item'

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
          ...postListItemFragment
        }
      }
    }
  }
`

interface FeedListProps {
  user: feedListFragment$key
}

export function FeedList({ user }: FeedListProps) {
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    FeedListFragment,
    user
  )

  return (
    <div>
      <ol className="grid w-full gap-4">
        {data.feed?.edges?.map((edge) => {
          if (!edge?.node) return null
          return <PostListItem key={edge.node.id} post={edge.node} />
        })}
      </ol>
      {isLoadingNext && <p>Loading...</p>}
      {hasNext && <button onClick={() => loadNext(5)}>Load more</button>}
    </div>
  )
}
