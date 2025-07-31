'use client'

import { authClient } from '@/features/shared/auth-client'
import { Button } from '@/features/shared/ui/button'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await authClient.signOut()
    } catch (error) {
      console.error(error)
    }
    router.push('/')
  }

  return (
    <Button variant='outline' className='w-full' onClick={handleLogout}>
      <LogOut className='size-4' />
      Logout
    </Button>
  )
}
