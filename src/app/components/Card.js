import React from 'react'

function Card({index,url,title}) {
  return (
    <div className='md:w-[90%] flex flex-col border-2 mt-7 md:mt-4'>
      <div className='flex flex-col border-solid border-b-2 md:flex-row'>
        <div className='md:w-16 bg-[#29435d] font-semibold text-center md:p-5 p-3 text-2xl text-white'>
            {index}
        </div>
        <div className='ml-[13px] flex justify-center items-center py-5 md:p-0'>
            {title}
        </div>
      </div>
      <div>
        <img 
            className='md:p-10 p-2' 
            src={url} alt="" />
      </div>
    </div>
  )
}

export default Card
