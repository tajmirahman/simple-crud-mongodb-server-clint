import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/User.jsx'



 const routes=createBrowserRouter([
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/users',
      element:<User></User>,
      loader:()=> fetch('http://localhost:5000/users')
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
