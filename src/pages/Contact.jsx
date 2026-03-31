import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactForm from '../components/Contact/ContactForm'
import { div } from 'motion/react-client'

const Contact = () => {
  return (
    <div>
     <ContactHero />
     <ContactForm />
    </div>
    
  )
}

export default Contact