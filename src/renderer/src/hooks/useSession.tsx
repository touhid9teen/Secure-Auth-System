import { useEffect, useState } from 'react'

import { LOCAL_STORAGE_KEYS, SESSION_STATUS } from '@renderer/components/constants/Global'
import { ISession } from '@renderer/models/Auth'

export const useSession = () => {
  const [session, setSession] = useState<ISession>({
    session: null,
    status: SESSION_STATUS.LOADING
  })

  useEffect(() => {
    // Simulate session loading by checking localStorage after a short delay
    setTimeout(() => {
      const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN)
      const email = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_EMAIL)

      if (token && email) {
        setSession({
          session: { email },
          status: SESSION_STATUS.AUTHENTICATED
        })
      } else {
        setSession({
          session: null,
          status: SESSION_STATUS.UNAUTHENTICATED
        })
      }
      console.log('session', session)
    }, 1000)
  }, [])

  return session;
}
