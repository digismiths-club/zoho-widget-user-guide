import React from 'react'
// Uses 7.jpg as main image and in usage steps too in 7th step
function  About() {
  return (
    <>
      <div className='p-4 xl:p-10 pt-20 xl:mt-20 flex justify-evenly items-center w-screen'>
        <div className=' w-[40%] flex flex-col'> 
          <span >Presenting</span>
          <div className='xl:text-4xl xl:mt-2 font-semibold xl:font-normal'>Google Maps Autocomplete</div>
          <div className='xl:mt-2 mt-1 text-sm xl:text-lg'>Premium Autocomplete & Address Formatter by <b>Digismiths</b></div>
          <div className='xl:mt-4 mt-2 font-light text-xs xl:text-base'>
            Simplify your Zoho CRM with our premium widget that integrates Google Maps Autocomplete for faster, more accurate address entry. No more manual input or address errors—just seamless mapping and improved data quality. Perfect for businesses looking to save time and enhance workflow efficiency! 
          </div>
          <a href="https://marketplace.zoho.com/app/crm/google-address-autocomplete-widget-for-zoho-crm" target="_blank">
            <button className='mt-7 bg-blue-400 py-2 px-3 rounded-md text-white hover:bg-blue-500 text-sm'>
              Install Now
            </button>
          </a>
        </div>
        <img src="/zoho-widget-user-guide/7.jpg" className='h-44 w-[80%] md:w-96 xl:h-[22rem] xl:w-[43rem]' alt='logo' width={500} height={500}/>
      </div>
    </>
  )
}

export default About
