import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from './relay'
import { Router } from './router'

createRoot(document.getElementById('root')!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <StrictMode>
      <Router />
    </StrictMode>
  </RelayEnvironmentProvider>
)
