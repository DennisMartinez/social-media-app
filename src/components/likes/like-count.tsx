import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type likeCountFragment$key } from './__generated__/likeCountFragment.graphql'
import { Like } from './like'
import { Unlike } from './unlike'

const LikeCountFragment = graphql`
  fragment likeCountFragment on Node {
    ...likeFragment
    ...unlikeFragment
    ... on Post {
      likesCount
      viewerHasLiked
    }
  }
`

interface LikeCountProps {
  likeable: likeCountFragment$key
}

export function LikeCount({ likeable }: LikeCountProps) {
  const data = useFragment(LikeCountFragment, likeable)

  return (
    <div className="flex items-center gap-1 text-sm">
      {data.viewerHasLiked ? (
        <Unlike likeable={data} />
      ) : (
        <Like likeable={data} />
      )}
      <div>{data.likesCount || 0} likes</div>
    </div>
  )
}
