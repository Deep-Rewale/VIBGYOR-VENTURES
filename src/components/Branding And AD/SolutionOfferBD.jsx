import React from 'react'
import UnderLine  from "../../components/UnderlineEffect/Underline";
import img1 from "../../assets/BrandAndAD/SolutionOfferBD/Corporate-Videos.jpg"
import img2 from "../../assets/BrandAndAD/SolutionOfferBD/Commercial-Advertisement.avif"
import img3 from "../../assets/BrandAndAD/SolutionOfferBD/Animation-Motion-Graphics.avif"
import img4 from "../../assets/BrandAndAD/SolutionOfferBD/Editing-and-VFX.jpg"
import img5 from "../../assets/BrandAndAD/SolutionOfferBD/Photo-Shoots.avif"
import img6 from "../../assets/BrandAndAD/SolutionOfferBD/Brand-Design.jpg"




const BrandAndAD = [
  {
    eventAndADName: "Corporate & Other Videos",
    disc: "Videos are a new way to be more visible to the customers. We create various videos like corporate, explanatory, teasers and so on. It is a creative tool for engaging with potentials.",
    img: img1,
  },
  {
    eventAndADName: "Commercial Advertisement",
    disc: "Commercial ads help capture the actual essence and message of the brand & product. Hence brings more following and awareness to it. From products to narratives – we shoot it all!",
    img: img2,
  },

  {
    eventAndADName: "Animation & Motion Graphics",
    disc: "Graphics evolves every year. It attracts and engages clients with use of animation & imagery. It breaks down complex information by making it creative & visually appealing.",
    img: img3,
  },
  {
    eventAndADName: "Editing and VFX",
    disc: "Going through raw footage can be a task. With our best professionals, let us filter through & turn your footage into a piece of art. It’s your story, we’ll help you tell it.",
    img: img4,
  },

  {
    eventAndADName: "Photo Shoots",
    disc: "In today’s time, seeing is the only option. Let us click and enhance your brand and product with a photoshoot. Name it and we click it. Lights. Camera. Clicks",
    img: img5,
  },
  {
    eventAndADName: "Brand Design",
    disc: "For improved recall in customers’ mind brand’s communication is consistent across all touchpoints. Brand Manual lays out guidelines for company’s visual & communication.",
    img: img6,
  },
];


const SolutionOfferBD = () => {
  return (
     <section
      data-scroll
      data-scroll-section
      data-scroll-speed="0.001"
      className="bg-[#56bdb4] py-20 px-10 rounded-t-2xl"
    >
      {/* title */}
      <div className='text-black'>
        <h2 className="text-5xl font-heading leading-none tracking-tight max-w-[1100px]  py-5">
          Boost your brand visibility with <span className="cursor-pointer">
             <UnderLine height={2}>creative</UnderLine>
          </span>{" "}
          and <span className="cursor-pointer">
            <UnderLine height={2}>impactful</UnderLine>
          </span>
          marketing{" "}
          <span className="cursor-pointer">
            <UnderLine height={2}>solutions</UnderLine>
          </span>
          .
        </h2>
      </div>
      {/* solution we offer */}
      <div className="border-t border-gray-800 mt-15">
        <div className="mt-16">
          {BrandAndAD.map((items, index) => (
            <div
              key={index}
              className={`flex  mb-15 ${index === 1 || index === 3 || index === 5 ? "flex-row-reverse" : ""}`}
            >
              {/*  text  */}
              <div
                className={`text w-1/2 space-y-7  ${index === 1 || index === 3 || index === 5 ? "ml-10" : ""}`}
              >
                <h3 className="text-5xl font-semibold  cursor-pointer">
                  <UnderLine height={2}>{items.eventAndADName}</UnderLine>
                </h3>
                <p className="text-2xl ">{items.disc}</p>
              </div>
              {/* images */}
              <div className="w-1/2">
                <img
                  loading="lazy"
                  className="rounded-2xl"
                  src={items.img}
                  alt={items.eventAndADName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionOfferBD