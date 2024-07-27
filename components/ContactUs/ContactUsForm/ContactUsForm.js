'use client'

import React, { useState } from 'react'
import ContactForm from '../../../utils/contact'

const ContactUsForm = () => {
  const fields = {
    formid: '1',
    fields: [
      { id: 'firstname', label: 'First Name', type: 'text' },
      { id: 'lastname', label: 'Last Name', type: 'text' },
      { id: 'email', label: 'Email ID', type: 'email' },
      { id: 'phone', label: 'Phone', type: 'phone' },
      { id: 'organisationName', label: 'Organisation', type: 'text' },
      { id: 'messageBox', label: 'Message', type: 'textarea' },
    ],
  }
  return (
    <div className="flex flex-col md:flex-row justify-between p-10 gap-20 max-w-screen-2xl mx-auto mb-10">
      <div className="w-1/2">
        <h3 className="text-ce-gray text-2xl mb-4">
          See our platform in action
        </h3>
        <h4 className="text-[#1C1C1C] mb-2">
          Contact us with any questions or comments. Our dedicated team is ready
          to assist you.
        </h4>
        {/* <p className="text-[#1C1C1C]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p> */}
      </div>
      <div className="w-1/2 shadow p-4">
        <ContactForm fields={fields.fields} form={fields.formid} />
      </div>
    </div>
  )
}

export default ContactUsForm
