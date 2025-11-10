import { useRef } from 'react'
import Navbar from './Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import PaymentOptions from './components/PaymentOptions'
import Urgency from './components/Urgency'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const pricingRef = useRef(null)

  const scrollToPricing = () => {
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleBook = (plan) => {
    scrollToPricing()
    // Here you could open a payment link or scheduler; for now we just scroll to pricing.
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero onPrimaryClick={scrollToPricing} />
        <WhyChooseUs />
        <Testimonials />
        <Pricing onBook={handleBook} ref={pricingRef} />
        <PaymentOptions />
        <Urgency onBook={scrollToPricing} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
