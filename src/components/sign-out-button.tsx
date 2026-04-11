import { LogOutIcon } from 'lucide-react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type signOutButtonMutation } from './__generated__/signOutButtonMutation.graphql'
import { Button } from './common/button'

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
    <Button
      variant="ghost"
      aria-label="Sign Out"
      className="size-10"
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
      <LogOutIcon />
    </Button>
  )
}
