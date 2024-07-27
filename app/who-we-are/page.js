"use client"
import Header from "@/components/Header/Header"
import HealthAndWealth from "@/components/WhoWeAre/HealthAndWealth/HealthAndWealth"
import OurPresence from "@/components/WhoWeAre/OurPresence/OurPresence"
import Image from "next/image"
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
        className="h-[400px] md:h-[700px] bg-[url('/webBanner/banner02.jpg')] bg-cover bg-center mb-16"
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
      <div className="-mt-16 mb-16">
        <div className="px-4 lg:ps-40 flex flex-col items-start gap-6">
          <div className="w-full flex flex-col items-center lg:items-start gap-2">
            <h1
              className="text-3xl lg:text-[40px] text-ce-brown font-semibold text-center lg:text-left"
              data-aos="fade-up"
            >
              Who We Are
            </h1>
            <div className="border-2 border-ce-red w-20 lg:w-32" />
          </div>
          <h2
            className="text-xl lg:text-2xl text-ce-brown text-center lg:text-left"
            data-aos="fade-down"
          >
            Transforming Insights into Action
          </h2>
          <div
            className="flex flex-col lg:flex-row flex-wrap justify-between gap-6"
            data-aos="fade-down"
          >
            <p className="text-base lg:text-xl text-ce-gray w-full lg:w-2/5">
              Community Engagement (CE) specialises in research and gathering
              intelligence on markets, consumers, and societal trends, enabling
              partners to make efficient and well-informed decisions. As a
              highly reputed member of the{" "}
              <Link
                href="https://catalysts.global/"
                target="_blank"
                className="text-ce-black underline"
              >
                Catalyst Group
              </Link>
              , a social enterprise committed to promoting the health and
              prosperity of vulnerable communities, CE is associated with
              pioneers such as{" "}
              <Link
                href="https://cms.org.in"
                target="_blank"
                className="text-ce-black underline"
              >
                Catalyst Management Services/CMS
              </Link>
              ,{" "}
              <Link
                href="https://swasti.org"
                target="_blank"
                className="text-ce-black underline"
              >
                Swasti
              </Link>
              ,{" "}
              <Link
                href="https://vruttiimpactcatalysts.org"
                target="_blank"
                className="text-ce-black underline"
              >
                Vrutti
              </Link>
              ,{" "}
              <Link
                href="https://upfront.global"
                target="_blank"
                className="text-ce-black underline"
              >
                Upfront
              </Link>
              ,{" "}
              <Link
                href="https://greenfoundation.in"
                target="_blank"
                className="text-ce-black underline"
              >
                Green Foundation
              </Link>
              , and{" "}
              <Link
                href="https://fuzhio.org"
                target="_blank"
                className="text-ce-black underline"
              >
                Fuzhio
              </Link>
              .
            </p>
            <div className="w-full lg:w-2/5 lg:mt-0">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/community-engagement/whoWeAre/image01.png"
                height={500}
                width={500}
                alt=""
                className="w-full"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <HealthAndWealth /> */}
      <OurPresence />
    </>
  )
}

export default Page
