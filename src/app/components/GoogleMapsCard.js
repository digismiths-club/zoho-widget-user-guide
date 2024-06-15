import React, { useState } from 'react'

function ZohoStepsCard({index, title, url}) {
    const [expanded, setExpanded] = useState(false);

    const handleImageClick = (index) => {
        setExpanded(true);
    };

    const handleOutsideClick = () => {
        setExpanded(false);
    };
  return (
    <>
      
      <div className='md:w-[100%] flex flex-col border-2 mt-7 md:mt-4'>
            <div className='flex flex-col border-solid border-b-2 md:flex-row'>
                <div className='md:w-16 bg-[#29435d] font-semibold text-center md:p-5 p-3 text-2xl text-white'>
                    {index}
                </div>
                <div className='ml-[13px] flex justify-center items-center py-5 p-2 '>
                    {title}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img
                    src={url}
                    alt="x"
                    className={`md:p-10 p-2 ${
                    expanded[0] ? "cursor-auto" : "cursor-pointer"
                    }`}
                    onClick={() => handleImageClick(0)}
                />
            </div>
        </div>
            
        <div>
            {expanded && (
            <div
                style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                }}
                onClick={handleOutsideClick}
            >
                <img
                src={url}
                alt="x"
                className="max-w-screen-md max-h-screen-md cursor-pointer"
                />
            </div>
            )}
      </div>
    </>
  )
}

export default ZohoStepsCard