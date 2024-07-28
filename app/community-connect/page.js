"use client"
import CoreTeam from "@/components/FieldConnect/CoreTeam/CoreTeam"
import MentorAndAdvisors from "@/components/FieldConnect/MentorAndAdvisors/MentorAndAdvisors"
import Mentors from "@/components/FieldConnect/Mentors/Mentors"
import PortfolioManager from "@/components/FieldConnect/PortfolioManager/PortfolioManager"
import Header from "@/components/Header/Header"
import Link from "next/link"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Page = () => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <div className="h-[400px] md:h-[700px] bg-center bg-[url('/webBanner/banner05.jpg')] bg-cover mb-16">
        <Header />
      </div>
      <div className="flex justify-end relative">
        <Link href="contact-us">
          <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl fixed top-40 right-0 z-50">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="-mt-24 mb-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl lg:text-[40px] text-ce-brown text-center font-semibold"
              data-aos="fade-up"
            >
              CommunityConnect
            </h1>
            <div className="border-2 border-ce-red w-32 mb-2" />
            {/* <h2
              className="text-lg sm:text-xl lg:text-2xl text-ce-brown text-center"
              data-aos="fade-down"
            >
              Data Quality Assurance and Control Process
            </h2> */}
          </div>
          <p
            className="text-base sm:text-lg lg:text-xl text-ce-gray text-center"
            data-aos="fade-up"
          >
            Social research is on the rise, driven by the need to understand
            complex social dynamics beyond mere consumer preferences. This surge
            highlights a crucial gap: the need for well-trained fieldworkers who
            can gather high-quality data, essential for informed decision-making
            and positive social impact.
          </p>
          <p
            className="text-base sm:text-lg lg:text-xl text-ce-gray text-center"
            data-aos="fade-down"
          >
            The CommunityConnect initiative is a flagship project of the
            Community Engagement unit at Catalyst Group. It features a pool of
            ultra local, trained, tested, and ethically certified networks
            across India and pool of verified agencies across the globe,
            including remote regions. This extensive network enables our
            partners to engage with diverse communities across the country.{" "}
            <span className="font-semibold">
              CommunityConnect: Empowering you with local expertise and national
              reach for qualitative insights and data collection.
            </span>
          </p>
        </div>
      </div>
      <PortfolioManager />
      {/* <CoreTeam />
      <Mentors />
      <MentorAndAdvisors /> */}
    </>
  )
}

export default Page
