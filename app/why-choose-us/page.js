"use client"
import Header from "@/components/Header/Header"
import Expertise from "@/components/WhyChooseUs/Expertise/Expertise"
import Link from "next/link"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { usePathname } from "next/navigation"
import Seo from '../../components/SeoComponents/Seo'
const Page = () => {
  useEffect(() => {
    AOS.init()
  })

  const pathname = usePathname();
  const seo = {
    title: "Building Stronger Communities through Insight and Engagement",
    description: "Learn why Fuzhio Community Engagement is the trusted choice for  delivering innovative, sustainable solutions tailored to your impact goals.",
    path: `${pathname}`,
    metaImage: "",
  }
  return (
    <>

      <Seo {...seo} />
      <div
        className="h-[400px] md:h-[700px] bg-center bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ce/public/webBanner/banner03.jpg')] bg-cover mb-16"
        data-aos="fade-down"
      >
        <Header />
        {/* <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div> */}
      </div>
      <div className="flex justify-end relative">
        <Link href="contact-us">
          <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl fixed top-40 right-0 z-50">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="-mt-24 mb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl text-ce-brown text-center font-semibold"
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
