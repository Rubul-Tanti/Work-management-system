import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataStorage from './context/task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataStorage>
    <App />
    </DataStorage>
  </StrictMode>,
)
