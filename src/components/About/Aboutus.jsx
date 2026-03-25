import React from 'react'
import Underline from '../UnderlineEffect/Underline'
import Values from "../../assets/About/AboutUs/Values.jpg"

const Aboutus = () => {
  return (
   <section  className='bg-page py-7 px-10'>
    {/* about us  */}
    <div className='border-t border-gray-400'>
      <div className='flex mt-6'>
        {/* left text */}
        <div className="left-text w-1/2 text-xl font-body ">
         About us :
        </div>
        <div className="right-text w-1/2 max-w-2xl space-y-4  tracking-tight">
         <p className='text-primary text-xl font-body '>How we build businesses</p>
         <h3 className='text-3xl text-main font-semibold font-heading cursor-pointer'><Underline height={1}>Get Acquainted</Underline></h3>
         <p className='text-xl font-body text-main'>We have been able to carve a niche for ourselves making our presence strongly felt amongst the multitudes of companies mushrooming in different sectors of business ranging from the Corporates to SMEs.</p>
         <p className='text-xl font-body text-main'>Having the foresight in resolving your problem statement with the right solutions is important to us. Our customized tools and applications work efficiently in expanding the reach and build awareness in the market around your business.</p>
         <p className='text-xl font-body text-main'>We are flexible, experienced, happy to help & love what we do!</p>
        </div>
      </div>

    </div>

    {/* Values  */}
      {/* title div */}
      <div  className='max-w-6xl mt-18 text-main '>
        <h3 className='text-6xl font-heading tracking-tight'>We help businesses create meaningful and memorable brand experiences.</h3>
      </div>
      {/* content */}
      <div className='border-t border-gray-400 mt-10 py-10 '>
       <div className='flex '>
        {/* left text */}
        <div className='w-1/2 space-y-4'>
             <p className='text-primary text-xl font-body '>What values we follow</p>
         <h3 className='text-3xl text-main font-semibold font-heading cursor-pointer'><Underline height={1}>Principle Statement</Underline></h3>
         {/* statement div */}
         <div className='font-body space-y-4 '>
         <p className='text-xl text-main '><span className='font-semibold text-2xl text-primary'>V</span>isualize & collaborate in ways different from the others</p>
         <p className='text-xl text-main'><span className='font-semibold text-2xl text-primary '>I</span>nterest of our customers comes first</p>
         <p className='text-xl text-main'><span className='font-semibold text-2xl text-primary'>S</span>top at nothing but excellence</p>
         <p className='text-xl text-main'><span className='font-semibold text-2xl text-primary'>I</span>nnovation is central to the success of our business</p>
         <p className='text-xl text-main'><span className='font-semibold text-2xl text-primary'>O</span>ur work culture encourages strength & personal development</p>
         <p className='text-xl text-main'><span className='font-semibold text-2xl text-primary'>N</span>othing is impossible when there is trust teamwork & fun</p>
         </div>
        </div>
        {/* Right image */}
        <div className=' w-1/2 '>
            <img className='rounded-2xl' src={Values} alt="Values we give" />
        </div>
       </div>
      </div>


   </section>
  )
}

export default Aboutus