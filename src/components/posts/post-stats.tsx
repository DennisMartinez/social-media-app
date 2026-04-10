import { MessageCircleIcon, ThumbsUpIcon } from 'lucide-react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useLike, useUnlike } from '../../hooks/use-likes'
import { Button } from '../common/button'
import { type postStatsFragment$key } from './__generated__/postStatsFragment.graphql'

const PostStatsFragment = graphql`
  fragment postStatsFragment on Post {
    ...useLikesFragment

    id
    likesCount
    commentsCount
    viewerHasLiked
  }
`

interface PostStatsProps {
  post: postStatsFragment$key
  onCommentsClick?: () => void
}

export function PostStats({ post, onCommentsClick }: PostStatsProps) {
  const data = useFragment(PostStatsFragment, post)
  const [like, isPendingLike] = useLike(data)
  const [unlike, isPendingUnlike] = useUnlike(data)

  return (
    <div className="flex items-center justify-between border-t border-b border-gray-200 py-2">
      <div className="space-between flex">
        <Button
          disabled={isPendingLike || isPendingUnlike}
          variant="ghost"
          onClick={() => {
            if (data.viewerHasLiked) {
              unlike({ likeableId: data.id })
              return
            }

            like({ likeableId: data.id })
          }}>
          <ThumbsUpIcon className="size-4" />
          <div>{data.likesCount || 0} likes</div>
        </Button>
        <Button variant="ghost" onClick={onCommentsClick}>
          <MessageCircleIcon className="size-4" />
          <div>{data.commentsCount || 0} comments</div>
        </Button>
      </div>
    </div>
  )
}
