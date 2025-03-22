import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primereact/resources/themes/lara-light-purple/theme.css'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
