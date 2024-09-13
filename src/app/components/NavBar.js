import React from 'react'

function NavBar() {
  return (
    <nav className='flex w-full p-[8px] md:p-5 md:px-10 justify-between items-center bg-gray-100 sticky top-0 shadow-md'>
      <div className='font-light text-xl text-black hidden md:block'>
        Google Maps Auto Complete Zoho 
      </div>
      {/* <a href="https://digismiths.com/" target='_blank'>
        <img className='h-10' src="https://digismiths.com/wp-content/uploads/2023/01/digismiths-logo-black-theme.svg" alt="Digismiths" />
      </a> */}
    </nav>
  )
}

export default NavBar
