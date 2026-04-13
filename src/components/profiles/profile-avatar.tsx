import { type ComponentProps } from 'react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Avatar } from '../common/avatar'
import { type profileAvatarFragment$key } from './__generated__/profileAvatarFragment.graphql'

const ProfileAvatarFragment = graphql`
  fragment profileAvatarFragment on Node {
    __typename
    ... on User {
      name
      avatarUrl
    }
    ... on Group {
      name
      avatarUrl
    }
  }
`

interface ProfileAvatar extends ComponentProps<typeof Avatar> {
  node: profileAvatarFragment$key
}

export function ProfileAvatar({ node, ...props }: ProfileAvatar) {
  const data = useFragment(ProfileAvatarFragment, node)
  const isUser = data.__typename === 'User'
  const isGroup = data.__typename === 'Group'

  if (!isUser && !isGroup) {
    return null
  }

  return <Avatar {...props} name={data.name} url={data.avatarUrl} />
}
