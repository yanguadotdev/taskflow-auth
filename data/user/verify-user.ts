import 'server-only'

import { auth } from '@/features/auth/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { cache } from 'react'

export const verifyUser = cache(async () => {
  const headersList = await headers()
  const session = await auth.api.getSession({
    headers: headersList,
  })
  const user = session?.user

  if (!user) {
    redirect('/login')
  }

  return user
})
