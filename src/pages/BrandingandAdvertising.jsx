import React from 'react'
import BrandingHero from '../components/Branding And AD/BrandingHero'
import SolutionOfferBD from '../components/Branding And AD/SolutionOfferBD'
import ApproachBD from '../components/Branding And AD/ApproachBD'
import Testimonials from '../components/Home/Testimonials'
import ReadyToGifting from '../components/Corporate Gifting/ReadyToGifting'
import Footer from '../components/Footer'

const BrandingandAdvertising = () => {
  return (
    <div className='overflow-hidden'>
    <BrandingHero />
    <SolutionOfferBD />
    <ApproachBD />
    <Testimonials />
    <ReadyToGifting text1={"Ready"} text2={"to start"} text3={"Project"} btnText={"start project"}/>
    <Footer heading1={"Advertise"} heading2={"your"} heading3={"Brand."} />
    </div>
  )
}

export default BrandingandAdvertising