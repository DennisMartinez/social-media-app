import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import { Card, CardBody, CardHeader, CardTitle } from '../common/card'
import { type recommendedFollowsFragment$key } from './__generated__/recommendedFollowsFragment.graphql'
import { type recommendedFollowsViewerFragment$key } from './__generated__/recommendedFollowsViewerFragment.graphql'
import { Followee } from './followee'

const RecommendedFollowsViewerFragment = graphql`
  fragment recommendedFollowsViewerFragment on User {
    ...followeeViewerFragment
  }
`

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
  viewer: recommendedFollowsViewerFragment$key
  user: recommendedFollowsFragment$key
}

export function RecommendedFollows({ viewer, user }: RecommendedFollowsProps) {
  const viewerData = useFragment(RecommendedFollowsViewerFragment, viewer)
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    RecommendedFollowsFragment,
    user
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Who to Follow</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          {!data.recommendedFollows?.edges?.length && (
            <div className="text-sm text-gray-500">
              No recommendations at this time.
            </div>
          )}
          {data.recommendedFollows?.edges?.map((edge) => {
            if (!edge?.node) return null
            return (
              <Followee
                key={edge.node.id}
                viewer={viewerData}
                followee={edge.node}
              />
            )
          })}
          {hasNext && (
            <Button
              size="xs"
              variant="outline"
              loading={isLoadingNext}
              onClick={() => loadNext(3)}>
              View More
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  )
}
