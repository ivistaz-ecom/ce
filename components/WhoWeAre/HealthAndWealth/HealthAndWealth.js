import Image from 'next/image'
import React from 'react'

const HealthAndWealth = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2
            className="text-ce-brown text-2xl sm:text-3xl text-center"
            data-aos="fade-up"
          >
            Ensuring the Health and Wealth of <br className="hidden sm:block" />{' '}
            Marginalised Communities
          </h2>
          <div className="border-2 border-ce-red w-20 mb-2" />
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/community-engagement/whoWeAre/health.png"
            width={1000}
            height={1000}
            alt=""
            className="mt-5 w-full sm:w-4/5 md:w-3/5"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  )
}

export default HealthAndWealth
