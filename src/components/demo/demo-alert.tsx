import { Alert, AlertBody, AlertContent, AlertTitle } from '../common/alert'

export function DemoAlert() {
  return (
    <Alert variant="danger">
      <AlertBody>
        <AlertTitle>Warning!</AlertTitle>
        <AlertContent>
          The data in this demo is reset every hour, so any changes you make
          will be temporary.
        </AlertContent>
      </AlertBody>
    </Alert>
  )
}
