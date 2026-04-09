import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Navigation } from '../components/navigation'
import { type likesQuery } from './__generated__/likesQuery.graphql'

const LikesQuery = graphql`
  query likesQuery {
    ...navigationFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<likesQuery>(LikesQuery, {})

  return (
    <div className="flex w-full justify-center gap-8">
      <div className="w-3/12">
        <Navigation query={data} />
      </div>
      <main className="w-9/12">
        <h1 className="mb-4 text-2xl font-bold">Likes</h1>
      </main>
    </div>
  )
}
