"use client"

import React, { useState } from "react"
import ContactForm from "../../../utils/contact"

const ContactUsForm = () => {
  const fields = {
    formid: "2",
    fields: [
      { id: "firstname", label: "First Name", type: "text" },
      { id: "lastname", label: "Last Name", type: "text" },
      { id: "email", label: "Email ID", type: "email" },
      { id: "phone", label: "Phone", type: "phone" },
      // { id: "organisationName", label: "Organisation", type: "text" },
      { id: "messageBox", label: "Message", type: "textarea" },
    ],
  }
  return (
    <div className="flex flex-col items-center justify-between p-5 md:p-10 gap-10 md:gap-20 max-w-screen-2xl mx-auto mb-10">
      <div className="w-full md:w-1/2">
        <h3 className="text-ce-black text-xl md:text-2xl mb-4 text-center">
          See our platform in action
        </h3>
        <h4 className="text-[#1C1C1C] text-base md:text-lg text-center">
          Contact us with any questions or comments. Our dedicated team is ready
          to assist you.
        </h4>
      </div>
      <div className="w-full md:w-3/4 shadow p-10 bg-[#FFF3DE]">
        <ContactForm fields={fields.fields} form={fields.formid} />
      </div>
    </div>
  )
}

export default ContactUsForm
