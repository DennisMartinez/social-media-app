import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Hello, World!</h1>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
