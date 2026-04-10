import { LoaderCircleIcon } from 'lucide-react'
import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type recommendedFollowsFragment$key } from './__generated__/recommendedFollowsFragment.graphql'
import { Followee } from './followee'

const RecommendedFollowsFragment = graphql`
  fragment recommendedFollowsFragment on User
  @refetchable(queryName: "recommendedFollowsPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    recommendedFollows(after: $cursor, first: $first)
      @connection(key: "User_recommendedFollows") {
      edges {
        node {
          id
          ...followeeFragment
        }
      }
    }
  }
`

interface RecommendedFollowsProps {
  user: recommendedFollowsFragment$key
}

export function RecommendedFollows({ user }: RecommendedFollowsProps) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    RecommendedFollowsFragment,
    user
  )

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
      <h2 className="text-sm font-medium">Who to Follow</h2>
      <div className="flex flex-col gap-4">
        {!data.recommendedFollows?.edges?.length && (
          <p className="text-sm text-gray-500">
            No recommendations at this time.
          </p>
        )}
        {data.recommendedFollows?.edges?.map((edge) => {
          if (!edge?.node) return null
          return <Followee key={edge.node.id} followee={edge.node} />
        })}
      </div>
      {isLoadingNext && (
        <div role="alert" className="text-blue-500">
          <LoaderCircleIcon className="size-5 animate-spin" />
          <span className="sr-only">Loading more recommended followees...</span>
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
