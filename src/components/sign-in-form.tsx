import { yupResolver } from '@hookform/resolvers/yup'
import { useState, type ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-relay'
import { useSearchParams } from 'react-router'
import { graphql } from 'relay-runtime'
import * as yup from 'yup'
import { type signInFormMutation } from './__generated__/signInFormMutation.graphql'
import { Alert, AlertBody, AlertContent } from './common/alert'
import { Button } from './common/button'
import { FormField } from './common/form-field'
import { Input } from './common/input'

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: yup.string().required('Password is required')
})

const SignInFormMutation = graphql`
  mutation signInFormMutation($input: SignInInput!) {
    signIn(input: $input) {
      viewer {
        id
        name
      }
      errors
    }
  }
`

export function SignInForm(props: ComponentProps<'form'>) {
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect') || '/'
  const [signIn, isSigningIn] =
    useMutation<signInFormMutation>(SignInFormMutation)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'admin@example.com',
      password: 'admin'
    }
  })

  return (
    <form
      {...props}
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit((data) => {
        setError(null)
        signIn({
          variables: {
            input: data
          },
          onCompleted: (res) => {
            if (res.signIn?.errors.length) {
              setError(res.signIn.errors.join(', '))
              return
            }

            window.location.assign(redirect)
          },
          onError: (error) => {
            setError(
              error.message || 'An unexpected error occurred. Please try again.'
            )
          }
        })
      })}>
      <FormField label="Email Address" required error={errors.email?.message}>
        <Input type="email" {...register('email')} />
      </FormField>
      <FormField label="Password" required error={errors.password?.message}>
        <Input type="password" {...register('password')} />
      </FormField>
      <Button loading={isSigningIn}>Sign In</Button>
      {error && (
        <Alert variant="danger">
          <AlertBody>
            <AlertContent>{error}</AlertContent>
          </AlertBody>
        </Alert>
      )}
    </form>
  )
}
