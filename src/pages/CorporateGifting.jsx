import React from 'react'
import CorporateHero from '../components/Corporate Gifting/CorporateHero'
import AboutGifting from '../components/Corporate Gifting/AboutGifting'
import HowItsWorks from '../components/Corporate Gifting/HowItsWorks'
import GiftingPicks from '../components/Corporate Gifting/GiftingPicks'
import Marque from "../components/Home/Marque";
import ReadyToGifting from '../components/Corporate Gifting/ReadyToGifting'
import Footer from "../components/Footer"



const CorporateGifting = () => {
  return (
    <div className='overflow-hidden'>
     <CorporateHero />
     <AboutGifting />
     <HowItsWorks />
     <GiftingPicks />
     <Marque  />
     <ReadyToGifting  text1={"Ready"} text2={"to start"} text3={"Gifting"} btnText={"start gifting"}/>
     <Footer heading1={"Gifts That"} heading2={"Strengthen"} heading3={"Your Culture."} />
    </div>
  )
}

export default CorporateGifting