import { MessageCircle, PowerOffIcon } from 'lucide-react'
import React from 'react'

const header = () => {
  return (
    <div className='w-full bg-white flex justify-between items-center p-4'>
        <h1>Dashboard</h1>
        {/* <div className='flex gap-3 items-center'>
            <div>
                <h1>February 2024</h1>
            </div>
            <MessageCircle/>
            <MessageCircle/>
            <div className='h-12 w-12 bg-black rounded-full'/>
            <div className='flex flex-col'>
                <h1 className='font-bold'>Aryan Tyagi</h1>
                <p className='text-xs'>Client</p>
            </div>
        </div> */}
    </div>
  )
}

export default header