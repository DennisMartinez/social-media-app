import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type groupsGridFragment$key } from './__generated__/groupsGridFragment.graphql'
import { GroupCard } from './group-card'

const GroupsGridFragment = graphql`
  fragment groupsGridFragment on Query {
    groups {
      edges {
        node {
          id
          ...groupCardFragment
        }
      }
    }
  }
`

interface GroupsGridProps {
  query: groupsGridFragment$key
}

export function GroupsGrid({ query }: GroupsGridProps) {
  const data = useFragment(GroupsGridFragment, query)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.groups?.edges?.map((edge) => {
        if (!edge?.node) return null
        return <GroupCard key={edge.node.id} group={edge.node} />
      })}
    </div>
  )
}
