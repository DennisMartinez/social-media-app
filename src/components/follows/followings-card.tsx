import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { formatNumber } from '../../utils'
import { Button } from '../common/button'
import { Card, CardBody, CardHeader, CardTitle } from '../common/card'
import { type followingsCardFragment$key } from './__generated__/followingsCardFragment.graphql'
import { type followingsCardViewerFragment$key } from './__generated__/followingsCardViewerFragment.graphql'
import { Followee } from './followee'

const FollowingsCardViewerFragment = graphql`
  fragment followingsCardViewerFragment on User {
    ...followeeViewerFragment
  }
`

const FollowingsCardFragment = graphql`
  fragment followingsCardFragment on User
  @refetchable(queryName: "followingsCardPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    followingCount
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
  viewer: followingsCardViewerFragment$key
  user: followingsCardFragment$key
}

export function FollowingsCard({ viewer, user }: FollowingsCardProps) {
  const viewerData = useFragment(FollowingsCardViewerFragment, viewer)
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    FollowingsCardFragment,
    user
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Following{' '}
          <span className="text-gray-500">
            ({formatNumber(data.followingCount)})
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          {!data.following?.edges?.length && (
            <div className="text-sm text-gray-500">
              You are not following anyone yet.
            </div>
          )}
          {data.following?.edges?.map((edge) => {
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
