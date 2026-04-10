import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Navigation } from '../components/navigation'
import { type discoverQuery } from './__generated__/discoverQuery.graphql'

const DiscoverQuery = graphql`
  query discoverQuery {
    ...navigationFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<discoverQuery>(DiscoverQuery, {})

  return (
    <div className="p-8">
      <div className="mx-auto flex max-w-7xl grow flex-col gap-8 md:flex-row">
        <div className="flex w-full shrink-0 flex-col gap-4 md:w-72">
          <div className="top-8 xl:sticky">
            <Navigation query={data} />
          </div>
        </div>
        <div className="grow">
          <h1 className="text-2xl font-bold">Discover</h1>
          <p className="text-gray-500">Discover new people and posts here.</p>
        </div>
      </div>
    </div>
  )
}
