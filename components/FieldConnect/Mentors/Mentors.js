import { mentorsData, qcData } from "@/utils/data"
import { linkedIn, twitter } from "@/utils/icon"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Mentors = () => {
  return (
    <div className="flex flex-col gap-10 mb-5">
      <div className="flex flex-col items-center gap-3">
        <h1
          className="text-2xl sm:text-3xl lg:text-[40px] text-ce-brown text-center font-semibold z-50"
          data-aos="fade-up"
        >
          Our Team
        </h1>
        <div className="border-2 border-ce-red w-32 mb-2 z-50" />
      </div>
      <div className="mt-7">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-16 px-10">
          {mentorsData.map((item) => {
            return (
              <li key={item.id} data-aos="fade-up">
                <div className="flex flex-col gap-3">
                  <Image
                    src={item.iconUrl}
                    width={303}
                    height={298}
                    alt={item.tiile}
                    className=""
                  />
                  <div className="flex flex-col">
                    <h3 className="text-2xl text-ce-brown font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-ce-black">{item.designation}</p>
                    <div className="flex gap-3 mt-2 text-xl text-[#AE3F39]">
                      <Link href={item.linkedIn} className="p-2 bg-[#E8E8E8]">
                        {linkedIn}
                      </Link>
                      <Link href={item.twitter} className="p-2 bg-[#E8E8E8]">
                        {twitter}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Mentors
