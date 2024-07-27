"use client"
import Header from "@/components/Header/Header"
import Expertise from "@/components/WhyChooseUs/Expertise/Expertise"
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
        className="h-[400px] md:h-[700px] bg-center bg-[url('/webBanner/banner03.jpg')] bg-cover mb-16"
        data-aos="zoom-in"
      >
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-24 mb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl text-ce-brown text-center font-semibold z-50"
              data-aos="fade-up"
            >
              Why Choose Us
            </h1>
            <div className="border-2 border-ce-red w-20 sm:w-32 mb-2" />
          </div>
          <p
            className="text-base sm:text-lg lg:text-xl text-ce-gray text-center"
            data-aos="fade-down"
          >
            We bridge the social gap in communities across India. Our
            comprehensive services go beyond data - we leverage technology to
            foster deeper connections, gather community voices, and support
            project launches that build lasting social change. Let us be your
            partner in creating a more vibrant, connected community. With
            data-driven insights and expert support, we empower positive social
            impact, together.
          </p>
        </div>
      </div>

      <Expertise />
    </>
  )
}

export default Page
