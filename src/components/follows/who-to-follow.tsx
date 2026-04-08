import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type whoToFollowFragment$key } from './__generated__/whoToFollowFragment.graphql'
import { FollowUser } from './follow-user'
import { UnfollowUser } from './unfollow-user'

const WhoToFollowFragment = graphql`
  fragment whoToFollowFragment on Query {
    usersToFollow {
      edges {
        node {
          id
          name
          isFollowing
          ...followUserFragment
          ...unfollowUserFragment
        }
      }
    }
  }
`

interface WhoToFollowProps {
  query: whoToFollowFragment$key
}

export function WhoToFollow({ query }: WhoToFollowProps) {
  const data = useFragment(WhoToFollowFragment, query)

  return (
    <div>
      <h2>Who to Follow</h2>
      <ul>
        {data.usersToFollow.edges?.map((edge) => {
          if (!edge?.node) return null
          return (
            <li key={edge.node.id}>
              {edge.node.name}
              {edge.node.isFollowing ? (
                <UnfollowUser user={edge.node} />
              ) : (
                <FollowUser user={edge.node} />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
