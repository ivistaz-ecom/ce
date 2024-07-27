"use client"
import Header from "@/components/Header/Header"
import { blogsData } from "@/utils/data"
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
        className="h-[400px] md:h-[700px] bg-center bg-[url('/webBanner/banner06.jpg')] bg-cover mb-16"
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
      <div className="-mt-32 mb-16">
        <div className="max-w-screen-xl mx-auto px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl lg:text-[40px] text-ce-brown text-center font-semibold z-50"
              data-aos="fade-up"
            >
              Blogs
            </h1>
            <div className="border-2 border-ce-red w-12 mb-2 z-50" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16 px-4">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.map((item) => {
            return (
              <li
                key={item.id}
                className="bg-[#F4F4F4] rounded-lg overflow-hidden shadow-md"
                data-aos="zoom-in"
              >
                <div className="w-full">
                  <Image
                    src={item.imageUrl}
                    width={496}
                    height={310}
                    className="w-full object-cover"
                    alt={item.tiile}
                  />
                </div>
                <div className="flex flex-col items-start gap-5 p-4">
                  <h3 className="text-xl lg:text-2xl text-[#1C1C1C]">
                    {item.tiile}
                  </h3>
                  <p className="text-sm lg:text-base text-[#1C1C1C]">
                    {item.desc}
                  </p>
                  <button className="bg-ce-red text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Page
