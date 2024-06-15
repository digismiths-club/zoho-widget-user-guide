import React, { useState } from "react";
import GoogleMapsCard from "./GoogleMapsCard";

function ApiSteps() {

  const cards= [
    {
      title: "Select a Project (or select an existing one, if you have one)",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step2.png"
    },
    {
      title: "Create a New Project (or select an existing one, if you have one)",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step3.png"
    },
    {
      title: "Give your project a name (perhaps based on your websites name)",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step4.png"
    },
    {
      title: "Select the Project you just created. You can do this by the notification at the top right:",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step5.png"
    },
    {
      title: "Create the API key. On the API Credentials page click the “CREATE CREDENTIALS” button, and then choose “API Key”",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step6.png"
    },
  ]

  return (
    <div className="w-full md:p-10 p-0 bg-gray-50 flex flex-col items-center justify-center border-solid md:border-2">
      {/* Card 1 */}
        <div className='w-[100%] flex flex-col border-2 mt-4 md:mt-4'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-16 bg-[#29435d] font-semibold text-center md:p-5 p-3 text-2xl text-white'>
                    1
                </div>
                <div className='ml-[13px] flex flex-col md:flex-row py-5 p-2 items-center'>
                    Create a Google account & Open
                    <a 
                        href="https://console.cloud.google.com"
                        className="text-blue-600 hover:text-purple-600 underline font-semibold md:ml-2"
                        target="_blank"
                    >
                        Google Cloud Platform Console.
                    </a>
                </div>
            </div>
        </div>
        {
          cards.map((card, index)=>{
            return (
              <GoogleMapsCard key={index} url={card.url} index={index+2} title={
                card.title}
              />
            )
          })
        }

    </div>
  );
}

export default ApiSteps;
