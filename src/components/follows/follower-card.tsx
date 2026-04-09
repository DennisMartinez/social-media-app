import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type followerCardFragment$key } from './__generated__/followerCardFragment.graphql'

const FollowerCardFragment = graphql`
  fragment followerCardFragment on User {
    id
    name
    # username
    # profilePictureUrl
  }
`

interface FollowerCardProps {
  follower: followerCardFragment$key
}

export function FollowerCard({ follower }: FollowerCardProps) {
  const data = useFragment(FollowerCardFragment, follower)

  return <div>{data.name}</div>
}
