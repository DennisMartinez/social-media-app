import { MailIcon } from 'lucide-react'
import { graphql, useFragment } from 'react-relay'
import { Badge } from '../common/badge'
import { Card, CardBody } from '../common/card'
import { FollowButton } from '../follows/follow-button'
import { UserAvatar } from '../users/user-avatar'
import { type profileHeaderFragment$key } from './__generated__/profileHeaderFragment.graphql'
import { type profileHeaderViewerFragment$key } from './__generated__/profileHeaderViewerFragment.graphql'

const ProfileHeaderViewerFragment = graphql`
  fragment profileHeaderViewerFragment on User {
    ...followButtonFollowerFragment
  }
`

const ProfileHeaderFragment = graphql`
  fragment profileHeaderFragment on User {
    id
    name
    email
    bio
    ...userAvatarFragment
    ...followButtonFolloweeFragment
  }
`

interface ProfileHeaderProps {
  viewer: profileHeaderViewerFragment$key
  user: profileHeaderFragment$key
}

export function ProfileHeader({ viewer, user }: ProfileHeaderProps) {
  const data = useFragment(ProfileHeaderFragment, user)
  const viewerData = useFragment(ProfileHeaderViewerFragment, viewer)

  return (
    <Card className="p-6">
      <div className="-mx-6 -mt-6 -mb-20 h-24 bg-linear-to-r from-blue-400 to-blue-500 lg:-mb-10 lg:h-48" />
      <CardBody className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
        <UserAvatar user={data} className="size-32 shadow ring-4 ring-white" />
        <div className="flex w-full min-w-0 flex-col items-center gap-4 lg:mt-10 lg:items-start">
          <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
            <h1 className="truncate text-2xl font-bold">{data.name}</h1>
            <FollowButton follower={viewerData} followee={data} />
          </div>
          <Badge>
            <MailIcon />
            {data.email}
          </Badge>
          <div className="text-center wrap-break-word text-gray-700 lg:text-left">
            {data.bio || 'This user has no bio yet.'}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
