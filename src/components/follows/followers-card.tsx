import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import { Card, CardBody, CardHeader, CardTitle } from '../common/card'
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
    <Card>
      <CardHeader>
        <CardTitle>Followers</CardTitle>
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
            return <Followee key={edge.node.id} followee={edge.node} />
          })}
          {hasNext && (
            <Button
              size="xs"
              variant="outline"
              radius="full"
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
