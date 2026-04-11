import { SignInForm } from '../components/sign-in-form'

export function Component() {
  return (
    <div className="flex h-dvh w-full items-center justify-center p-8">
      <div className="flex w-full max-w-xs rounded-lg bg-white p-4">
        <SignInForm />
      </div>
    </div>
  )
}
