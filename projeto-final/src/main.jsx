import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/index.jsx'
import { Beneficiarios } from './pages/Beneficiarios/index.jsx'
import { Informacoes } from './pages/Informacoes/index.jsx'
import { Login } from './pages/Login/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'beneficiarios',
        element: <Beneficiarios />
      },
      {
        path: 'informacoes',
        element: <Informacoes />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
