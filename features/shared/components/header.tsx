import { AvatarDropdown } from '@feat/shared/components'
import { ListChecks } from 'lucide-react'
import { Suspense } from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between h-24 px-6'>
      <a href='#' className='flex items-center gap-2 self-center font-medium'>
        <div className='bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md'>
          <ListChecks className='size-4' />
        </div>
        TaskFlow.
      </a>

      <Suspense fallback={<div>Loading...</div>}>
        <AvatarDropdown />
      </Suspense>
    </header>
  )
}
