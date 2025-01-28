import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { routes } from '@renderer/components/constants/Route'
import { clearStorage } from '@renderer/components/constants/SetStorage'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = (): void => {
    clearStorage()
    navigate(routes.login.path)
  }

  return (
    <nav className="sticky top-0 flex justify-between items-center px-6 py-4 w-full z-50 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 text-blue-800 text-3xl">Electron</div>

      {/* Navigation Items */}
      <div className="flex items-center space-x-8">
        <NavLink
          to={routes.home.path}
          className={({ isActive }) =>
            `text-md font-medium hover:text-blue-500 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to={routes.about.path}
          className={({ isActive }) =>
            `text-md font-medium hover:text-blue-500 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
          }
        >
          About
        </NavLink>

        <NavLink
          to={routes.contact.path}
          className={({ isActive }) =>
            `text-md font-medium hover:text-blue-500 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="flex items-center space-x-6 relative">
        {/* Logout Button */}
        <div className="relative cursor-pointer text-blue-600" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </nav>
  )
}

export default Header
