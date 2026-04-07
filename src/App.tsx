import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type AppMutation } from './__generated__/AppMutation.graphql'
import { type AppQuery } from './__generated__/AppQuery.graphql'

const AppQuery = graphql`
  query AppQuery {
    currentUser {
      id
      name
    }
  }
`

const AppMutation = graphql`
  mutation AppMutation($input: SignInInput!) {
    signIn(input: $input) {
      user {
        id
        name
      }
    }
  }
`

export function App() {
  const data = useLazyLoadQuery<AppQuery>(AppQuery, {})
  const [signIn] = useMutation<AppMutation>(AppMutation)

  return (
    <div className="flex h-screen items-center justify-center">
      {data.currentUser ? (
        <h1 className="text-4xl font-bold text-gray-800">
          {data.currentUser?.name}
        </h1>
      ) : (
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Please sign in to see your name
          </h1>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() =>
              signIn({
                variables: {
                  input: {
                    email: 'admin@example.com',
                    password: 'password'
                  }
                }
              })
            }>
            Sign In
          </button>
        </div>
      )}
    </div>
  )
}
