import React from 'react'

function About() {
  return (
    <>
        <div className='p-10 flex justify-evenly items-center w-screen'>
            <div className=' w-[40%] flex flex-col'> 
              <span >Presenting</span>
              <div className='text-4xl mt-2 '>Google Maps Autocomplete</div>
              <div className='mt-2 '>A Free Widget By <b>Digismiths</b></div>
              <div className='mt-4 font-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptate expedita a, quibusdam est in commodi velit error quo placeat incidunt dolores voluptas, odio facere.
              </div>
              <button className='mt-7 bg-blue-400 py-2 w-[30%] rounded-md text-white hover:bg-blue-500'>
                Install Now
              </button>
            </div>
            <img src="/zoho-widget-user-guide/hero.png" alt='logo' width={500} height={500}/>
        </div>
    </>
  )
}

export default About
