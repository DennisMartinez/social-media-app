import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { GroupsGrid } from '../components/groups/groups-grid'
import { Navigation } from '../components/navigation/navigation'
import { type groupsQuery } from './__generated__/groupsQuery.graphql'

const GroupsQuery = graphql`
  query groupsQuery {
    ...navigationFragment
    ...groupsGridFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<groupsQuery>(GroupsQuery, {})

  return (
    <div className="p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row">
        <div className="flex w-full shrink-0 flex-col gap-4 md:w-72">
          <div className="top-8 xl:sticky">
            <Navigation query={data} />
          </div>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-4">
          <GroupsGrid query={data} />
        </div>
      </div>
    </div>
  )
}
