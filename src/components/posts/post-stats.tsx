import { MessageCircleIcon, ThumbsUpIcon } from 'lucide-react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type postStatsFragment$key } from './__generated__/postStatsFragment.graphql'

const PostStatsFragment = graphql`
  fragment postStatsFragment on Post {
    id
    likesCount
    commentsCount
    viewerHasLiked
  }
`

interface PostStatsProps {
  post: postStatsFragment$key
}

export function PostStats({ post }: PostStatsProps) {
  const data = useFragment(PostStatsFragment, post)

  return (
    <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
      <div className="space-between flex gap-12">
        <div className="flex items-center gap-1 text-sm">
          {/* {data.viewerHasLiked ? (
            <Unlike likeable={data} />
          ) : (
            <Like likeable={data} />
          )} */}
          <ThumbsUpIcon className="size-4" />
          <div>{data.likesCount || 0} likes</div>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <MessageCircleIcon className="size-4" />
          <div>{data.commentsCount || 0} comments</div>
        </div>
      </div>
    </div>
  )
}
