import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import { type groupMembershipButtonFragment$key } from './__generated__/groupMembershipButtonFragment.graphql'

const GroupMembershipButtonFragment = graphql`
  fragment groupMembershipButtonFragment on Group {
    id
    viewerCanJoin
    viewerCanLeave
    viewerIsMember
  }
`

const GroupMembershipButtonJoinMutation = graphql`
  mutation groupMembershipButtonJoinMutation($input: JoinGroupInput!) {
    joinGroup(input: $input) {
      errors
      group {
        ...groupMembershipButtonFragment
      }
    }
  }
`

const GroupMembershipButtonLeaveMutation = graphql`
  mutation groupMembershipButtonLeaveMutation($input: LeaveGroupInput!) {
    leaveGroup(input: $input) {
      errors
      group {
        ...groupMembershipButtonFragment
      }
    }
  }
`

interface GroupMembershipButtonProps {
  group: groupMembershipButtonFragment$key
}

export function GroupMembershipButton({ group }: GroupMembershipButtonProps) {
  const data = useFragment(GroupMembershipButtonFragment, group)
  const [joinGroup] = useMutation(GroupMembershipButtonJoinMutation)
  const [leaveGroup] = useMutation(GroupMembershipButtonLeaveMutation)

  return (
    <Button
      type="button"
      size="xs"
      className="w-full"
      onClick={() => {
        if (data.viewerIsMember) {
          leaveGroup({
            variables: {
              input: {
                groupId: data.id
              }
            }
          })
        } else if (data.viewerCanJoin) {
          joinGroup({
            variables: {
              input: {
                groupId: data.id
              }
            }
          })
        } else {
          // Request to join flow not implemented in this example
          alert('Request to join flow not implemented.')
        }
      }}>
      {data.viewerIsMember
        ? 'Leave Group'
        : data.viewerCanJoin
          ? 'Join Group'
          : 'Request to Join'}
    </Button>
  )
}
