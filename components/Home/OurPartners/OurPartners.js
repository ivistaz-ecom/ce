import { partnersData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const OurPartners = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-16">
      <h2
        className="text-ce-brown text-2xl sm:text-3xl text-center"
        data-aos="fade-up"
      >
        Our Partners
      </h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <div className="flex justify-center mt-5">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {partnersData.map((item) => {
            return (
              <li key={item.id} data-aos="fade-down">
                <div className="">
                  <Image src={item.imageUrl} width={287} height={156} alt="" />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OurPartners
