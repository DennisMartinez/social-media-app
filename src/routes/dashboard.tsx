import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Feed } from '../components/feed'
import { RecommendedFollows } from '../components/follows/recommended-follows'
import { Navigation } from '../components/navigation'
import { type dashboardQuery } from './__generated__/dashboardQuery.graphql'

const DashboardQuery = graphql`
  query dashboardQuery {
    currentUser {
      ...feedFragment
      ...recommendedFollowsFragment
    }
    ...navigationFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<dashboardQuery>(DashboardQuery, {})

  return (
    <div className="flex w-full">
      <div className="w-72">
        <Navigation query={data} />
      </div>
      <div className="mx-auto flex max-w-5xl grow gap-8 p-8">
        <Feed user={data.currentUser} />
        <div className="w-72">
          <RecommendedFollows user={data.currentUser} />
        </div>
      </div>
    </div>
  )
}
