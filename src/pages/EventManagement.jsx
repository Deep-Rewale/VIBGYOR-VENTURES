import React from 'react'
import EventsHero from '../components/Events management/EventsHero';
import SolutionsOfferE from '../components/Events management/SolutionsOfferE';
import Approach from '../components/Events management/Approach';
import Testimonials from "../components/Home/Testimonials"
import ReadyToGifting from '../components/Corporate Gifting/ReadyToGifting';
import Footer from "../components/Footer"


const EventManagement = () => {
  return (
    <div  className='overflow-hidden'>
    <EventsHero />
    <SolutionsOfferE />
    <Approach />
    <Testimonials />
    <ReadyToGifting  text1={"Ready"} text2={"to start"} text3={"Project"} btnText={"start project"} />
    <Footer heading1={"Experiences"} heading2={"That Elevate"} heading3={"Your Brand."} />
    </div>
  )
}

export default EventManagement;