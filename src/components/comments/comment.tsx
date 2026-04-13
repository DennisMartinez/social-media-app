import { useFragment } from 'react-relay'
import { Link } from 'react-router'
import { graphql } from 'relay-runtime'
import { formatDate } from '../../utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../common/tooltip'
import {
  UserBadge,
  UserBadgeAction,
  UserBadgeIcon,
  UserBadgeInfo,
  UserBadgeSubtitle,
  UserBadgeTitle
} from '../common/user-badge'
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
      <UserBadge>
        <UserBadgeIcon>
          <Link to={`/users/${data.user.id}`}>
            <ProfileAvatar node={data.user} size="md" />
          </Link>
        </UserBadgeIcon>
        <UserBadgeInfo>
          <UserBadgeTitle className="text-sm">
            <Link to={`/users/${data.user.id}`}>{data.user.name}</Link>
          </UserBadgeTitle>
          <UserBadgeSubtitle>
            <Tooltip>
              <TooltipTrigger className="text-xs">
                {formatDate(data.createdAt)}
              </TooltipTrigger>
              <TooltipContent>
                {new Date(data.createdAt).toLocaleString()}
              </TooltipContent>
            </Tooltip>
          </UserBadgeSubtitle>
        </UserBadgeInfo>
        <UserBadgeAction>
          <CommentMenu comment={data} onDestroy={onDestroy} />
        </UserBadgeAction>
      </UserBadge>
      <div className="ml-14">
        <CommentContent comment={data} />
      </div>
    </div>
  )
}
