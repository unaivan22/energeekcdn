import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouterPage from './RouterPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterPage />
  </StrictMode>,
)