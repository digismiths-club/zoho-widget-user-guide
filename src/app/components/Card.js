import React from 'react'

function Card({index,url,title}) {
  return (
    <div className='w-[90%] flex flex-col border-2 md:mt-4 mt-7'>
      <div className='flex flex-col md:flex-row border-solid border-b-2'>
        <div className='min-w-16 bg-[#29435d] font-semibold text-center p-5 text-2xl text-white'>
            {index}
        </div>
        <div className='ml-[13px] flex justify-center items-center py-5 md:p-0'>
            {title}
        </div>
      </div>
      <div>
        <img 
            className='md:p-10' 
            src={url} alt="" />
      </div>
    </div>
  )
}

export default Card
