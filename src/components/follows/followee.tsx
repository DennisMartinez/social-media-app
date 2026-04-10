import { useFragment } from 'react-relay'
import { Link } from 'react-router'
import { graphql } from 'relay-runtime'
import { UserAvatar } from '../user-avatar'
import { type followeeFragment$key } from './__generated__/followeeFragment.graphql'
import { FollowButton } from './follow-button'

const FolloweeFragment = graphql`
  fragment followeeFragment on User {
    id
    name
    email
    ...followButtonFragment
    ...userAvatarFragment
  }
`

interface FolloweeProps {
  followee: followeeFragment$key
}

export function Followee({ followee }: FolloweeProps) {
  const data = useFragment(FolloweeFragment, followee)

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 truncate">
        <UserAvatar user={data} />
        <Link to={`/users/${data.id}`} className="truncate">
          <div className="truncate font-medium text-gray-800">{data.name}</div>
          <span className="block truncate text-sm text-gray-500">
            {data.email}
          </span>
        </Link>
      </div>
      <div>
        <FollowButton followee={data} />
      </div>
    </div>
  )
}
