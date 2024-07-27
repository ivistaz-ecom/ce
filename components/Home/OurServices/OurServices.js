"use client"

import { AppContext } from "@/context/AppContext"
import { ourServicesData } from "@/utils/data"
import Link from "next/link"
import React, { useContext } from "react"

const OurServices = () => {
  const { setActiveServiceId } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-3 mb-16">
      <h2
        className="text-ce-brown text-2xl sm:text-3xl text-center"
        data-aos="zoom-in-down"
      >
        Our Services
      </h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <div className="flex justify-center">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 mt-5">
          {ourServicesData.map((item) => {
            return (
              <li
                key={item.id}
                className="border-y-4 border-y-ce-brown rounded-3xl group shadow-lg"
                data-aos="fade-down"
              >
                <div className="flex flex-col items-center p-4 rounded-3xl w-[280px] md:w-[300px] h-[270px] md:h-[290px] bg-[#FFF3DE] group-hover:bg-ce-orange transition-colors duration-300">
                  <h3
                    className="text-ce-brown text-xl sm:text-2xl text-center font-semibold flex-grow group-hover:text-white"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />

                  <p className="text-base sm:text-lg text-ce-gray text-center mb-7 group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                  <Link href="/services">
                    <button
                      onClick={() => setActiveServiceId(item.id)}
                      className="px-4 sm:px-5 py-2 bg-ce-orange text-white text-base sm:text-lg rounded group-hover:text-ce-black group-hover:bg-white transition-colors duration-300"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OurServices
