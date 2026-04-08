import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-relay'
import { useSearchParams } from 'react-router'
import { graphql } from 'relay-runtime'
import * as yup from 'yup'
import { type signInFormMutation } from './__generated__/signInFormMutation.graphql'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const SignInFormMutation = graphql`
  mutation signInFormMutation($input: SignInInput!) {
    signIn(input: $input) {
      currentUser {
        id
        name
      }
      errors
    }
  }
`

export function SignInForm() {
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect') || '/'
  const [signIn, isSigningIn] =
    useMutation<signInFormMutation>(SignInFormMutation)
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'admin@example.com',
      password: 'admin'
    }
  })

  return (
    <form
      onSubmit={handleSubmit((data) => {
        signIn({
          variables: {
            input: data
          },
          onCompleted: (res) => {
            if (res.signIn?.errors.length) {
              alert('Failed to sign in')
              return
            }

            window.location.assign(redirect)
          },
          onError: () => {}
        })
      })}>
      <input type="email" {...register('email')} />
      <input type="password" {...register('password')} />
      <button type="submit" disabled={isSigningIn}>
        Sign In
      </button>
    </form>
  )
}
