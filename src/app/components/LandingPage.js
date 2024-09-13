import About from './About'
import Faqs from './Faqs'
import Features from './Features'

function LandingPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
        <About/>
        <Features/>
        <Faqs/>
      </main>
    </>
  )
}

export default LandingPage
