import React from 'react'

function Features() {
  return (
    <div className='px-24 w-screen'>
        <div className='bg-[#f0f3fa] px-6 py-10 rounded-md w-full flex justify-evenly space-x-4'>
            <div className='min-h-60 hover:bg-white w-[22%] cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/zoho-widget-user-guide/auto_completion.png" alt="feature1"  height={80} width={80}/>
                <div className='text-2xl mt-4'>Auto Completion</div>
                <div className='font-light text-sm mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, unde.</div>
            </div>
            <div className='min-h-60 hover:bg-white w-[22%] cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/zoho-widget-user-guide/easy_to_use.png" alt="feature1"  height={80} width={80}/>
                <div className='text-2xl mt-4'>Easy To Use</div>
                <div className='font-light text-sm mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, unde.</div>
            </div>
            <div className='min-h-60 hover:bg-white w-[22%] cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/zoho-widget-user-guide/plugin.png" alt="feature1"  height={80} width={80}/>
                <div className='text-2xl mt-4'>Free Extension</div>
                <div className='font-light text-sm mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, unde.</div>
            </div>
            <div className='min-h-60 hover:bg-white w-[22%] cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/zoho-widget-user-guide/productivity.png" alt="feature1"  height={80} width={80}/>
                <div className='text-2xl mt-4'>Increased Productivity</div>
                <div className='font-light text-sm mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, unde.</div>
            </div>
        </div>

    </div>
  )
}

export default Features
