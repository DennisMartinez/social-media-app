import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { FollowingGrid } from '../components/follows/following-grid'
import { Navigation } from '../components/navigation'
import { type followingQuery } from './__generated__/followingQuery.graphql'

const FollowingQuery = graphql`
  query followingQuery {
    currentUser {
      ...followingGridFragment
    }
    ...navigationFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<followingQuery>(FollowingQuery, {})

  return (
    <div className="flex w-full justify-center gap-8">
      <div className="w-3/12">
        <Navigation query={data} />
      </div>
      <main className="w-9/12">
        <h1 className="mb-4 text-2xl font-bold">Following</h1>
        <FollowingGrid user={data.currentUser} />
      </main>
    </div>
  )
}
