import { graphql, useFragment } from 'react-relay'
import { Link } from 'react-router'
import { formatDate } from '../../utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../common/tooltip'
import {
  UserBadge,
  UserBadgeIcon,
  UserBadgeInfo,
  UserBadgeSubtitle,
  UserBadgeTitle
} from '../common/user-badge'
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
    <UserBadge>
      <UserBadgeIcon>
        <Link to={`/users/${data.user.id}`}>
          <ProfileAvatar node={data.user} />
        </Link>
      </UserBadgeIcon>
      <UserBadgeInfo>
        <UserBadgeTitle>
          <Link to={`/users/${data.user.id}`}>{data.user.name}</Link>
          {data.group && (
            <span className="ml-1 text-xs text-gray-400">
              in{' '}
              <Link to={`/groups/${data.group.id}`} className="underline">
                {data.group.name}
              </Link>
            </span>
          )}
        </UserBadgeTitle>
        <UserBadgeSubtitle>
          <Tooltip>
            <TooltipTrigger>{formatDate(data.createdAt)}</TooltipTrigger>
            <TooltipContent>
              {new Date(data.createdAt).toLocaleString()}
            </TooltipContent>
          </Tooltip>
        </UserBadgeSubtitle>
      </UserBadgeInfo>
    </UserBadge>
  )
}
