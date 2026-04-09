import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type userAvatarFragment$key } from './__generated__/userAvatarFragment.graphql'
import { Avatar } from './common/avatar'

const UserAvatarFragment = graphql`
  fragment userAvatarFragment on User {
    name
    avatarUrl
  }
`

interface UserAvatar {
  user: userAvatarFragment$key
}

export function UserAvatar({ user }: UserAvatar) {
  const data = useFragment(UserAvatarFragment, user)

  return <Avatar name={data.name} url={data.avatarUrl} />
}
