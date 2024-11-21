"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [dropdownAbout, setDropdownAbout] = useState(false)
  // const [dropdownResources, setDropdownResources] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const toggleDropdown1 = () => {
    setDropdownAbout(!dropdownAbout)
  }

  // const toggleDropdown2 = () => {
  //   setDropdownResources(!dropdownResources)
  // }

  return (
    <div
      className={`${isScrolled ? "bg-ce-vivid-green" : "bg-transparent"
        } py-5 fixed top-0 right-0 left-0 z-50`}
    >
      <nav className="px-3" data-aos="fade-down">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="text-2xl text-white font-semibold">
              Community Engagement
            </h1>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${navbarOpen ? "block bg-black/40" : "hidden"
              } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0">
              {/* <li>
              <Link
                href="/"
                className="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li> */}
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleDropdown1}
                  className="flex items-center justify-between w-full py-2 px-3 text-white md:p-0 md:w-auto"
                >
                  About Us
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${dropdownAbout ? "block" : "hidden"
                    } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/who-we-are"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/why-choose-us"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Why Choose Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-team"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Our Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/community-connect"
                  className="block py-2 px-3 text-lg text-white md:p-0"
                  aria-current="page"
                >
                  CommunityConnect
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="block py-2 px-3 text-lg text-white md:p-0"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-lg text-white md:p-0"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="https://fuzhio.org/blog"
                  target="_blank"
                  className="block py-2 px-3 text-lg text-white md:p-0"
                  aria-current="page"
                >
                  Blogs
                </Link>
              </li>

              {/* <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown2}
                className="flex items-center justify-between w-full py-2 px-3 text-white md:p-0 md:w-auto"
              >
                Resources
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownResources ? "block" : "hidden"
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="https://fuzhio.org/blog"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Blogs
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/methodology"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/success-stories"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>
            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
