import React from 'react'
import UserDropdown from './UserDropdown'
import { Button } from '@/components/ui/button'
import { FaBars } from 'react-icons/fa'

const DashboardTopbar = () => {
  return (
    <div className='sticky border h-14 w-full top-0 left-0 right-0 z-30
    flex items-center justify-between bg-white p-4'>
      <div className="">
        Search Components
      </div>
      <div className="flex items-center gap-2">
        <UserDropdown />
        <Button type='button' size='icon' className='cursor-pointer md:hidden'>
          <FaBars />
        </Button>
      </div>

    </div>
  )
}

export default DashboardTopbar