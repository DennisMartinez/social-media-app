import { LoaderCircleIcon } from 'lucide-react'
import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type followersCardFragment$key } from './__generated__/followersCardFragment.graphql'
import { Followee } from './followee'

const FollowersCardFragment = graphql`
  fragment followersCardFragment on User
  @refetchable(queryName: "followersCardPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    followers(after: $cursor, first: $first)
      @connection(key: "User_followers") {
      edges {
        node {
          id
          ...followeeFragment
        }
      }
    }
  }
`

interface FollowersCardProps {
  user: followersCardFragment$key
}

export function FollowersCard({ user }: FollowersCardProps) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    FollowersCardFragment,
    user
  )

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
      <h2 className="text-sm font-medium">Followers</h2>
      <ul className="flex flex-col gap-4">
        {!data.followers?.edges?.length && (
          <li className="text-sm text-gray-500">You have no followers yet.</li>
        )}
        {data.followers?.edges?.map((edge) => {
          if (!edge?.node) return null
          return <Followee key={edge.node.id} followee={edge.node} />
        })}
      </ul>
      {isLoadingNext && (
        <div role="alert" className="text-blue-500">
          <LoaderCircleIcon className="size-5 animate-spin" />
          <span className="sr-only">Loading more followers...</span>
        </div>
      )}
      {hasNext && (
        <div>
          <button className="text-sm text-blue-500" onClick={() => loadNext(3)}>
            View More
          </button>
        </div>
      )}
    </div>
  )
}
