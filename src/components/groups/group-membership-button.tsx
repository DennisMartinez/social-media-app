import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import { type groupMembershipButtonFragment$key } from './__generated__/groupMembershipButtonFragment.graphql'
import { type groupMembershipButtonViewerFragment$key } from './__generated__/groupMembershipButtonViewerFragment.graphql'

const GroupMembershipButtonViewerFragment = graphql`
  fragment groupMembershipButtonViewerFragment on User {
    id
    groupCount
  }
`

const GroupMembershipButtonFragment = graphql`
  fragment groupMembershipButtonFragment on Group {
    id
    memberCount
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
      user {
        ...groupMembershipButtonViewerFragment
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
      user {
        ...groupMembershipButtonViewerFragment
      }
    }
  }
`

interface GroupMembershipButtonProps {
  viewer: groupMembershipButtonViewerFragment$key
  group: groupMembershipButtonFragment$key
}

export function GroupMembershipButton({
  viewer,
  group
}: GroupMembershipButtonProps) {
  const data = useFragment(GroupMembershipButtonFragment, group)
  const viewerData = useFragment(GroupMembershipButtonViewerFragment, viewer)
  const [joinGroup] = useMutation(GroupMembershipButtonJoinMutation)
  const [leaveGroup] = useMutation(GroupMembershipButtonLeaveMutation)

  return (
    <Button
      variant={data.viewerIsMember ? 'outline' : 'primary'}
      size="xs"
      className="w-full"
      onClick={() => {
        if (data.viewerIsMember) {
          leaveGroup({
            variables: {
              input: {
                groupId: data.id
              }
            },
            optimisticResponse: {
              leaveGroup: {
                errors: [],
                group: {
                  id: data.id,
                  memberCount: data.memberCount - 1,
                  viewerCanJoin: true,
                  viewerCanLeave: false,
                  viewerIsMember: false
                },
                user: {
                  id: viewerData.id,
                  groupCount: viewerData.groupCount - 1
                }
              }
            }
          })
        } else if (data.viewerCanJoin) {
          joinGroup({
            variables: {
              input: {
                groupId: data.id
              }
            },
            optimisticResponse: {
              joinGroup: {
                errors: [],
                group: {
                  id: data.id,
                  memberCount: data.memberCount + 1,
                  viewerCanJoin: false,
                  viewerCanLeave: true,
                  viewerIsMember: true
                },
                user: {
                  id: viewerData.id,
                  groupCount: viewerData.groupCount + 1
                }
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
