import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type followingGridFragment$key } from './__generated__/followingGridFragment.graphql'
import { FollowerCard } from './follower-card'

const FollowingGridFragment = graphql`
  fragment followingGridFragment on User {
    following(first: 10) {
      edges {
        node {
          id
          ...followerCardFragment
        }
      }
    }
  }
`

interface FollowingGridProps {
  user: followingGridFragment$key
}

export function FollowingGrid({ user }: FollowingGridProps) {
  const data = useFragment(FollowingGridFragment, user)

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.following?.edges?.map((edge) => {
        if (!edge?.node) return null

        return (
          <div key={edge.node.id}>
            <FollowerCard follower={edge.node} />
          </div>
        )
      })}
    </div>
  )
}
