import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type followersGridFragment$key } from './__generated__/followersGridFragment.graphql'
import { FollowerCard } from './follower-card'

const FollowersGridFragment = graphql`
  fragment followersGridFragment on User {
    followers(first: 10) {
      edges {
        node {
          id
          ...followerCardFragment
        }
      }
    }
  }
`

interface FollowersGridProps {
  user: followersGridFragment$key
}

export function FollowersGrid({ user }: FollowersGridProps) {
  const data = useFragment(FollowersGridFragment, user)

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.followers?.edges?.map((edge) => {
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
