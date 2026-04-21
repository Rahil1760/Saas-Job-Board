import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LandingPage } from './components/LandingPage/LandingPage.tsx'
import './index.css'
import App from './App.tsx'
import { LoginSignup } from './components/Login/LoginSignup.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginSignup />
  }

])

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
