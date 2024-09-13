import React from 'react'

function About() {
  return (
    <>
        <div className='p-10 pt-24 flex justify-evenly items-center w-screen'>
            <div className=' w-[40%] flex flex-col'> 
              <span >Presenting</span>
              <div className='text-4xl mt-2 '>Google Maps Autocomplete</div>
              <div className='mt-2 '>A Free Tool by <b>Digismiths</b></div>
              <div className='mt-4 font-light'>
                Simplify your Zoho CRM with our free widget that integrates Google Maps Autocomplete for faster, more accurate address entry. No more manual input or address errors—just seamless mapping and improved data quality. Perfect for businesses looking to save time and enhance workflow efficiency! 
              </div>
              <a href="https://marketplace.zoho.com/app/crm/google-address-autocomplete-widget-for-zoho-crm" target="_blank">
                <button className='mt-7 bg-blue-400 py-2 w-[30%] rounded-md text-white hover:bg-blue-500'>
                  Install Now
                </button>
              </a>
            </div>
            <img src="/zoho-widget-user-guide/hero.png" alt='logo' width={500} height={500}/>
        </div>
    </>
  )
}

export default About
