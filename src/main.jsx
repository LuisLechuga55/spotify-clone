import React from 'react'
import ReactDOM from 'react-dom/client'
import Paths from './routes'
import AuthContextProvider from './context/AuthContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Paths />
    </AuthContextProvider>
  </React.StrictMode>
)
