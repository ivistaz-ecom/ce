"use client"

import React, { useRef } from "react"
import Image from "next/image"
import InsightSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TestimonialsCard from "./TestimonialsCard"
import { testimonials } from "@/utils/data"
import { leftArrow, rightArrow } from "@/utils/icon"

const Testimonials = () => {
  const sliderRef = useRef(null)

  var setting = {
    speed: 500,
    slidesToShow: 2,
    initialSlide: 2,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="bg-[#BCD55D] w-full pt-10 pb-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center gap-3 mb-10">
            <h1
              className="text-xl sm:text-2xl lg:text-3xl text-ce-brown text-center font-semibold"
              data-aos="fade-up"
            >
              Testimonial
            </h1>
            <div className="border-2 border-ce-red w-32 mb-2" />
          </div>
          <InsightSlider ref={sliderRef} {...setting}>
            {testimonials.map((item) => (
              <TestimonialsCard key={item.id} testimonialDetails={item} />
            ))}
          </InsightSlider>
        </div>
      </div>
    </>
  )
}

export default Testimonials
