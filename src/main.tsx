import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Forest from './pages/forest/'
import Hero from './pages/hero/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
    errorElement: <Hero />,
  },
  {
    path: '/forest',
    element: <Forest />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
)
