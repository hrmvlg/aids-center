import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router'
import App from './App.jsx'
import './styles/style.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
