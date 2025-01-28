import { Outlet, useNavigate } from 'react-router-dom'

import Loader from '@renderer/components/Loader'
import { SESSION_STATUS } from '@renderer/components/constants/Global'
import { routes } from '@renderer/components/constants/Route'
import { useSession } from '@renderer/hooks/useSession'

const AuthWrapper: React.FC = () => {
  const navigate = useNavigate()
  const { session, status } = useSession()

  if (status === SESSION_STATUS.LOADING) return <Loader />
  if (session) {
    navigate(routes.home.path)
    return
  }

  return <Outlet />
}

export default AuthWrapper
