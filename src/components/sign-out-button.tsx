import { LogOutIcon } from 'lucide-react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type signOutButtonMutation } from './__generated__/signOutButtonMutation.graphql'

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
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
      aria-label="Sign Out"
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
      <LogOutIcon className="size-5 text-gray-500" />
    </button>
  )
}
