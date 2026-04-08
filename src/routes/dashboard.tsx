import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Feed } from '../components/feed'
import { Navigation } from '../components/navigation'
import { type dashboardQuery } from './__generated__/dashboardQuery.graphql'

const DashboardQuery = graphql`
  query dashboardQuery {
    ...navigationQuery
    ...feedFragment
    currentUser {
      id
      name
    }
  }
`

export function Component() {
  const data = useLazyLoadQuery<dashboardQuery>(DashboardQuery, {})

  return (
    <div className="flex h-dvh w-full justify-center gap-8">
      <div className="w-3/12">
        <Navigation query={data} />
      </div>
      <main className="w-6/12">
        <Feed query={data} />
      </main>
      <div className="w-3/12">Who to follow</div>
    </div>
  )
}
