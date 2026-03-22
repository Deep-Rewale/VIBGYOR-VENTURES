import React from 'react'
import Underline from "../UnderlineEffect/Underline"

const GiftingTypes = [
    {
    title : "Companies that value meaningful gifting",
    para : "From employee welcome kits to festive hampers brands that believe gifting should feel thoughtful, not transactional."
    },
    {
    title : "Growing businesses & established enterprises",
    para : "Organizations looking for reliable, scalable gifting solutions that reflect their brand identity and professionalism."
    },
      {
    title : "Brands focused on impact & relationships",
    para : "Businesses that use gifting as a way to strengthen client relationships, celebrate teams, and create lasting impressions."
    }

]

const CorporateHero = () => {
  return (
    <section className='bg-page py-20 px-10'>
        <div className="hero-title mt-25 text-main">
          <h1 className='text-5xl md:text-6xl lg:text-8xl xl:text-9xl  font-bold  uppercase   tracking-tighter'>Corporate </h1>
          <h1 className='text-5xl md:text-6xl lg:text-8xl  xl:text-9xl font-bold  uppercase   tracking-tighter'>Gifting </h1>
        </div>
        {/* what we do */}
        <div className='border-t border-gray-400 mt-20'>
         <p className='text-7xl text-black font-heading leading-none tracking-tight max-w-[1500px] text-main py-5'>  Curated corporate gifting and premium event solutions that help brands
        express{" "}
        <span className="cursor-pointer">
          {" "}
          <Underline height={2}> appreciation</Underline>
        </span>
        and{" "}
        <span className="cursor-pointer">
          <Underline height={2}>create</Underline>
        </span>{" "}
        lasting{" "}
        <span className="cursor-pointer">
          <Underline height={2}>impressions</Underline>
        </span></p>
        </div>

        {/* gifting motive */}
        <div className='border-t border-gray-400 text-main mt-20'>
         {/* left section  */}
         <div className='flex py-10'>
         <div className='w-1/2'>
            <h3 className='text-xl'>We’re best positioned for 3 types of clients:</h3>
         </div>
         {/* right sectionn */}
         <div className='w-1/2 text-xl grid grid-cols-2 gap-10'>
          {GiftingTypes.map((types,index)=>(
           <div className='space-y-6' key={index}>
             <h3 className='underline'>{types.title}</h3>
             <p>{types.para}</p>
           </div> 
          ))}
         </div>
         </div>
        </div>
    </section>
  )
}

export default CorporateHero;