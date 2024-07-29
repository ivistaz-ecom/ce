"use client"
import Header from "@/components/Header/Header"
import QA from "@/components/Methodology/QA/QA"
import QC from "@/components/Methodology/QC/QC"
import Link from "next/link"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"

const Page = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <div
        className="h-[400px] md:h-[700px] bg-center bg-[url('/webBanner/banner04.jpg')] bg-cover mb-16"
        data-aos="zoom-in"
      >
        <Header />
      </div>

      <div className="flex justify-end relative">
        <Link href="contact-us">
          <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl fixed top-40 right-0 z-50">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="-mt-28 mb-10">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl lg:text-[40px] text-ce-brown text-center font-semibold z-50"
              data-aos="fade-up"
            >
              Methodology
            </h1>
            <div className="border-2 border-ce-red w-28 mb-2" />
            {/* <h2
              className="text-base sm:text-lg lg:text-xl text-ce-brown text-center"
              data-aos="fade-down"
            >
              Data Quality Assurance and Control Process
            </h2> */}
          </div>
          {/* <p
            className="text-base lg:text-xl text-ce-gray text-center"
            data-aos="zoom-in"
          >
            We excel in accessing and understanding the critical mile where
            impact is targeted—in diverse communities and local ecosystems—which
            is crucial for making informed decisions, implementing
            interventions, and delivering services. Each community’s unique
            setting requires specialised knowledge, experience, and a tailored
            approach to engagement. The need for community engagement varies
            widely in duration and urgency based on stakeholder requirements,
            and cannot be effectively handled by casually contracted, short-term
            teams.
          </p> */}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mb-5">
        {/* <div className="flex flex-col items-center gap-3">
          <h1
            className="text-ce-brown text-2xl sm:text-3xl text-center"
            data-aos="fade-up"
          >
            Our Methodologies
          </h1>
          <div className="border-2 border-ce-red w-20 mb-2" />
        </div> */}

        <div className="flex justify-center mt-10">
          <Image
            src="/methodology/qualitative.png"
            width={1269}
            height={745}
            className=" w-3/4 hidden md:block"
          />
          <Image
            src="/methodology/qualitative01.png"
            width={1269}
            height={745}
            className="block md:hidden"
          />
        </div>
      </div>

      <QA />
      <QC />
    </>
  )
}

export default Page
