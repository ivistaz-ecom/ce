"use client"

import React, { useState } from "react"
import ContactForm from "../../../utils/contact"

const ContactUs = () => {
  const fields = {
    form: "2",
    formId: "9",
    fields: [
      { id: "firstname", label: "First Name", type: "text" },
      { id: "lastname", label: "Last Name", type: "text" },
      { id: "email", label: "Email ID", type: "email" },
      { id: "organisationName", label: "Organisation", type: "text" },
      { id: "messageBox", label: "Message", type: "textarea" },
    ],
  }

  return (
    <div className="bg-ce-carmine text-white py-10 px-4 sm:px-10 mb-16">
      <div className="max-w-screen-xl flex flex-col items-center mx-auto gap-3">
        <h1 className="text-2xl sm:text-3xl text-center" data-aos="fade-up">
          Contact Us
        </h1>
        <div className="border-2 border-white w-20" />
        <p
          className="text-lg sm:text-2xl font-light text-center w-11/12 sm:w-3/5"
          data-aos="fade-down"
        >
          Reach out to explore how our services can turn insights into impact
        </p>
        <p
          className="text-sm sm:text-base font-light mb-3 text-center w-11/12 sm:w-auto"
          data-aos="zoom-in"
        >
          Connect with us for your data requirements
        </p>
        <ContactForm
          fields={fields.fields}
          form={fields.form}
          formId={fields.formId}
        />
      </div>
    </div>
  )
}

export default ContactUs
