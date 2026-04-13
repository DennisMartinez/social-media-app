import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger
} from '../common/dropdown'
import { type userGroupsDropdownFragment$key } from './__generated__/userGroupsDropdownFragment.graphql'

const UserGroupsDropdownFragment = graphql`
  fragment userGroupsDropdownFragment on User {
    groupCount
    groups {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export interface Group {
  id: string
  name: string
}

interface UserGroupsDropdownProps {
  user: userGroupsDropdownFragment$key
  onGroupSelect?: (group: Group | null) => void
}

export function UserGroupsDropdown({
  user,
  onGroupSelect
}: UserGroupsDropdownProps) {
  const data = useFragment(UserGroupsDropdownFragment, user)
  const [selectedItem, setSelectedItem] = useState<Group | null>(null)

  if (!data.groupCount) {
    return null
  }

  return (
    <Dropdown>
      <DropdownTrigger
        render={
          <Button variant="outline" size="xs" className="max-w-37.5">
            <span className="truncate">
              {selectedItem ? selectedItem.name : 'Select group'}
            </span>
            <ChevronDownIcon className="translate-y-px" />
          </Button>
        }
      />
      <DropdownMenu align="start">
        <DropdownMenuItem
          onClick={() => {
            setSelectedItem(null)
            onGroupSelect?.(null)
          }}>
          Me
        </DropdownMenuItem>
        {data.groups?.edges?.map((edge) => {
          if (!edge?.node) return null

          return (
            <DropdownMenuItem
              key={edge.node.id}
              onClick={() => {
                if (!edge?.node) return
                setSelectedItem(edge.node)
                onGroupSelect?.(edge.node)
              }}>
              {edge.node.name}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}
