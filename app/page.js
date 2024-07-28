"use client"
import Header from "@/components/Header/Header"
import Clientle from "@/components/Home/Clientle/Clientle"
import ContactUs from "@/components/Home/ContactUs/ContactUs"
import FieldConnect from "@/components/Home/FieldConnect/FieldConnect"
import OurImpactAndReach from "@/components/Home/OurImpactAndReach/OurImpactAndReach"
import OurPartners from "@/components/Home/OurPartners/OurPartners"
import OurServices from "@/components/Home/OurServices/OurServices"
import SDGs from "@/components/Home/SDGs/SDGs"
import Snapshot from "@/components/Home/Snapshot/Snapshot"
import Link from "next/link"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Testimonials from "@/components/Home/Testimonial/Testimonial"

export default function Home() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <div
        className="h-[400px] md:h-[700px] bg-[url('/webBanner/banner01.jpg')] bg-cover bg-center mb-16"
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

      <div className="-mt-24 mb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl text-ce-brown text-center font-semibold"
            data-aos="fade-up"
          >
            Building Stronger Communities through{" "}
            <br className="hidden md:block" /> Insight and Engagement
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-ce-gray text-center mt-5"
            data-aos="fade-down"
          >
            Transforming market and consumer intelligence into actionable
            insights empowers organisations and businesses to make informed
            decisions, driving success and fostering strategic change. Our
            expertise lies in engaging with diverse communities, utilising
            advanced technology and methods to uncover valuable perspectives.
            Our presence spans every corner of the nation and extends across the
            globe. In collaboration with Catalyst Management Services, Swasti,
            Vrutti, Upfront, Green Foundation, and Fuzhio, we ensure
            high-quality, accurate data collection and analysis.
          </p>
          <p
            className="text-base sm:text-lg md:text-xl text-ce-gray text-center"
            data-aos="fade-down"
          >
            Choosing CE means selecting a partner committed to empowerment and
            precision, ensuring your strategies are well-informed and capable of
            driving lasting, impactful change.
          </p>
        </div>
      </div>

      <OurServices />
      <OurImpactAndReach />
      <Snapshot />
      <SDGs />
      <FieldConnect />
      <OurPartners />
      <Clientle />
      <Testimonials />
      <ContactUs />
    </>
  )
}
