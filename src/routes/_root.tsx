import { Outlet, ScrollRestoration } from 'react-router'

export function Component() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
