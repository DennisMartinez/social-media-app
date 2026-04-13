import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { formatNumber } from '../../utils'
import { Button } from '../common/button'
import { Card, CardBody, CardHeader, CardTitle } from '../common/card'
import { Followee } from '../follows/followee'
import { type groupMembersCardFragment$key } from './__generated__/groupMembersCardFragment.graphql'
import { type groupMembersCardViewerFragment$key } from './__generated__/groupMembersCardViewerFragment.graphql'

const GroupMembersCardViewerFragment = graphql`
  fragment groupMembersCardViewerFragment on User {
    ...followeeViewerFragment
  }
`

const GroupMembersCardFragment = graphql`
  fragment groupMembersCardFragment on Group
  @refetchable(queryName: "groupMembersCardPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    memberCount
    members(after: $cursor, first: $first) @connection(key: "User_members") {
      edges {
        node {
          id
          ...followeeFragment
        }
      }
    }
  }
`

interface GroupMembersCardProps {
  viewer: groupMembersCardViewerFragment$key
  user: groupMembersCardFragment$key
}

export function GroupMembersCard({ viewer, user }: GroupMembersCardProps) {
  const viewerData = useFragment(GroupMembersCardViewerFragment, viewer)
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    GroupMembersCardFragment,
    user
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Members{' '}
          <span className="text-gray-500">
            ({formatNumber(data.memberCount)})
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          {!data.members?.edges?.length && (
            <div className="text-sm text-gray-500">
              This group has no members yet.
            </div>
          )}
          {data.members?.edges?.map((edge) => {
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
