import React from 'react'
import Card from '../components/Card';
import data from '../Data.json'

function page() {
  const imgArr= data.imgArr;
  return (
    <div>
       <div className="md:w-full md:p-16 bg-gray-50 flex flex-col items-center justify-center border-solid md:border-2 ">
          {
            imgArr.map((card,index)=>{
              return (
                <Card key={index} index={index+1} url={card.url} title={card.title}/>
              )
            })
          }
        </div> 
    </div>
  )
}

export default page