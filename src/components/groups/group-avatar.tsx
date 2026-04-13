import { type ComponentProps } from 'react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Avatar } from '../common/avatar'
import { type groupAvatarFragment$key } from './__generated__/groupAvatarFragment.graphql'

const GroupAvatarFragment = graphql`
  fragment groupAvatarFragment on Group {
    name
    avatarUrl
  }
`

interface GroupAvatar extends ComponentProps<typeof Avatar> {
  group: groupAvatarFragment$key
}

export function GroupAvatar({ group, ...props }: GroupAvatar) {
  const data = useFragment(GroupAvatarFragment, group)

  return <Avatar {...props} name={data.name} url={data.avatarUrl} />
}
