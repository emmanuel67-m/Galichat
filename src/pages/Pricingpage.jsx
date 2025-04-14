"use client"

import { useState } from "react"
import Navbar from "../components/Navbarpage"
import Footer from "../components/Footerpage"

function PricingPage() {
  const [activeTab, setActiveTab] = useState("monthly") // Default active tab is "monthly"

  const handleTabClick = (value) => {
    setActiveTab(value) // Update active tab when a tab is clicked
  }

  // Check icon for feature lists
  const CheckIcon = () => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 10.5L9.16667 12.1667L12.5 8.83333M17.5 10.5C17.5 11.4849 17.306 12.4602 16.9291 13.3701C16.5522 14.2801 15.9997 15.1069 15.3033 15.8033C14.6069 16.4997 13.7801 17.0522 12.8701 17.4291C11.9602 17.806 10.9849 18 10 18C9.01509 18 8.03982 17.806 7.12987 17.4291C6.21993 17.0522 5.39314 16.4997 4.6967 15.8033C4.00026 15.1069 3.44781 14.2801 3.0709 13.3701C2.69399 12.4602 2.5 11.4849 2.5 10.5C2.5 8.51088 3.29018 6.60322 4.6967 5.1967C6.10322 3.79018 8.01088 3 10 3C11.9891 3 13.8968 3.79018 15.3033 5.1967C16.7098 6.60322 17.5 8.51088 17.5 10.5Z"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )

  // X icon for unavailable features
  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )

  // Info icon for tooltips
  const InfoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5 cursor-pointer text-blue-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      ></path>
    </svg>
  )

  // Phone icon for "Book a demo"
  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )

  // Feature item component
  const FeatureItem = ({ icon, text, info, disabled = false }) => (
    <li className="flex items-center justify-between gap-2 text-gray-700">
      <div className="flex items-center">
        {icon}
        <p
          className={`block antialiased font-sans text-base leading-relaxed font-normal text-gray-600 ml-2 ${disabled ? "opacity-60" : ""}`}
        >
          {text}
        </p>
      </div>
      <a href="#" className="text-gray-500">
        <InfoIcon />
      </a>
    </li>
  )

  // Pricing card component
  const PricingCard = ({ title, icon, price, popular, features, buttonStyle, activeTab }) => (
    <div
      className={`relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md ${popular ? "border-2 border-gray-900" : ""}`}
    >
      {popular && (
        <div className="absolute w-full left-0 top-0 transform -translate-y-1/2 flex justify-center">
          <div
            className="relative grid items-center font-sans font-bold whitespace-nowrap select-none bg-gray-900 text-white py-1.5 px-3 text-xs rounded-full capitalize"
            data-projection-id="111"
            style={{ opacity: 1 }}
          >
            <span>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-4 w-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                Most Popular
              </div>
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900 capitalize">
            {title}
          </h5>
          {icon}
        </div>

        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-gray-900 mb-6">
          $<span className="text-4xl">{activeTab === "yearly" ? Math.floor(price * 0.8) : price}</span>
          <span className="text-base text-gray-600 font-medium block">
            {activeTab === "yearly" ? "yearly" : "monthly"}
          </span>
        </h2>

        <p className="block antialiased font-sans text-base leading-relaxed text-gray-900 font-bold mb-6">
          What's included
        </p>

        <ul className="flex flex-col gap-3 mb-6">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.available ? <CheckIcon /> : <XIcon />}
              text={feature.text}
              disabled={!feature.available}
            />
          ))}
        </ul>

        <button className={buttonStyle} type="button">
          Subscribe
        </button>
      </div>

      <div className="p-6 flex justify-center pt-2">
        <a
          href="https://cal.com/alexandru-paduraru/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500 transition"
        >
          <div className="flex items-center gap-2">
            <PhoneIcon />
            Book a demo
          </div>
        </a>
      </div>
    </div>
  )

  // Free demo section
  const FreeDemo = () => (
    <div className="container max-w-6xl mx-auto mt-12">
      <div className="relative bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex md:!flex-row flex-col justify-between px-2 py-7 md:items-center">
        <div className="relative bg-clip-border mt-4 mx-4 overflow-hidden bg-white text-gray-700 rounded-none">
          <h5 className="block antialiased tracking-normal font-sans font-semibold leading-snug text-blue-gray-900 !text-2xl">
            Free Demo
          </h5>
          <p className="block antialiased font-sans text-sm leading-normal !font-normal mt-2 text-gray-600 max-w-md">
            Test your AI Agent without any commitment. No credit card required. After 7 days of inactivity the chat will
            be disabled.
          </p>
          <h2 className="antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 flex mt-1 mb-3 gap-2"></h2>
          <a href="/signin">
            <button
              className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] md:max-w-fit w-full border-gray-300 normal-case"
              type="button"
            >
              Get Started
            </button>
          </a>
        </div>

        <hr className="mx-4 h-px my-8" />

        <div className="p-6 md:border-l py-0">
          <div className="container max-w-8xl grid grid-cols-1 gap-10 md:grid-cols-2 mx-auto">
            <div className="mt-2">
              <p className="block antialiased font-sans text-base leading-relaxed text-gray-900 font-bold">
                What's included
              </p>
              <ul className="flex flex-col gap-2 mt-4">
                <FeatureItem
                  icon={<CheckIcon />}
                  text={
                    <>
                      <span className="font-bold text-gray-900">1</span> AI Agent
                    </>
                  }
                />
                <FeatureItem
                  icon={<CheckIcon />}
                  text={
                    <>
                      <span className="font-bold text-gray-900">5</span> Training Links
                    </>
                  }
                />
                <FeatureItem
                  icon={<CheckIcon />}
                  text={
                    <>
                      <span className="font-bold text-gray-900">100</span>,
                      <span className="font-bold text-gray-900">000</span> Chars/AI Agent
                    </>
                  }
                />
                <FeatureItem
                  icon={<CheckIcon />}
                  text={
                    <>
                      <span className="font-bold text-gray-900">40</span> Messages
                    </>
                  }
                />
              </ul>
            </div>

            <div className="mt-12">
              <ul className="flex flex-col gap-2">
                <FeatureItem
                  icon={<CheckIcon />}
                  text={
                    <>
                      Up to <span className="font-bold text-gray-900">5</span> Lead Generation
                    </>
                  }
                />
                <FeatureItem
                  icon={<CheckIcon />}
                  text={
                    <>
                      <span className="font-bold text-gray-900">20</span> Files Upload
                    </>
                  }
                />
                <FeatureItem icon={<CheckIcon />} text="Remove Brand - Add-on" />
                <FeatureItem icon={<CheckIcon />} text="English Language Only" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Define features for each plan
  const proFeatures = [
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">2</span> AI Agents
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">50</span> Training Links
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">10</span>,<span className="font-bold text-gray-900">000</span>,
          <span className="font-bold text-gray-900">000</span> Chars/AI Agent
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">4</span>,<span className="font-bold text-gray-900">000</span>{" "}
          Messages
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          Up to <span className="font-bold text-gray-900">100</span> Lead Generation
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">20</span> Files Upload
        </>
      ),
    },
    { available: true, text: "Multiple Language" },
    { available: false, text: "Remove brand" },
  ]

  const businessFeatures = [
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">10</span> AI Agents
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">500</span> Training Links
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">10</span>,<span className="font-bold text-gray-900">000</span>,
          <span className="font-bold text-gray-900">000</span> Chars/AI Agent
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">10</span>,<span className="font-bold text-gray-900">000</span>{" "}
          Messages
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          Up to <span className="font-bold text-gray-900">500</span> Lead Generation
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">100</span> Files Upload
        </>
      ),
    },
    { available: true, text: "Multiple Language" },
    { available: false, text: "Remove brand" },
  ]

  const enterpriseFeatures = [
    { available: true, text: "Unlimited AI Agents" },
    { available: true, text: "Unlimited Training Links" },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">10</span>,<span className="font-bold text-gray-900">000</span>,
          <span className="font-bold text-gray-900">000</span> Chars/AI Agent
        </>
      ),
    },
    {
      available: true,
      text: (
        <>
          <span className="font-bold text-gray-900">100</span>,<span className="font-bold text-gray-900">000</span>{" "}
          Messages
        </>
      ),
    },
    { available: true, text: "Unlimited Lead Generation" },
    { available: true, text: "Unlimited Files Upload" },
    { available: true, text: "Multiple Language" },
    { available: true, text: "Remove brand" },
  ]

  // Button styles
  const defaultButtonStyle =
    "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] block w-full mt-4 capitalize text-md border-gray-300"
  const primaryButtonStyle =
    "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-4 capitalize text-md"

  return (
    <>
      <div className="relative min-h-full w-full bg-[#09090b]">
        <Navbar/>
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <div className="container grid grid-cols-6 relative w-full h-full mx-auto">
            <div className="w-px bg-gradient-to-b from-gray-900 from-50% via-gray-300 to-50% to-transparent bg-[length:1px_9px]"></div>
            <div className="w-px bg-gradient-to-b from-gray-900 from-50% via-gray-300 to-50% to-transparent bg-[length:1px_9px]"></div>
            <div className="w-px bg-gradient-to-b from-gray-900 from-50% via-gray-300 to-50% to-transparent bg-[length:1px_9px]"></div>
            <div className="w-px bg-gradient-to-b from-gray-900 from-50% via-gray-300 to-50% to-transparent bg-[length:1px_9px]"></div>
            <div className="w-px bg-gradient-to-b from-gray-900 from-50% via-gray-300 to-50% to-transparent bg-[length:1px_9px]"></div>
            <div className="w-px bg-gradient-to-b from-gray-900 from-50% via-gray-300 to-50% to-transparent bg-[length:1px_9px]"></div>
            <div className="w-px bg-gradient-to-b from-gray-900 from-50% via-gray-300 to-50% to-transparent bg-[length:1px_9px] absolute right-0 top-0 h-full"></div>
          </div>
        </div>

        <div className="grid min-h-[24rem] px-8 md:py-44 md:pb-36 py-32">
          <div className="container my-auto mx-auto text-center md:px-3 relative z-1">
            <h1 className="block antialiased tracking-normal font-sans leading-tight text-white font-extrabold text-3xl md:text-4xl lg:text-5xl">
              Select the Ideal Plan
            </h1>
            <p className="block antialiased font-sans font-normal leading-relaxed text-white/70 text-base md:text-lg mt-4 lg:text-xl">
              Pick the plan that best fits your business needs. <br /> You can start with a free plan and upgrade to
              premium as you grow.
            </p>
          </div>
        </div>
      </div>

      {/* Update the section wrapper */}
      <section className="relative p-4 bg-gray-100">
        <div className="md:flex items-center justify-center mb-12 -mt-10">
          <div className="overflow-hidden block w-full md:w-96">
            <nav>
              <ul
                role="tablist"
                className="flex relative rounded-lg p-1 flex-row h-12 border border-white/25 bg-opacity-100 bg-gray-300"
              >
                <li
                  role="tab"
                  className={`flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base leading-relaxed select-none cursor-pointer font-medium`}
                  data-value="monthly"
                  onClick={() => handleTabClick("monthly")}
                >
                  <div className="z-20 text-inherit">Monthly</div>
                  {activeTab === "monthly" && (
                    <div className="absolute inset-0 z-10 h-full bg-white rounded-md shadow" style={{ opacity: 1 }} />
                  )}
                </li>
                <li
                  role="tab"
                  className={`flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base leading-relaxed select-none cursor-pointer font-medium`}
                  data-value="yearly"
                  onClick={() => handleTabClick("yearly")}
                >
                  <div className="z-20 text-inherit">Yearly (save 20%)</div>
                  {activeTab === "yearly" && (
                    <div className="absolute inset-0 z-10 h-full bg-white rounded-md shadow" style={{ opacity: 1 }} />
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {/* Pro Plan */}
            <PricingCard
              title="pro"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-gray-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              }
              price={19}
              popular={false}
              features={proFeatures}
              buttonStyle={defaultButtonStyle}
              activeTab={activeTab}
            />

            {/* Business Plan */}
            <PricingCard
              title="business"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-gray-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"></path>
                </svg>
              }
              price={99}
              popular={true}
              features={businessFeatures}
              buttonStyle={primaryButtonStyle}
              activeTab={activeTab}
            />

            {/* Enterprise Plan */}
            <PricingCard
              title="enterprise"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-6 h-6 text-gray-900"
                >
                  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z"></path>
                  <path
                    fillRule="evenodd"
                    d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
                </svg>
              }
              price={999}
              popular={false}
              features={enterpriseFeatures}
              buttonStyle={defaultButtonStyle}
              activeTab={activeTab}
            />
          </div>


          {/* Add-Ons Section */}
          <div className="container max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              Add-Ons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Extra Messages */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Extra Messages</h3>
                    <p className="text-gray-600 mt-1">Get 1,000 extra messages every month.</p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">
                    $9/<span className="text-gray-500 text-base">month</span>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Add-On</button>
                </div>
              </div>

              {/* Extra AI Agent */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Extra AI Agent</h3>
                    <p className="text-gray-600 mt-1">Get an extra AI Agent.</p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                      <path
                        fillRule="evenodd"
                        d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">
                    $9/<span className="text-gray-500 text-base">month</span>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Add-On</button>
                </div>
              </div>

              {/* Remove Brand */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Remove Brand</h3>
                    <p className="text-gray-600 mt-1">Eliminate the GaliChat branding from widget.</p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">
                    $49/<span className="text-gray-500 text-base">month</span>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Add-On</button>
                </div>
              </div>

              {/* Custom Brand */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Custom Brand</h3>
                    <p className="text-gray-600 mt-1">Customize the GaliChat branding from widget.</p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">
                    $59/<span className="text-gray-500 text-base">month</span>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Add-On</button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="container max-w-6xl mx-auto mt-12 mb-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Secured Payment by Paddle with:
              </p>
              <div className="flex gap-4 items-center">
                <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="American Express" className="h-8" />
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Info: If you are a Registered Company inside the European Union you will be able to add your VAT ID
                after your Press "Buy Now"
              </p>
            </div>
          </div>

          {/* Free Demo Section */}
          <FreeDemo />
        </div>
      </section>












      <section class="px-8 py-20">
  <div class="container max-w-6xl mx-auto">
    <div class="mb-8">
      <h3 class="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 text-4xl !leading-snug">
        FAQ
      </h3>
      <p class="block antialiased font-sans text-base font-light leading-relaxed text-inherit lg:w-1/3">
        See what other people are asking. Don’t forget to try the AI Agent available on the website for more information about our tool.
      </p>
    </div>
    
    <div class="mb-10 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
      
      
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 mb-6">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
          What is Zen?
        </h4>
        <p class="block antialiased font-sans text-base leading-relaxed font-normal !text-gray-500">
          Zen is an advanced, smart AI Agent designed with the latest technology to interact with users by understanding their questions and providing accurate answers. It can comprehend and respond to inquiries in real-time, 24 hours a day, seven days a week.
        </p>
      </div>

      
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 mb-6">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
          Am I able to become a partner?
        </h4>
        <p class="block antialiased font-sans text-base leading-relaxed font-normal !text-gray-500">
          We offer an affiliate partnership program open to any individual or business with clients or users who own websites and can integrate ZenChat.
        </p>
      </div>

      
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 mb-6">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
          How do I add ZenChat to a website?
        </h4>
        <p class="block antialiased font-sans text-base leading-relaxed font-normal !text-gray-500">
          To add Gali Chat to your website, you need to create an account, customize your AI Agent, and then copy the code snippet provided to your website’s HTML. The AI Agent will then be live on your website, ready to assist your customers.
        </p>
      </div>

      
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 mb-6">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
          How can I track my earnings as a Partner?
        </h4>
        <p class="block antialiased font-sans text-base leading-relaxed font-normal !text-gray-500">
          After you sign in to our affiliate program, you will get access to your own dashboard, where you can track your performance and earnings.
        </p>
      </div>

      
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 mb-6">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
          When do I get paid?
        </h4>
        <p class="block antialiased font-sans text-base leading-relaxed font-normal !text-gray-500">
          Payment will be tracked and sent to all our affiliates every month.
        </p>
      </div>

      
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 mb-6">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
          How will you pay me?
        </h4>
        <p class="block antialiased font-sans text-base leading-relaxed font-normal !text-gray-500">
          We do the payments via PayPal, Wise, or bank transfer, based on your preference.
        </p>
      </div>

    </div>
  </div>
</section>




  {/* Newsletter Section */}
  <section className="relative h-[400px] rounded-2xl overflow-hidden mt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/placeholder.svg?height=400&width=1200')`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16">
          <h2 className="text-4xl font-bold text-white mb-4">Be the first who see the news</h2>
          <p className="text-gray-200 mb-8 max-w-xl">
            Subscribe to our newsletter and get the latest news about Gali. We promise not to spam you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Powered By */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <span className="text-white/70 text-sm">Powered by</span>
          <img src="/placeholder.svg?height=20&width=100" alt="There's an AI for that" className="h-5" />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default PricingPage

