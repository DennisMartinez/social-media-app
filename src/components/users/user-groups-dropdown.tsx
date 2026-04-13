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

interface UserGroupsDropdownProps {
  user: userGroupsDropdownFragment$key
  onGroupSelect?: (groupId: string | null) => void
}

export function UserGroupsDropdown({
  user,
  onGroupSelect
}: UserGroupsDropdownProps) {
  const data = useFragment(UserGroupsDropdownFragment, user)
  const [selectedItem, setSelectedItem] = useState('Me')

  return (
    <Dropdown>
      <DropdownTrigger
        render={
          <Button variant="outline" size="xs">
            {selectedItem}
            <ChevronDownIcon className="translate-y-px" />
          </Button>
        }
      />
      <DropdownMenu>
        <DropdownMenuItem
          onClick={() => {
            setSelectedItem('Me')
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
                setSelectedItem(edge.node.name)
                onGroupSelect?.(edge.node.id)
              }}>
              {edge.node.name}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}
