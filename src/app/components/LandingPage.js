import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'
import About from './About'
import Features from './Features'
import ImgSlider from './ImgSlider'
import Faqs from './Faqs'

function LandingPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
        <NavBar/>
        <About/>
        <Features/>
        <Faqs/>
      </main>
    </>
  )
}

export default LandingPage
