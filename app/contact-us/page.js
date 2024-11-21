"use client"
import ContactUsForm from "@/components/ContactUs/ContactUsForm/ContactUsForm"
import Header from "@/components/Header/Header"
import React from "react"
import Seo from "../../components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const page = () => {

  const pathname = usePathname();
  const seo = {
    title: "Methodology for Strategic Community Engagement",
    description: "Discover our proven methodology for effective community engagement, combining research, innovation, and collaboration to deliver sustainable outcomes",
    path: `${pathname}`,
    metaImage: "",
  }
  return (
    <>

      <Seo {...seo} />
      <div className="h-[400px] md:h-[700px] bg-center bg-[url('/webBanner/banner09.jpg')] bg-cover mb-16">
        <Header />
      </div>
      <div className="-mt-40 mb-16">
        <div className="max-w-screen-xl mx-auto px-12 flex flex-col items-center gap-3">
          <h1 className="text-[40px] text-ce-brown text-center font-semibold">
            Contact Us
          </h1>
          <div className="border-2 border-ce-red w-32" />
          <p className="text-3xl text-[#6E180C] text-center mt-10">
            Let&apos;s Start a Conversation
          </p>
          <div className="border-2 border-ce-carmine w-20" />
        </div>
      </div>
      <ContactUsForm />
    </>
  )
}

export default page
