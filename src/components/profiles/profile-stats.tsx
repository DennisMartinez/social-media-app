import { MessageCircle, ScrollText, ThumbsUpIcon } from 'lucide-react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { formatNumber, pluralize } from '../../utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../common/tooltip'
import { type profileStatsFragment$key } from './__generated__/profileStatsFragment.graphql'

const ProfileStatsFragment = graphql`
  fragment profileStatsFragment on User {
    postCount
    likeCount
    commentCount
  }
`

interface ProfileStatsProps {
  user: profileStatsFragment$key
}

export function ProfileStats({ user }: ProfileStatsProps) {
  const data = useFragment(ProfileStatsFragment, user)

  return (
    <div className="flex gap-6">
      <Tooltip delay={0}>
        <TooltipTrigger>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <ScrollText className="size-4" />
            {formatNumber(data.postCount)}
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          {formatNumber(data.postCount)}{' '}
          {pluralize(data.postCount, 'Post', 'Posts')}
        </TooltipContent>
      </Tooltip>
      <Tooltip delay={0}>
        <TooltipTrigger>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MessageCircle className="size-4" />
            {formatNumber(data.commentCount)}
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          {formatNumber(data.commentCount)}{' '}
          {pluralize(data.commentCount, 'Comment', 'Comments')}
        </TooltipContent>
      </Tooltip>
      <Tooltip delay={0}>
        <TooltipTrigger>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <ThumbsUpIcon className="size-4" />
            {formatNumber(data.likeCount)}
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          {formatNumber(data.likeCount)}{' '}
          {pluralize(data.likeCount, 'Like', 'Likes')}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
