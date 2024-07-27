import { sdgData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const SDGs = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-16">
      <h2
        className="text-ce-brown text-2xl sm:text-3xl text-center"
        data-aos="fade-up"
      >
        SDGs We Are Aligned With
      </h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <div className="flex justify-center mt-5">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-7 px-3">
          {sdgData.map((item) => {
            return (
              <li key={item.id} data-aos="flip-up">
                <div>
                  <Image src={item.iconUrl} width={110} height={110} alt="" />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SDGs
