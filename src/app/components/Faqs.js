import React from 'react'
import Faq from './Faq';
import { FaQuestionCircle } from "react-icons/fa";

function Faqs() {
    const faqs = [
        {
          ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
          ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
        },
        {
          ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
          ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
        },
        {
          ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
          ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
        },
        {
          ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
          ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
        },
        {
          ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
          ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
        },
        {
          ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
          ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vitae.",
        },
      ];
  return (
    <>
        <div className='mt-12 flex p-8 w-[85%] justify-between'>
            <div className='w-[40%] text-2xl flex items-center max-h-10 space-x-3'>
              <FaQuestionCircle size={30}/>
              <div>Frequently Asked Questions</div>
            </div>
            <div className='w-[65%] py-2 xl:space-y-4 space-y-2 '>
                {
                    faqs.map((element, key)=>{
                        return (
                          <Faq key={key} element={element}/>
                        )
                    })
                }
                
            </div>
        </div> 
    </>
  )
}

export default Faqs
