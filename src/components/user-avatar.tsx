import { type ComponentProps } from 'react'
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

interface UserAvatar extends ComponentProps<typeof Avatar> {
  user: userAvatarFragment$key
}

export function UserAvatar({ user, ...props }: UserAvatar) {
  const data = useFragment(UserAvatarFragment, user)

  return <Avatar {...props} name={data.name} url={data.avatarUrl} />
}
