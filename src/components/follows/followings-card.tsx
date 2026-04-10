import { LoaderCircleIcon } from 'lucide-react'
import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type followingsCardFragment$key } from './__generated__/followingsCardFragment.graphql'
import { Followee } from './followee'

const FollowingsCardFragment = graphql`
  fragment followingsCardFragment on User
  @refetchable(queryName: "followingsCardPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    following(after: $cursor, first: $first)
      @connection(key: "User_following") {
      edges {
        node {
          id
          ...followeeFragment
        }
      }
    }
  }
`

interface FollowingsCardProps {
  user: followingsCardFragment$key
}

export function FollowingsCard({ user }: FollowingsCardProps) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    FollowingsCardFragment,
    user
  )

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
      <h2 className="text-sm font-medium">Following</h2>
      <div className="flex flex-col gap-4">
        {!data.following?.edges?.length && (
          <li className="text-sm text-gray-500">
            You are not following anyone yet.
          </li>
        )}
        {data.following?.edges?.map((edge) => {
          if (!edge?.node) return null
          return <Followee key={edge.node.id} followee={edge.node} />
        })}
      </div>
      {isLoadingNext && (
        <div role="alert" className="text-blue-500">
          <LoaderCircleIcon className="size-5 animate-spin" />
          <span className="sr-only">Loading more followings...</span>
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
