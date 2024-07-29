import Image from "next/image"
import React from "react"

const FieldConnect = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-16">
      <h2
        className="text-ce-brown text-2xl sm:text-3xl text-center"
        data-aos="fade-down"
      >
        CommunityConnect
      </h2>
      <div className="border-2 border-ce-red w-20 mb-2" />
      <div className="w-full max-w-screen-lg" data-aos="flip-up">
        <video className="w-full" controls>
          <source
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ce/Untitled-10.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default FieldConnect
