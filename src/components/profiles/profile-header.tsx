import { CrownIcon, MailIcon } from 'lucide-react'
import { graphql, useFragment } from 'react-relay'
import { randomColor } from '../../utils'
import { Badge } from '../common/badge'
import { Card, CardBody } from '../common/card'
import { FollowButton } from '../follows/follow-button'
import { type profileHeaderFragment$key } from './__generated__/profileHeaderFragment.graphql'
import { type profileHeaderViewerFragment$key } from './__generated__/profileHeaderViewerFragment.graphql'
import { ProfileAvatar } from './profile-avatar'

const ProfileHeaderViewerFragment = graphql`
  fragment profileHeaderViewerFragment on User {
    ...followButtonFollowerFragment
  }
`

const ProfileHeaderFragment = graphql`
  fragment profileHeaderFragment on Node {
    __typename
    id
    ... on User {
      name
      email
      bio
      ...profileAvatarFragment
      ...followButtonFolloweeFragment
    }
    ... on Group {
      name
      bio
      owner {
        name
      }
      ...profileAvatarFragment
    }
  }
`

interface ProfileHeaderProps {
  viewer: profileHeaderViewerFragment$key
  node: profileHeaderFragment$key
}

export function ProfileHeader({ viewer, node }: ProfileHeaderProps) {
  const data = useFragment(ProfileHeaderFragment, node)
  const viewerData = useFragment(ProfileHeaderViewerFragment, viewer)
  const isUser = data.__typename === 'User'
  const isGroup = data.__typename === 'Group'

  return (
    <Card className="p-6">
      <div
        className="-mx-6 -mt-6 -mb-20 h-24 lg:-mb-10 lg:h-48"
        style={{ backgroundColor: randomColor(data.name || '') }}
      />
      <CardBody className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
        <ProfileAvatar
          node={data}
          className="size-32 shadow ring-4 ring-white"
        />
        <div className="flex w-full min-w-0 flex-col items-center gap-4 lg:mt-10 lg:items-start">
          <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            {isUser && (
              <div className="mt-1">
                <FollowButton follower={viewerData} followee={data} />
              </div>
            )}
          </div>

          <Badge>
            {isUser && (
              <>
                <MailIcon />
                {data.email}
              </>
            )}
            {isGroup && (
              <>
                <CrownIcon />
                {data.owner?.name}
              </>
            )}
          </Badge>
          <div className="text-center wrap-break-word text-gray-700 lg:text-left">
            {data.bio || 'This user has no bio yet.'}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
