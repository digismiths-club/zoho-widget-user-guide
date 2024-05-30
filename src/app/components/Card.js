import React from 'react'

function Card({index,url,title}) {
  return (
    <div className=' w-[90%] flex flex-col border-2 mt-4'>
      <div className='flex border-solid border-b-2'>
        <div className='min-w-16 bg-[#29435d] font-semibold text-center p-5 text-2xl text-white'>
            {index}
        </div>
        <div className='ml-[13px] flex justify-center items-center'>
            {title}
        </div>
      </div>
      <div>
        <img 
            className='p-10' 
            src={url} alt="" />
      </div>
    </div>
  )
}

export default Card
