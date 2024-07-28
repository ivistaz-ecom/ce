import { qcData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const QC = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16 px-5 sm:px-10 lg:px-24 mb-5">
      <div className="flex flex-col items-center gap-3">
        <h1
          className="text-xl sm:text-2xl lg:text-3xl text-ce-brown text-center font-semibold"
          data-aos="fade-up"
        >
          Quality Control (QC)
        </h1>
        <div className="border-2 border-ce-red w-20 mb-2" />
      </div>

      <div className="flex flex-col justify-center gap-5 max-w-screen-2xl mx-auto">
        <p
          className="text-base sm:text-lg lg:text-xl text-ce-black text-center"
          data-aos="fade-down"
        >
          Quality Control (QC) exercise constitutes routine technical activities
          that are in place to control errors in data collection. Since errors
          can occur at any stage in the process, QC will be strictly followed at
          each stage of the study. QC will include both internal and external
          measures. QC ensures ‘data confidence’ as it helps to validate the
          authenticity and robustness of the data collected by the enumerators.
        </p>
        <div className="mt-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {qcData.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-7"
                data-aos="zoom-in"
              >
                <div className="flex gap-5">
                  <Image
                    src={item.iconUrl}
                    width={100}
                    height={100}
                    alt={item.title}
                    className="self-start"
                  />
                  <div>
                    <h3 className="text-2xl text-ce-brown font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-lg text-ce-gray">{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default QC
