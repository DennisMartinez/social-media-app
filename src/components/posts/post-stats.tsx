import { MessageCircleIcon, ThumbsUpIcon } from 'lucide-react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useLike, useUnlike } from '../../hooks/use-likes'
import { cn, pluralize } from '../../utils'
import { Button } from '../common/button'
import { type postStatsFragment$key } from './__generated__/postStatsFragment.graphql'

const PostStatsFragment = graphql`
  fragment postStatsFragment on Post {
    id
    likesCount
    commentsCount
    viewerHasLiked
    ...useLikesLikeableFragment
  }
`

interface PostStatsProps {
  post: postStatsFragment$key
  onCommentsClick?: () => void
}

export function PostStats({ post, onCommentsClick }: PostStatsProps) {
  const data = useFragment(PostStatsFragment, post)
  const [like] = useLike(data)
  const [unlike] = useUnlike(data)

  const likesCount = data.likesCount || 0
  const commentsCount = data.commentsCount || 0

  return (
    <div className="flex items-center gap-4 border-t border-b border-gray-200 py-1">
      <Button
        variant="ghost"
        size="xs"
        onClick={() => {
          if (data.viewerHasLiked) {
            unlike({ likeableId: data.id })
            return
          }

          like({ likeableId: data.id })
        }}>
        <ThumbsUpIcon
          className={cn('size-4', {
            'text-blue-500': data.viewerHasLiked
          })}
        />
        <div className="flex items-center gap-1">
          <div>{likesCount}</div>
          <div>{pluralize(likesCount, 'like', 'likes')}</div>
        </div>
      </Button>
      <Button variant="ghost" size="xs" onClick={onCommentsClick}>
        <MessageCircleIcon className="size-4" />
        <div className="flex items-center gap-1">
          <div>{commentsCount}</div>
          <div>{pluralize(commentsCount, 'comment', 'comments')}</div>
        </div>
      </Button>
    </div>
  )
}
