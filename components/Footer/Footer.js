import { facebook, linkedIn, twitter } from "@/utils/icon"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div
        className="flex flex-col items-center gap-3 p-4 sm:p-6 md:p-8 lg:p-10"
        data-aos="zoom-in"
      >
        <h2 className="text-ce-brown text-2xl sm:text-3xl">
          Contact Information
        </h2>
        <div className="border-2 border-ce-red w-20 mb-2" />
        <div className="flex flex-col sm:flex-row gap-2 text-center sm:text-left">
          <h3 className="text-base sm:text-lg md:text-xl">
            <span className="text-ce-vivid-md-green">Call:</span>
            <a href="tel:+919448176887">+91 9448176887</a>
          </h3>
          <span className="hidden md:block text-base sm:text-lg md:text-xl font-light text-ce-vivid-md-green">
            |
          </span>
          <h3 className="text-base sm:text-lg md:text-xl">
            <span className="text-ce-vivid-md-green">Email:</span>{" "}
            <a
              href="mailto:contactfuzhio@catalysts.org"
              className="text-inherit"
            >
              contactfuzhio@catalysts.org
            </a>{" "}
            <span className="font-light hidden md:inline-block">|</span>{" "}
            <a href="mailto:latheef@catalysts.org" className="text-inherit">
              latheef@catalysts.org
            </a>
          </h3>
        </div>
      </div>
      <div className="footer-bg bg-ce-vivid-green px-4 sm:px-5 pt-5 pb-8 text-white mt-7">
        <div className="max-w-screen-2xl px-4 sm:px-5 mx-auto mt-12 sm:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <Link href="/" data-aos="zoom-in">
              <h1 className="text-2xl sm:text-3xl mt-20 md:mt-0">
                Community Engagement
              </h1>
            </Link>
            <Link href="/" data-aos="zoom-in">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/community-engagement/home/logo.png"
                width={200}
                height={111}
                alt="Fuzhio"
                className="mix-blend-luminosity"
              />
            </Link>
          </div>
          <hr className="w-full mb-6 mt-1 border-ce-light-green" />
          <div className="flex flex-wrap justify-between">
            <div className="text-base sm:text-lg space-y-2 md:text-xl">
              <h3 className="hover:underline">
                <Link href="/who-we-are">About Us</Link>
              </h3>
              <h3 className="hover:underline">
                <Link href="/community-connect">CommunityConnect</Link>
              </h3>
              <h3 className="hover:underline">
                <Link href="/methodology">Methodology</Link>
              </h3>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl mb-2">Services</h3>
              <ul className="font-light space-y-2">
                <li className="hover:underline">
                  <Link href="/services">Project Start-up Support (BoT)</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/services">Tech4Community (T4C)</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/services">Skills4Communities (S4C)</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/services">
                    Data for Decisions and Insights (DDI)
                  </Link>
                </li>
                <li className="hover:underline">
                  <Link href="/services">Data Management (DM)</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/services">
                    Assessments, Due Diligence and Rating Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5 md:mt-0">
              <h3 className="text-base sm:text-lg md:text-xl mb-2">
                Resources
              </h3>
              <ul className="font-light space-y-2">
                <li className="hover:underline">
                  <Link href="https://fuzhio.org/blog" target="_blank">
                    Blogs
                  </Link>
                </li>
                {/* <li className="hover:underline">
                  <Link href="/">Media</Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl mb-2 mt-5 md:mt-0">
                Follow Us:
              </h3>
              <ul className="flex flex-row justify-between space-x-4 mt-2">
                <li className="bg-ce-light-green p-2.5 text-xl text-ce-black flex justify-center items-center rounded-full hover:bg-white cursor-pointer">
                  <Link href="#">{facebook}</Link>
                </li>
                <li className="bg-ce-light-green p-2.5 text-xl text-ce-black flex justify-center items-center rounded-full hover:bg-white cursor-pointer">
                  <Link href="#">{twitter}</Link>
                </li>
                <li className="bg-ce-light-green p-2.5 text-xl text-ce-black flex justify-center items-center rounded-full hover:bg-white cursor-pointer">
                  <Link href="#">{linkedIn}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ce-light-green p-4 sm:p-5">
        <div className="max-w-screen-2xl flex flex-wrap justify-center items-center text-ce-brown mx-auto">
          <p>©{currentYear} Fuzhio. All Rights Reserved.</p>
          {/* <ul className="flex flex-wrap">
            <li className="after:content-['|'] after:px-1 last:after:content-['']">
              <Link href="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li className="after:content-['|'] after:px-1 last:after:content-['']">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="after:content-['|'] after:px-1 last:after:content-['']">
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
            </li>
            <li className="after:content-['|'] after:px-1 last:after:content-['']">
              <Link href="/sitemap" className="hover:underline">
                Sitemap
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  )
}

export default Footer
