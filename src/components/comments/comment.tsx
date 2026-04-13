import { useFragment } from 'react-relay'
import { Link } from 'react-router'
import { graphql } from 'relay-runtime'
import { formatDate } from '../../utils'
import {
  ProfileBadge,
  ProfileBadgeAction,
  ProfileBadgeIcon,
  ProfileBadgeInfo,
  ProfileBadgeSubtitle,
  ProfileBadgeTitle
} from '../common/profile-badge'
import { Tooltip, TooltipContent, TooltipTrigger } from '../common/tooltip'
import { ProfileAvatar } from '../profiles/profile-avatar'
import { type commentFragment$key } from './__generated__/commentFragment.graphql'
import { CommentContent } from './comment-content'
import { CommentMenu } from './comment-menu'

const CommentFragment = graphql`
  fragment commentFragment on Comment {
    id
    createdAt
    user {
      id
      name
      avatarUrl
      ...profileAvatarFragment
    }
    ...commentMenuFragment
    ...commentContentFragment
  }
`

interface CommentProps {
  comment: commentFragment$key
  onDestroy?: () => void
}

export function Comment({ comment, onDestroy }: CommentProps) {
  const data = useFragment(CommentFragment, comment)

  return (
    <div className="flex flex-col gap-2">
      <ProfileBadge>
        <ProfileBadgeIcon>
          <Link to={`/users/${data.user.id}`}>
            <ProfileAvatar node={data.user} size="md" />
          </Link>
        </ProfileBadgeIcon>
        <ProfileBadgeInfo>
          <ProfileBadgeTitle className="text-sm">
            <Link to={`/users/${data.user.id}`}>{data.user.name}</Link>
          </ProfileBadgeTitle>
          <ProfileBadgeSubtitle>
            <Tooltip>
              <TooltipTrigger className="text-xs">
                {formatDate(data.createdAt)}
              </TooltipTrigger>
              <TooltipContent>
                {new Date(data.createdAt).toLocaleString()}
              </TooltipContent>
            </Tooltip>
          </ProfileBadgeSubtitle>
        </ProfileBadgeInfo>
        <ProfileBadgeAction>
          <CommentMenu comment={data} onDestroy={onDestroy} />
        </ProfileBadgeAction>
      </ProfileBadge>
      <div className="ml-14">
        <CommentContent comment={data} />
      </div>
    </div>
  )
}
