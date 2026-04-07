import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RelayEnvironmentProvider } from 'react-relay'
import { App } from './App'
import { RelayEnvironment } from './RelayEnvironment'

createRoot(document.getElementById('root')!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <StrictMode>
      <App />
    </StrictMode>
  </RelayEnvironmentProvider>
)
