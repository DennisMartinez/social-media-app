import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import type { signOutButtonMutation } from './__generated__/signOutButtonMutation.graphql'

const SignOutButtonMutation = graphql`
  mutation signOutButtonMutation($input: SignOutInput!) {
    signOut(input: $input) {
      success
      errors
    }
  }
`

export function SignOutButton() {
  const [signOut, isSigningOut] = useMutation<signOutButtonMutation>(
    SignOutButtonMutation
  )

  return (
    <button
      disabled={isSigningOut}
      onClick={() => {
        signOut({
          variables: { input: {} },
          onCompleted: () => {
            window.location.assign('/sign-in')
          },
          onError: () => {}
        })
      }}>
      Sign Out
    </button>
  )
}
