"use client"
import Header from "@/components/Header/Header"
import HealthAndWealth from "@/components/WhoWeAre/HealthAndWealth/HealthAndWealth"
import OurPresence from "@/components/WhoWeAre/OurPresence/OurPresence"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Seo from "../../components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  useEffect(() => {
    AOS.init()
  })

  const pathname = usePathname();
  const seo = {
    title: "Fuzhio Community Engagement - Who We Are",
    description: "Discover the vision and values at Community Engagement that drive us to transform insights into action and foster meaningful impact and sustainable practices.",
    path: `${pathname}`,
    metaImage: "",
  }
  return (
    <>
      <Seo {...seo} />
      <div
        className="h-[400px] md:h-[700px] bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ce/public/webBanner/banner02.jpg')] bg-cover bg-center mb-16"
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
      <div className="-mt-16 mb-16">
        <div className="px-4 lg:ps-40 flex flex-col items-start gap-6">
          <div className="w-full flex flex-col items-center lg:items-start gap-3">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl text-ce-brown text-center font-semibold"
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
              Community Engagement (CE) specialises in both social and market
              research, gathering detailed intelligence on societal trends,
              consumer behaviour, and market dynamics. As a highly reputed
              member of the{" "}
              <Link
                href="https://catalysts.global/"
                target="_blank"
                className="text-ce-black underline"
              >
                Catalyst Group
              </Link>
              , a social enterprise committed to promoting the health and
              prosperity of vulnerable communities, Community Engagement is
              associated with pioneers such as{" "}
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
