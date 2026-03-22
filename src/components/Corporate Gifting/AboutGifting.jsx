import React from 'react'

const AboutGifting = () => {
  return (
    <section className='w-full rounded-t-3xl bg bg-[#56bdb4] py-20 px-10'>
      {/* about us content */}
        <div className="about-us pt-12 flex ">
          {/* left text */}
          <div className="w-1/2 ">
            <h2 className="text-xl font-body">About Vibgyor Venture:</h2>
          </div>
          {/* right textf */}
          <div className="w-1/2 ">
            <p className="max-w-lg font-body text-xl">
              With over a decade of industry expertise, Vibgyor Venture bridges
              the gap between brands and people through thoughtfully curated
              corporate gifting solutions and meticulously planned corporate
              events.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              Specialize in transforming business gestures into meaningful
              experiences-helping organizations express appreciation, strengthen
              relationships, and leave a lasting impression.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              Every gift we curate and every event we execute reflects our
              commitment to quality, creativity, and seamless execution.From
              premium executive gifts to large-scale conferences, we deliver
              end-to-end solutions that reflect quality, precision, and brand
              excellence.
            </p>
          </div>
        </div>
    </section>
  )
}

export default AboutGifting