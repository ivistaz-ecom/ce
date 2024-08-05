import Image from "next/image"
import React from "react"

const Expertise = () => {
  return (
    <div className="mb-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-16">
          <h2
            className="text-ce-brown text-2xl sm:text-3xl text-center"
            data-aos="fade-up"
          >
            Expertise
          </h2>
          <div className="border-2 border-ce-red w-20 mb-2" />
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ce/public/whyChooseUs/expertise01.png"
            width={1000}
            height={1000}
            alt=""
            className="mt-5 w-full hidden md:block"
            data-aos="zoom-in"
          />
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ce/public/whyChooseUs/expertise02.png"
            width={327}
            height={1330}
            alt=""
            className="w-full block md:hidden p-3"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  )
}

export default Expertise
