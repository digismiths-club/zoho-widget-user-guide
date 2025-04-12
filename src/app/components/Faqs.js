import React from 'react'
import Faq from './Faq';
import { FaQuestionCircle } from "react-icons/fa";

function Faqs() {
    const faqs = [
        {
          ques: "How do I install the Google Address Autocomplete Widget in Zoho CRM?",
          ans: "To install, simply visit the Zoho Marketplace, search for Google Address Autocomplete Widget, and click Install. Follow the prompts to integrate it into your Zoho CRM. ",
        },
        {
          ques: "What does the new address formatting feature do?",
          ans: "The new feature allows you to manually format address components using three buttons—Select Street, Select City, and Select Province. You can reorder street details, and choose the most relevant city or province from suggested options based on the entered address.",
        },        
        {
          ques: "Does the widget work with all Zoho CRM modules?",
          ans: "No, Our widget works on following modules: Leads, Accounts, Contacts, Quotes, Invoices, Sales Orders, Purchase Orders and Vendors.",
        },
        {
          ques: "Do I need any technical knowledge to set it up?",
          ans: "Not at all! The setup is straightforward, with no coding required. Just install the widget and start using it right away. ",
        },
        {
          ques: "Can this widget help reduce address entry errors?",
          ans: "Absolutely! The autocomplete feature pulls data directly from Google Maps, ensuring accurate and consistent address information every time.",
        },
        {
          ques: "Do I need a Google Maps billing account and API key to use this widget?",
          ans: "Yes, this widget requires an active Google Maps billing account and a valid API key to function. You’ll need to set up billing through Google and generate an API key to enable the address autocomplete feature in Zoho CRM. ",
        },
      ];
  return (
    <>
        <div className='mt-12 px-4 xl:p-8 xl:w-[85%] justify-between space-y-2 flex flex-col md:flex-row'>
            <div className='xl:w-[40%] text-2xl flex items-center max-h-10 space-x-3'>
              <FaQuestionCircle size={30}/>
              <div className='text-sm'>Frequently Asked Questions</div>
            </div>
            <div className='md:w-[65%] py-2 xl:space-y-4 space-y-2 '>
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
