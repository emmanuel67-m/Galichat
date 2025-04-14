"use client"

import { useState } from "react"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUsecasesOpen, setIsUsecasesOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState)
  }

  const toggleUsecases = () => {
    setIsUsecasesOpen((prevState) => !prevState)
  }

  return (
    <div>
      <nav className="block backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 text-white w-[calc(100%-20px)] lg:w-full max-w-screen-lg bg-gray-900 md:mx-auto navbar transition-all duration-300 rounded-[30px] fixed left-1/2 -translate-x-1/2 top-3 z-50 border-none !bg-opacity-100 !backdrop-blur-0 py-2 px-3 pl-5">
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center gap-2" href="/">
            <img src="https://www.galichat.com/logo-galichat.png" alt="logo" className="w-8 h-8" />
            <p className="block antialiased font-sans text-white mr-4 text-sm font-semibold cursor-pointer">GaliChat</p>
          </a>

          <div className="lg:flex hidden items-center gap-2">
            <li className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal">
              <a className="flex items-center" href="/discover">
                Discover
              </a>
            </li>

            <li className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal">
              <a className="flex items-center" href="/usecases">
              Usecases
              </a>
            </li>
            <li className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal">
              <a className="flex items-center" href="/affiliates">
                Affiliates
              </a>
            </li>
            <li className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal">
              <a className="flex items-center" href="/pricing">
                Pricing
              </a>
            </li>
          </div>

          <div className="hidden lg:flex items-center justify-end gap-2 lg:min-w-[200px]">
            <li className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal">
              <a className="flex items-center cursor-pointer" href="/signin">
                Sign In
              </a>
            </li>
            <a href="/signin">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-white text-black shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none capitalize flex items-center rounded-full py-2 px-4 pr-3"
                type="button"
              >
                Free demo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </a>
          </div>

          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 ml-auto inline-block lg:hidden"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`block basis-full overflow-hidden w-auto mx-auto container ${isMobileMenuOpen ? "block" : "hidden"}`}
          style={{ height: isMobileMenuOpen ? "auto" : "0px" }}
        >
          <div className="flex flex-col gap-4 mt-4">
            <div className="block lg:flex items-center gap-4 pt-4">
              <li className="block antialiased font-sans text-sm leading-normal text-white p-1 mb-2 font-normal">
                <a className="flex items-center" href="/discover">
                  Discover
                </a>
              </li>
              
              <li className="block antialiased font-sans text-sm leading-normal text-white p-1 mb-2 font-normal">
                <a className="flex items-center" href="/discover">
                  Usecases
                </a>
              </li>

              <p className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal mb-2">
                <a className="flex items-center" href="/affiliates">
                  Affiliates
                </a>
              </p>
              <p className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal mb-2">
                <a className="flex items-center" href="/pricing">
                  Pricing
                </a>
              </p>
              <p className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal mb-2">
                <a className="flex items-center cursor-pointer" href="/signin">
                  Sign In
                </a>
              </p>
              <p className="block antialiased font-sans text-sm leading-normal text-white p-1 font-normal mb-2">
                <a className="block lg:hidden" href="/signin">
                  Free demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
