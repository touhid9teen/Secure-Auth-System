import { createHashRouter } from 'react-router-dom'

import AuthWrapper from '@renderer/Layouts/AuthWrapper'
import BaseWrapper from '@renderer/Layouts/BaseWrapper'
import { routes } from '@renderer/components/constants/Route'
import AuthLayout from '@renderer/Layouts/AuthLayout'
import MainLayout from '@renderer/Layouts/MainLayout'
import Home from '@renderer/pages/Home'
import Signup from '@renderer/pages/Singup'
import Login from '@renderer/pages/Login'
import About from '@renderer/pages/About'
import Contact from '@renderer/pages/Contact'

const MainRoutes = createHashRouter([
  {
    element: <AuthWrapper />,
    children: [
      {
        path: routes.login.path,
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: routes.signup.path,
        element: (
          <AuthLayout>
            <Signup />
          </AuthLayout>
        )
      }
    ]
  },
  {
    element: <BaseWrapper />,
    children: [
      {
        path: routes.home.path,
        element: (
          <MainLayout>
            <Home />
          </MainLayout>
        )
      },
      {
        path: routes.contact.path,
        element: (
          <MainLayout>
            <Contact />
          </MainLayout>
        )
      },
      {
        path: routes.about.path,
        element: (
          <MainLayout>
            <About />
          </MainLayout>
        )
      }
    ]
  }
])

export default MainRoutes
