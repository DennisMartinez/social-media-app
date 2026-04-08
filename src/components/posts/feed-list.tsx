import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type feedListFragment$key } from './__generated__/feedListFragment.graphql'
import { PostListItem } from './post-list-item'

const FeedListFragment = graphql`
  fragment feedListFragment on User
  @argumentDefinitions(first: { type: "Int", defaultValue: 5 }) {
    feed(first: $first) @connection(key: "User_feed") {
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
  const data = useFragment(FeedListFragment, user)

  return (
    <ol className="grid w-full gap-4">
      {data.feed?.edges?.map((edge) => {
        if (!edge?.node) return null
        return <PostListItem key={edge.node.id} post={edge.node} />
      })}
    </ol>
  )
}
