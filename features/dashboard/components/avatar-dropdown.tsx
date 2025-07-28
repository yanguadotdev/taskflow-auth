/* eslint-disable @next/next/no-img-element */
import { Button } from '@/features/shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/features/shared/ui/dropdown-menu'
import { Logout } from '@/features/dashboard/components'
import { auth } from '@/features/auth/lib/auth'
import { headers } from 'next/headers'

async function AvatarDropdown() {
  const headersList = await headers()
  const session = await auth.api.getSession({
    headers: headersList,
  })
  const user = session?.user
  console.log(user?.image)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='rounded-full h-8 pr-0 py-0 flex items-center gap-2'
        >
          Hy {user?.name} 👋
          <img
            src={user?.image || ''}
            alt={user?.name || ''}
            className='size-8 object-cover rounded-full'
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='start'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className=''>
          <Logout />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarDropdown
