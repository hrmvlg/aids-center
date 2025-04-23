import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router'
import App from './App.jsx'
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
