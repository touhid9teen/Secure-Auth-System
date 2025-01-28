import { SESSION_STATUS } from '@renderer/components/constants/Global'

export interface ISession {
  session: { email: string } | null
  status: SESSION_STATUS
}
