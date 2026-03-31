import React from 'react'
import { motion } from 'motion/react'
import LetsStartImg from "../../assets/Contact/Contact Hero/lets-start.avif"

const ContactHero = () => {
  return (
      <section
      className="bg-page py-20 px-10 rounded-b-3xl "
    >
      {/* hero title */}
      <div className="about-title mt-25 ">
        <div className="flex items-center ">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8.5vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="mr-4 w-[8.5vw] h-[5.3vw] rounded-md   flex items-center justify-center"
          >
            <img className='rounded-xl' src={LetsStartImg} alt="lets start image" />
          </motion.div>{" "}
          <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl  font-bold  uppercase text-main  tracking-tight leading-none ">
            Let’s start{" "}
          </h1>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-8xl  xl:text-9xl font-bold  uppercase text-main  tracking-tight  leading-none ">
          {" "}
          a <span className='text-primary'>project</span> together{" "}
        </h1>
      </div>
    </section>
  )
}

export default ContactHero