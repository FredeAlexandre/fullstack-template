import { createFileRoute, redirect } from '@tanstack/react-router'
import { isFirstLaunch } from '~/utils/queries/auth'

import Dashboard from '~/features/dashboard'

export const Route = createFileRoute('/_protected/')({
  component: Dashboard,
  beforeLoad: async () => {
    return
    if (await isFirstLaunch()) {
      throw redirect({ to: '/first-launch' })
    }
  },
})
