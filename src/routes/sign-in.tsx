import { Card, CardBody } from '../components/common/card'
import { SignInForm } from '../components/sign-in-form'

export function Component() {
  return (
    <div className="flex h-dvh w-full items-center justify-center p-8">
      <div className="w-full max-w-xs">
        <Card>
          <CardBody>
            <SignInForm />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
