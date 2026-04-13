import { graphql, useFragment } from 'react-relay'
import { Link } from 'react-router'
import { formatDate } from '../../utils'
import {
  ProfileBadge,
  ProfileBadgeIcon,
  ProfileBadgeInfo,
  ProfileBadgeSubtitle,
  ProfileBadgeTitle
} from '../common/profile-badge'
import { Tooltip, TooltipContent, TooltipTrigger } from '../common/tooltip'
import { ProfileAvatar } from '../profiles/profile-avatar'
import { type postUserFragment$key } from './__generated__/postUserFragment.graphql'

const PostUserFragment = graphql`
  fragment postUserFragment on Post {
    createdAt
    group {
      id
      name
    }
    user {
      id
      name
      ...profileAvatarFragment
    }
  }
`

interface PostUserProps {
  user: postUserFragment$key
}

export function PostUser({ user }: PostUserProps) {
  const data = useFragment(PostUserFragment, user)

  return (
    <ProfileBadge>
      <ProfileBadgeIcon>
        <Link to={`/users/${data.user.id}`}>
          <ProfileAvatar node={data.user} />
        </Link>
      </ProfileBadgeIcon>
      <ProfileBadgeInfo>
        <ProfileBadgeTitle>
          <Link to={`/users/${data.user.id}`}>{data.user.name}</Link>
          {data.group && (
            <span className="ml-1 text-xs text-gray-400">
              in{' '}
              <Link to={`/groups/${data.group.id}`} className="underline">
                {data.group.name}
              </Link>
            </span>
          )}
        </ProfileBadgeTitle>
        <ProfileBadgeSubtitle>
          <Tooltip>
            <TooltipTrigger>{formatDate(data.createdAt)}</TooltipTrigger>
            <TooltipContent>
              {new Date(data.createdAt).toLocaleString()}
            </TooltipContent>
          </Tooltip>
        </ProfileBadgeSubtitle>
      </ProfileBadgeInfo>
    </ProfileBadge>
  )
}
