import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type AppQuery } from './__generated__/AppQuery.graphql'

const AppQuery = graphql`
  query AppQuery {
    testField
  }
`

export function App() {
  const data = useLazyLoadQuery<AppQuery>(AppQuery, {})

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">{data.testField}</h1>
    </div>
  )
}
