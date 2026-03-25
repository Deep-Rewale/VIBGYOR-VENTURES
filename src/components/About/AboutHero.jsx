import React from 'react'
import { ImWink2 } from "react-icons/im";
import { motion } from "motion/react";
const AboutHero = () => {
  return (
    <section className='bg-page py-20 px-10'>
        {/* hero title */}
         <div className="about-title mt-25 text-main">
          <h1 className='text-5xl md:text-6xl lg:text-8xl xl:text-9xl  font-bold  uppercase   tracking-tighter '>we are </h1>
          <div className='flex items-center'>
           <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "8.5vw" }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                            className="mr-4 w-[8.5vw] h-[5.3vw] rounded-md  bg-primary flex items-center justify-center"
                          >
                            < ImWink2 className="text-white md:text-5xl lg:text-6xl xl:text-7xl" />
                          </motion.div>
          <h1 className='text-5xl md:text-6xl lg:text-8xl  xl:text-9xl font-bold  uppercase   tracking-tighter text-primary'> Vibgyor  </h1></div>
          <h1 className='text-5xl md:text-6xl lg:text-8xl  xl:text-9xl font-bold  uppercase   tracking-tighter'>Ventures</h1>
        </div>
    </section>
  )
}

export default AboutHero