'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutCompany() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const sliderImages= [

  ]
  return (
    <>
      <div className='px-24 w-screen mt-24 flex justify-center items-center'>
        <Slider {...settings}>
          {/* <span className='rounded-md h-10'>
            <img src="/zoho-widget-user-guide/Screenshot-1.png" alt="" />
          </span>
          <span className='rounded-md h-10'>
            <img src="/zoho-widget-user-guide/Screenshot-2.png" alt="" />
          </span> */}
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Slider>
      </div>
    </>
  )
}

export default AboutCompany
