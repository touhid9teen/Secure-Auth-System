import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white rounded-lg shadow-lg p-6 overflow-auto">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
