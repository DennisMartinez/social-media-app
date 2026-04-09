import { useFragment } from 'react-relay'
import { Link } from 'react-router'
import { graphql } from 'relay-runtime'
import { UserAvatar } from '../user-avatar'
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
          ...userAvatarFragment
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
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
      <h2 className="text-sm font-medium">Who to Follow</h2>
      <ul className="flex flex-col gap-4">
        {data.recommendedFollows.edges?.map((edge) => {
          if (!edge?.node) return null

          return (
            <li
              key={edge.node.id}
              className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate">
                <UserAvatar user={edge.node} />
                <Link to={`/users/${edge.node.id}`} className="truncate">
                  <div className="truncate font-medium text-gray-800">
                    {edge.node.name}
                  </div>
                  <span className="block truncate text-sm text-gray-500">
                    @jvoorhees
                  </span>
                </Link>
              </div>
              <div>
                {edge.node.isFollowing ? (
                  <UnfollowUser user={edge.node} />
                ) : (
                  <FollowUser user={edge.node} />
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
