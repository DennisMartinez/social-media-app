import { useLazyLoadQuery } from 'react-relay'
import { Navigate, Outlet, useLocation } from 'react-router'
import { graphql } from 'relay-runtime'
import { type AppQuery } from './__generated__/AppQuery.graphql'

const AppQuery = graphql`
  query AppQuery {
    currentUser {
      id
      name
    }
  }
`

export function Component() {
  const location = useLocation()
  const data = useLazyLoadQuery<AppQuery>(AppQuery, {})

  if (!data.currentUser) {
    return (
      <Navigate
        to="/sign-in"
        state={{ redirect: location.pathname + location.search }}
        replace
      />
    )
  }

  return <Outlet />
}
