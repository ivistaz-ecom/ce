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
      <div
        className="h-[400px] md:h-[700px] bg-center bg-[url('/webBanner/banner10.jpg')] bg-cover mb-16"
        data-aos="fade-down"
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
      <div className="-mt-32 mb-12">
        <Mentors />
        <CoreTeam />

        {/* <MentorAndAdvisors /> */}
      </div>
    </>
  )
}

export default Page
