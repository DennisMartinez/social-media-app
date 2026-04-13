import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { formatNumber } from '../../utils'
import { Button } from '../common/button'
import { Card, CardBody, CardHeader, CardTitle } from '../common/card'
import { GroupBadge } from '../groups/group-badge'
import { type userGroupsCardFragment$key } from './__generated__/userGroupsCardFragment.graphql'
import { type userGroupsCardViewerFragment$key } from './__generated__/userGroupsCardViewerFragment.graphql'

const UserGroupsCardViewerFragment = graphql`
  fragment userGroupsCardViewerFragment on User {
    ...groupBadgeViewerFragment
  }
`

const UserGroupsCardFragment = graphql`
  fragment userGroupsCardFragment on User
  @refetchable(queryName: "userGroupsCardPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    groupCount
    groups(after: $cursor, first: $first) @connection(key: "User_groups") {
      edges {
        node {
          id
          ...groupBadgeFragment
        }
      }
    }
  }
`

interface UserGroupsCardProps {
  viewer: userGroupsCardViewerFragment$key
  user: userGroupsCardFragment$key
}

export function UserGroupsCard({ viewer, user }: UserGroupsCardProps) {
  const viewerData = useFragment(UserGroupsCardViewerFragment, viewer)
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    UserGroupsCardFragment,
    user
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Groups{' '}
          <span className="text-gray-500">
            ({formatNumber(data.groupCount)})
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-4">
          {!data.groups?.edges?.length && (
            <div className="text-sm text-gray-500">
              This user is not a member of any groups yet.
            </div>
          )}
          {data.groups?.edges?.map((edge) => {
            if (!edge?.node) return null

            return (
              <GroupBadge
                key={edge.node.id}
                viewer={viewerData}
                group={edge.node}
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
