import React from 'react'

function NavBar() {
  return (
    <nav className='flex w-full p-4 px-10 justify-between items-center bg-[#213346] sticky top-0'>
      <a href="https://digismiths.com/" target='_blank'>
        <img className='h-10' src="https://digismiths.com/wp-content/uploads/2023/01/digismiths-logo-black-theme.svg" alt="Digismiths" />
      </a>
      
      <div className='font-light text-xl text-white'>
        Google Maps Auto Complete Zoho 
      </div>
    </nav>
  )
}

export default NavBar