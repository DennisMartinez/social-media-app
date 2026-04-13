import { graphql, useFragment } from 'react-relay'
import { Link } from 'react-router'
import { randomColor } from '../../utils'
import { Card, CardBody } from '../common/card'
import { type groupCardFragment$key } from './__generated__/groupCardFragment.graphql'
import { type groupCardViewerFragment$key } from './__generated__/groupCardViewerFragment.graphql'
import { GroupAvatar } from './group-avatar'
import { GroupMembershipButton } from './group-membership-button'

const GroupCardViewerFragment = graphql`
  fragment groupCardViewerFragment on User {
    ...groupMembershipButtonViewerFragment
  }
`

const GroupCardFragment = graphql`
  fragment groupCardFragment on Group {
    id
    name
    bio
    createdAt
    ...groupAvatarFragment
    ...groupMembershipButtonFragment
  }
`

interface GroupCardProps {
  viewer: groupCardViewerFragment$key
  group: groupCardFragment$key
}

export function GroupCard({ viewer, group }: GroupCardProps) {
  const data = useFragment(GroupCardFragment, group)
  const viewerData = useFragment(GroupCardViewerFragment, viewer)

  return (
    <Card className="relative">
      <div
        className="-mx-4 -mt-4 -mb-10 h-24"
        style={{ backgroundColor: randomColor(data.name) }}
      />
      <CardBody className="flex grow flex-col gap-4">
        <GroupAvatar group={data} size="xl" className="ring-2 ring-white" />
        <div className="flex grow flex-col gap-2">
          <div className="line-clamp-2 font-medium">
            <Link to={`/groups/${data.id}`} className="hover:underline">
              {data.name}
            </Link>
          </div>
          <div className="line-clamp-3 text-gray-600">
            {data.bio || 'No description provided.'}
          </div>
          <div className="mt-auto">
            <GroupMembershipButton viewer={viewerData} group={data} />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
