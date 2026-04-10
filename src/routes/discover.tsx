import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Navigation } from '../components/navigation'
import type { discoverQuery } from './__generated__/discoverQuery.graphql'

const DiscoverQuery = graphql`
  query discoverQuery {
    ...navigationFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<discoverQuery>(DiscoverQuery, {})

  return (
    <div className="p-8">
      <div className="mx-auto flex max-w-7xl grow gap-8">
        <div className="w-72 shrink-0">
          <div className="sticky top-8">
            <Navigation query={data} />
          </div>
        </div>
        <div className="grid w-full grow gap-4">{/* TODO: Users here */}</div>
      </div>
    </div>
  )
}
