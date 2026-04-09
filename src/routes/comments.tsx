import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Navigation } from '../components/navigation'
import { type commentsQuery } from './__generated__/commentsQuery.graphql'

const CommentsQuery = graphql`
  query commentsQuery {
    ...navigationFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<commentsQuery>(CommentsQuery, {})

  return (
    <div className="flex w-full justify-center gap-8">
      <div className="w-3/12">
        <Navigation query={data} />
      </div>
      <main className="w-9/12">
        <h1 className="mb-4 text-2xl font-bold">Comments</h1>
      </main>
    </div>
  )
}
