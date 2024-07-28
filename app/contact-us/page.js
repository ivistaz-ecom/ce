import ContactUsForm from "@/components/ContactUs/ContactUsForm/ContactUsForm"
import Header from "@/components/Header/Header"
import React from "react"

const page = () => {
  return (
    <>
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
