'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function NavBar() {
  const [nav, setNav]= useState(-1);
  return (
    <nav className='flex w-full p-[8px] md:p-5 md:px-10 justify-between items-center bg-gray-100 fixed shadow-md'>
      <a href="/zoho-widget-user-guide">
        <div className='font-light text-xl text-black hidden md:block'>
          Google Maps Auto Complete Zoho 
        </div>
      </a>
      <div className='space-x-5 font-light '>
        <Link
          href="/Steps"
          className={`hover:underline hover:font-normal ${nav==0?"underline font-normal":""}`} onClick={()=>{
          setNav(0)
        }}>
          <span className='text-xs xl:text-base'>Usage Steps</span>
        </Link>
        <Link
          href="/GoogleApi" 
          className={`hover:underline hover:font-normal ${nav==1?"underline font-normal":""}`} 
          onClick={()=>{
            setNav(1)
          }}>
          <span className='text-xs xl:text-base'>Google API</span>
        </Link>
        <Link 
          href="/Bug" 
          className={`hover:underline hover:font-normal ${nav==2?"underline font-normal":""}`} 
          onClick={()=>{
            setNav(2)
          }}>
          <span className='text-xs xl:text-base'>Report a bug</span>
        </Link>
        <Link 
          href="/Contact" 
          className={`hover:underline hover:font-normal ${nav==3?"underline font-normal":""}`} 
          onClick={()=>{
            setNav(3)
          }}>
          <span className='text-xs xl:text-base'>Contact</span>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
