'use client'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

function Faq({element}) {
    const [toggle, setToggle]= useState(false);
  return (
    <>
        <div className='space-y-2 bg-[#f0f3fa] text-black rounded-md xl:rounded-[1rem] px-3 py-3 xl:px-5 cursor-pointer'
            onClick={()=>{
                setToggle(!toggle);
            }}
        >
            <div className='text-xs md:text-sm xl:text-lg flex items-center justify-between' >
                <span>{element.ques}</span>
                <span><IoMdArrowDropdown style={toggle ? {
                    "rotate": "180deg",    
                }:{}
            }/></span>
            </div>
            {
                toggle && 
                <div className='faq-content space-y-2'>
                    <hr />
                    <div className='text-xs md:text-sm xl:text-sm'>
                        {element.ans}
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default Faq
