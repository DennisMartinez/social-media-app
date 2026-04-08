import {
  Environment,
  type FetchFunction,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'

const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch(import.meta.env.VITE_APP_API_URL, {
    method: 'POST',
    headers: {
      Accept:
        'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      query: request.text,
      variables
    })
  })
  const data = await resp.json()

  if ('errors' in data) {
    const hasUnauthorizedError = data.errors.some(
      (error: { message: string }) => error.message.includes('Unauthorized')
    )

    if (hasUnauthorizedError) {
      const redirect = window.location.href

      if (window.location.pathname !== '/sign-in') {
        throw new Promise(() => {
          window.location.assign(
            `/sign-in?redirect=${encodeURIComponent(redirect)}`
          )
        })
      }
    }
  }

  return data
}

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource())
  })
}

export const RelayEnvironment = createRelayEnvironment()
