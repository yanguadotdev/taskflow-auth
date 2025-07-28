/* eslint-disable @next/next/no-img-element */
import { Button } from '@feat/shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/features/shared/ui/dropdown-menu'
import { Logout } from '@feat/dashboard/components'
import { verifyUser } from '@dal/user/verify-user'

async function AvatarDropdown() {
  const user = await verifyUser()
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
