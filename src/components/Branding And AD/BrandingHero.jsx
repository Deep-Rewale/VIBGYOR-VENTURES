import React from 'react'
import { motion} from "motion/react"
import { RiAdvertisementFill } from "react-icons/ri";

const BrandingHero = () => {
  return (
    <section data-scroll
      data-scroll-speed="-.3" className='bg-page py-20 px-10'>
        {/* hero title */}
         <div className="about-title mt-25 text-main">
          <h1 className='text-5xl md:text-6xl lg:text-8xl xl:text-9xl  font-bold  uppercase   tracking-tighter '>Advertise </h1>
          <div className='flex items-center'>
           <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "8.5vw" }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                            className="mr-4 w-[8.5vw] h-[5.3vw] rounded-md  bg-primary flex items-center justify-center"
                          >
                            < RiAdvertisementFill className="text-white md:text-5xl lg:text-6xl xl:text-7xl" />
                          </motion.div>
          <h1 className='text-5xl md:text-6xl lg:text-8xl  xl:text-9xl font-bold  uppercase   tracking-tighter text-primary'> your  </h1></div>
          <h1 className='text-5xl md:text-6xl lg:text-8xl  xl:text-9xl font-bold  uppercase   tracking-tighter'>Brand</h1>
        </div>
    </section>
  )
}

export default BrandingHero