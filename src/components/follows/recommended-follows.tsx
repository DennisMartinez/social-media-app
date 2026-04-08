import { useFragment } from 'react-relay'
import { Link } from 'react-router'
import { graphql } from 'relay-runtime'
import { type recommendedFollowsFragment$key } from './__generated__/recommendedFollowsFragment.graphql'
import { FollowUser } from './follow-user'
import { UnfollowUser } from './unfollow-user'

const RecommendedFollowsFragment = graphql`
  fragment recommendedFollowsFragment on User {
    recommendedFollows {
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

interface RecommendedFollowsProps {
  user: recommendedFollowsFragment$key
}

export function RecommendedFollows({ user }: RecommendedFollowsProps) {
  const data = useFragment(RecommendedFollowsFragment, user)

  return (
    <div>
      <h2>Who to Follow</h2>
      <ul>
        {data.recommendedFollows.edges?.map((edge) => {
          if (!edge?.node) return null
          return (
            <li key={edge.node.id}>
              <Link to={`/users/${edge.node.id}`} className="font-bold">
                {edge.node.name}
              </Link>
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
