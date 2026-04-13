import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { formatNumber } from '../../utils'
import { Button } from '../common/button'
import { Card, CardBody, CardHeader, CardTitle } from '../common/card'
import { type followersCardFragment$key } from './__generated__/followersCardFragment.graphql'
import { type followersCardViewerFragment$key } from './__generated__/followersCardViewerFragment.graphql'
import { Followee } from './followee'

const FollowersCardViewerFragment = graphql`
  fragment followersCardViewerFragment on User {
    ...followeeViewerFragment
  }
`

const FollowersCardFragment = graphql`
  fragment followersCardFragment on User
  @refetchable(queryName: "followersCardPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    followerCount
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
  viewer: followersCardViewerFragment$key
  user: followersCardFragment$key
}

export function FollowersCard({ viewer, user }: FollowersCardProps) {
  const viewerData = useFragment(FollowersCardViewerFragment, viewer)
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    FollowersCardFragment,
    user
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Followers{' '}
          <span className="text-gray-500">
            ({formatNumber(data.followerCount)})
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          {!data.followers?.edges?.length && (
            <div className="text-sm text-gray-500">
              You have no followers yet.
            </div>
          )}
          {data.followers?.edges?.map((edge) => {
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
