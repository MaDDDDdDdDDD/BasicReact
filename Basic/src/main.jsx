import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apptab from './AppTab.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apptab/>
  </StrictMode>,
)
