import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router'

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      lazy={() => import('./routes/_root')}
      hydrateFallbackElement={<div />}>
      <Route index lazy={() => import('./routes/feed')} />
      <Route path="users/:id" lazy={() => import('./routes/user')} />
      <Route path="likes" lazy={() => import('./routes/likes')} />
      <Route path="comments" lazy={() => import('./routes/comments')} />
      <Route path="sign-in" lazy={() => import('./routes/sign-in')} />
      <Route path="*" lazy={() => import('./routes/not-found')} />
    </Route>
  )
)

export function Router() {
  return <RouterProvider router={router} />
}
