import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Navigation } from '../components/navigation'
import { type dashboardQuery } from './__generated__/dashboardQuery.graphql'

const DashboardQuery = graphql`
  query dashboardQuery {
    ...navigationQuery
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
      <main className="w-6/12">Feed here</main>
      <div className="w-3/12">Who to follow</div>
    </div>
  )
}
