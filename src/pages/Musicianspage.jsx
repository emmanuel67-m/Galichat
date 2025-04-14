import React from "react";
import Navbar from "../components/Navbarpage";
import Footer from "../components/Footerpage";

function Discoverpage() {
    return(
        <>
        <Navbar/>
        
        <header class="h-full flex flex-col relative min-h-screen bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/shopify-cover-2.jpg')]  bg-top bg-cover bg-no-repeat">
  <div class="w-full h-full flex-grow flex flex-col">

    <div class="container h-full relative flex-grow flex justify-center flex-col items-center text-center z-10 py-8 md:py-16 lg:py-24 mx-auto">
      <div data-open="true" data-shape="pill" class="relative inline-flex w-max items-center border font-sans font-medium rounded-md data-[shape=pill]:rounded-full text-sm p-0.5 shadow-sm bg-transparent border-neutral-100/50 text-white mt-16">
        <span class="font-sans text-current leading-none my-1 mx-2.5">Build an AI Agent Assistant</span>
      </div>
      <h1 class="font-sans antialiased font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mt-6 mb-4 !leading-[1.125]">
        Best AI Agent for Musicians</h1>
      <p class="font-sans antialiased text-base md:text-lg lg:text-xl text-white/80 font-normal max-w-4xl mx-auto">ZenChat is your 24/7 AI-powered assistant designed to help musicians automate interactions with fans, promote music releases, and boost engagement effortlessly.</p>
      <div class="text-center">
        <p class="font-sans antialiased text-base text-white mb-10"><strong>Try ZenChat</strong> now!</p>
        <a href="/chats" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-base rounded-full py-2.5 px-5 shadow-sm bg-neutral-900 border-neutral-900 text-neutral-50 hover:bg-neutral-900 hover:border-neutral-900">Create AI Agent
        </a>
        <a href="https://cal.com/alexandru-paduraru/15min" target="_blank" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-base rounded-full py-2.5 px-5 ml-4 shadow-sm hover:shadow-lg bg-white text-neutral-900 border-white hover:bg-neutral-100">
          Book a Call
        </a>
      </div>


    </div>
    <div class="mt-24 max-w-full md:w-full h-[550px] rounded-lg overflow-hidden mx-auto">
      <img class="absolute z-10 rounded-xl -translate-x-1/2 left-1/2 -mt-12 w-full max-w-[740px] lg:w-1/2 shadow-2xl" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-musicians.jpg" alt="AI agent for musicians"></img>

    </div>
  </div>
</header>


<section class="px-8 py-10 lg:py-28 relative bg-neutral-950">
  <div class="container mx-auto text-center">
    <div class="grid gap-y-10 gap-x-10 md:grid-cols-2 lg:grid-cols-4 mt-24">
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-neutral-700 shadow-none items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-7 w-7 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941">
          </path>
        </svg>
        <h4 class="block antialiased tracking-normal font-sans mb-2 mt-4 text-5xl text-white font-bold">40%</h4>
        <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug mb-2 font-semibold text-white">
          Increased Sales</h5>
        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed mb-2 font-normal text-white/60">
          Boost your revenue with AI-powered product recommendations and upselling.</h6>
      </div>
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-neutral-700 shadow-none items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-7 w-7 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">
          </path>
        </svg>
        <h4 class="block antialiased tracking-normal font-sans mb-2 mt-4 text-5xl text-white font-bold">95%</h4>
        <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug mb-2 font-semibold text-white">
          Customer Satisfaction</h5>
        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed mb-2 font-normal text-white/60">
          Provide real-time, personalized shopping help that gives customers exactly what they're looking for.</h6>
      </div>
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-neutral-700 shadow-none items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-7 w-7 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802">
          </path>
        </svg>
        <h4 class="block antialiased tracking-normal font-sans mb-2 mt-4 text-5xl text-white font-bold">100%</h4>
        <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug mb-2 font-semibold text-white">
          Multilingual Support</h5>
        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed mb-2 font-normal text-white/60">
          AI Agent that speaks your customers' languages, providing personalized support.</h6>
      </div>
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-neutral-700 shadow-none items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-7 w-7 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">
          </path>
        </svg>
        <h4 class="block antialiased tracking-normal font-sans mb-2 mt-4 text-5xl text-white font-bold">24/7</h4>
        <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug mb-2 font-semibold text-white">
          Shopping AI Agent</h5>
        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed mb-2 font-normal text-white/60">
          Guide customers to purchase decisions with AI-powered product recommendations anytime.</h6>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-neutral-950">
  <div class="container mx-auto mb-12 text-center">
    <p class="font-sans antialiased text-base text-white font-semibold">ZenChat Features</p>
    <h2 class="font-sans antialiased font-bold text-2xl md:text-3xl lg:text-4xl text-white my-4">
      Effortless AI Engagement for Musicians</h2>
    <p class="font-sans antialiased text-base md:text-lg max-w-2xl text-white/60 mx-auto">As a musician, connecting with fans and promoting your work can be time-consuming. ZenChat streamlines communication, helping you engage with your audience seamlessly.</p>
  </div>
  <div class="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
    <div class="w-full rounded-lg border shadow-sm overflow-hidden bg-background/10 border-transparent shadow-transparent text-center">
      <div class="h-max rounded m-2 w-full mx-0 mt-0 mb-4 text-center">
        <div class="rounded-lg border shadow-sm overflow-hidden border-white/30 shadow-neutral-950/25 w-12 h-12 grid place-items-center text-white mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z">
            </path>
          </svg>
        </div>
      </div>
      <div class="w-full h-max rounded p-0">
        <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-white mb-2">
          Seamless Integration</h6>
        <p class="font-sans antialiased text-base block text-white/60 max-w-sm mx-auto">No complicated setup—just add a simple script to your website, and ZenChat is ready to interact with your fans instantly.</p>
      </div>
    </div>
    <div class="w-full rounded-lg border shadow-sm overflow-hidden bg-background/10 border-transparent shadow-transparent">
      <div class="h-max rounded m-2 w-full mx-0 mt-0 mb-4">
        <div class="rounded-lg border shadow-sm overflow-hidden border-white/30 shadow-neutral-950/25 w-12 h-12 grid place-items-center text-white mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
          </svg>
        </div>
      </div>
      <div class="w-full h-max rounded p-0 text-center">
        <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-white mb-2">
          Multiple Training Options</h6>
        <p class="font-sans antialiased text-base block text-white/60 max-w-sm mx-auto">Provide your website URL, upload album details, FAQs, and event information to ensure your AI assistant delivers precise and relevant responses.</p>
      </div>
    </div>
    <div class="w-full rounded-lg border shadow-sm overflow-hidden bg-background/10 border-transparent shadow-transparent">
      <div class="h-max rounded m-2 w-full mx-0 mt-0 mb-4">
        <div class="rounded-lg border shadow-sm overflow-hidden border-white/30 shadow-neutral-950/25 w-12 h-12 grid place-items-center text-white mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"></path>
          </svg>
        </div>
      </div>
      <div class="w-full h-max rounded p-0 text-center">
        <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-white mb-2">
          Personalized AI Experience</h6>
        <p class="font-sans antialiased text-base block text-white/60 max-w-sm mx-auto">Customize ZenChat’s tone and responses to match your brand, ensuring a natural and engaging fan experience.</p>
      </div>
    </div>
    <div class="w-full rounded-lg border shadow-sm overflow-hidden bg-background/10 border-transparent shadow-transparent">
      <div class="h-max rounded m-2 w-full mx-0 mt-0 mb-4">
        <div class="rounded-lg border shadow-sm overflow-hidden border-white/30 shadow-neutral-950/25 w-12 h-12 grid place-items-center text-white mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path>
          </svg>
        </div>
      </div>
      <div class="w-full h-max rounded p-0 text-center">
        <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-white mb-2">
          Real-Time Assistance</h6>
        <p class="font-sans antialiased text-base block text-white/60 max-w-sm mx-auto">Instantly share tour dates, new music releases, or exclusive content with fans, keeping them engaged and excited.</p>
      </div>
</div></div></section>


<section class="py-16 space-y-16 bg-neutral-100">
  <div class="container mx-auto grid items-center gap-y-8 md:grid-cols-2">
    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/product-recommendations-fashion.jpg" alt="image" class="max-w-full h-auto rounded-lg object-center object-cover border border-neutral-200"></img>
    <div class="w-full items-center p-12">
      <div class="border shadow-sm overflow-hidden bg-neutral-900 border-neutral-950 shadow-neutral-950/25 w-12 h-12 text-white mb-8 rounded-lg grid place-items-center p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
        </svg>
      </div>
      <h3 class="font-sans antialiased font-extrabold text-2xl md:text-3xl lg:text-4xl text-neutral-950 mb-2">
        Smart AI Recommendations</h3>
      <p class="font-sans antialiased text-base md:text-lg mb-4 text-neutral-500">ZenChat goes beyond just answering questions—it actively engages website visitors and directs them to your music.
        </p><div class="flex flex-col space-y-4">
          <div class="flex items-start">
            <div class="rounded-full bg-neutral-800 p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="text-neutral-500"><span class="font-semibold text-neutral-900">Promote New Releases &amp; Events:</span> Keep fans updated about new music, concerts, virtual meet-and-greets, and album drops.</span>
          </div>
          <div class="flex items-start mb-4">
            <div class="rounded-full bg-neutral-800 p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="text-neutral-500"><span class="font-semibold text-neutral-900">Personalized Music Suggestions: </span> Recommend specific albums, singles, or playlists based on fan preferences.</span>
          </div>
          <div class="flex items-start mb-4">
            <div class="rounded-full bg-neutral-800 p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="text-neutral-500"><span class="font-semibold text-neutral-900">Exclusive Offers: </span> Share special discounts on merch, VIP tickets, or limited-edition releases, strengthening your connection with your audience.</span>
          </div>
        </div>
      <p></p>
      <div class="mb-6"></div>
      <a href="/chats" target="_blank" class="inline-flex items-center justify-center align-middle select-none font-sans font-bold text-center transition-all text-sm py-2.5 px-5 rounded-full bg-neutral-900 text-white shadow-md shadow-neutral-900/10 hover:shadow-lg hover:shadow-neutral-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none normal-case border-neutral-300">
        Create Free AI Agent
       </a>
    </div>
  </div>
  <div class="container mx-auto grid items-center gap-y-8 md:grid-cols-2">
    <div class="w-full items-center p-12 md:row-start-1 row-start-2">
      <div class="border shadow-sm overflow-hidden bg-neutral-950 border-neutral-950 shadow-neutral-950/25 w-12 h-12 text-white mb-8 rounded-lg grid place-items-center p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path>
        </svg>
      </div>
      <h3 class="font-sans antialiased font-extrabold text-2xl md:text-3xl lg:text-4xl text-neutral-950 mb-2">
        Grow Your Fanbase &amp; Increase Sales</h3>
      <p class="font-sans antialiased text-base md:text-lg mb-4 text-neutral-500">ZenChat helps you turn visitors into dedicated fans by engaging with them in real time, collecting valuable contact details, and guiding them toward supporting your music.
        </p><div class="flex flex-col space-y-4">
          <div class="flex items-start">
            <div class="rounded-full bg-neutral-800 p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="text-neutral-500"><span class="font-semibold text-neutral-900">Automated Fan Interaction: </span>Gather emails and social media profiles for newsletters, pre-sale alerts, and exclusive updates.</span>
          </div>
          <div class="flex items-start mb-4">
            <div class="rounded-full bg-neutral-800 p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="text-neutral-500"><span class="font-semibold text-neutral-900">Seamless Streaming &amp; Sales Integration:</span> Direct fans to your music on Spotify, Apple Music, Bandcamp, or your merch store.</span>
          </div>
          <div class="flex items-start mb-4">
            <div class="rounded-full bg-neutral-800 p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="text-neutral-500"><span class="font-semibold text-neutral-900">Targeted Promotions &amp; Upselling: </span> Suggest special bundles, concert tickets, or signed merchandise to boost sales.</span>
          </div>
        </div>
      <p></p>
      <div class="mb-6"></div>
      <a href="/chats" target="_blank" class="inline-flex items-center justify-center align-middle select-none font-sans font-bold text-center transition-all text-sm py-2.5 px-5 rounded-full bg-neutral-900 text-white shadow-md shadow-neutral-900/10 hover:shadow-lg hover:shadow-neutral-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none normal-case border-neutral-300">
        Create Free AI Agent
       </a>
    </div>
    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/sales-growth-fashion.jpg" alt="deliver instant answers" class="max-w-full h-auto rounded-lg object-center object-cover border border-neutral-200"></img>
  </div>
  <div class="container mx-auto grid items-center gap-y-8 md:grid-cols-2">
    <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/share-ai-agent.jpg" alt="community ai agent" class="max-w-full h-auto w-full rounded-lg object-center object-cover border border-neutral-200"></img>
    <div class="w-full items-center p-12">
      <div class="border shadow-sm overflow-hidden bg-neutral-900 border-neutral-950 shadow-neutral-950/25 w-12 h-12 text-white mb-8 rounded-lg grid place-items-center p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"></path>
        </svg>
      </div>
      <h3 class="font-sans antialiased font-extrabold text-2xl md:text-3xl lg:text-4xl text-neutral-950 mb-2">
        Share It Everywhere</h3>
      <p class="font-sans antialiased text-base md:text-lg mb-4 text-neutral-500">Make it easy for fans to connect with you—ZenChat provides a unique shareable link, allowing instant access to your AI assistant across multiple platforms.
        </p><div class="flex flex-col space-y-4">
          <div class="flex items-start">
            <div class="rounded-full bg-neutral-800 p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="text-neutral-500"><span class="font-semibold text-neutral-900">No App Installation Required:</span> Share your AI agent link on social media, your website, or newsletters for instant fan engagement.</span>
          </div>
          <div class="flex items-start mb-4">
            <div class="rounded-full bg-neutral-800 p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="text-neutral-500"><span class="font-semibold text-neutral-900">Community Engagement:</span> Post your ZenChat link in fan groups, forums, and event pages.</span>
          </div>

        </div>
      <p></p>
      <div class="mb-6"></div>
      <a href="/chats" target="_blank" class="inline-flex items-center justify-center align-middle select-none font-sans font-bold text-center transition-all text-sm py-2.5 px-5 rounded-full bg-neutral-900 text-white shadow-md shadow-neutral-900/10 hover:shadow-lg hover:shadow-neutral-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none normal-case border-neutral-300">
        Create Free AI Agent
       </a>
    </div>
  </div>
</section>

<section class="py-16 bg-neutral-100">
  <div class="h-max rounded p-6 w-full m-0 text-center">
    <h1 class="font-sans antialiased font-extrabold text-2xl md:text-3xl lg:text-4xl text-neutral-950 mb-1 mt-4">
      Quick &amp; Easy Setup</h1>
    <p class="font-sans antialiased text-base md:text-lg text-neutral-500 max-w-3xl [text-wrap:balance] mx-auto mb-4">
      
Simply enter your website URL, upload your music details and FAQs, personalize your AI assistant, and add a small code snippet to your site. That's it—quick, seamless, and hassle-free!</p>
  </div>

  <div class="mt-16 w-full md:w-8/12 h-[550px] rounded-lg overflow-hidden mx-auto">
    <iframe class="w-full h-full" src="https://www.youtube.com/embed/1y8rezjCfWQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
    </iframe>
  </div>
  
</section>

<section class="py-16 bg-neutral-100">
  <div class="container mx-auto">
    <div class="w-full rounded-lg border overflow-hidden bg-neutral-950 border-neutral-950 shadow-neutral-950/25 py-12 px-6 grid shadow-none justify-center text-center">
      <h2 class="font-sans antialiased font-bold text-xl md:text-2xl lg:text-3xl text-white">Need Help Getting Started?</h2>
      <p class="font-sans antialiased text-base text-white/60 mt-4 max-w-lg [text-wrap:_balance]">Schedule a free consultation with our development team to get personalized guidance and support for your implementation.</p>
      <div class="flex w-full items-center justify-center mt-10">
        <a href="https://cal.com/alexandru-paduraru/15min" target="_blank" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-base rounded-full py-2.5 px-5 ml-4 shadow-sm hover:shadow-lg bg-white text-neutral-900 border-white hover:bg-neutral-100">
          Book a Call
        </a>
      </div>
    </div>
  </div>
</section>


<section className="py-16 bg-neutral-100">
        <div className="h-max rounded p-6 w-full m-0 text-center">
          <h1 className="font-sans antialiased font-extrabold text-2xl md:text-3xl lg:text-4xl text-neutral-950 mb-1 mt-4">
            What ZenChat Users Are Saying
          </h1>
          <p className="font-sans antialiased text-base md:text-lg text-neutral-500 max-w-3xl [text-wrap:balance] mx-auto mb-10">
            See why our clients use ZenChat AI Agents to automate support, boost sales, and provide 24/7 customer
            service.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full rounded-lg border shadow-sm overflow-hidden border-transparent shadow-transparent bg-transparent">
            <div className="w-full h-max rounded p-0 text-center">
              <img
                src="https://v3.material-tailwind.com/woman-profile-2.jpg"
                alt="Sarah Chen image"
                className="w-full h-full mx-auto max-w-40 max-h-40 object-cover object-center rounded-xl mb-4"
              />
              <p className="font-sans antialiased text-base md:text-lg text-current font-semibold">Sarah Chen</p>
              <p className="font-sans antialiased text-base text-neutral-500">Fashion Boutique Owner</p>
              <blockquote className="font-sans antialiased text-base text-neutral-500 md:text-lg mt-4 mb-6 [text-wrap:_balance] mx-auto max-w-lg">
                "ZenChat AI Agent has transformed how we handle customer inquiries. It recommends perfect outfit
                combinations, answers sizing and other questions 24/7. Our customer satisfaction has improved
                significantly while reducing our support workload."
              </blockquote>
              <div className="inline-flex items-center [&_data-slot=icon]:w-5 [&_data-slot=icon]:h-5 [&_data-slot=icon]:text-inherit [&_data-slot=icon]:cursor-pointer text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg border shadow-sm overflow-hidden border-transparent shadow-transparent bg-transparent">
            <div className="w-full h-max rounded p-0 text-center">
              <img
                src="https://v3.material-tailwind.com/man-profile-1.jpg"
                alt="David Rodriguez image"
                className="w-full h-full mx-auto max-w-40 max-h-40 object-cover object-center rounded-xl mb-4"
              />
              <p className="font-sans antialiased text-base md:text-lg text-current font-semibold">David Rodriguez</p>
              <p className="font-sans antialiased text-base text-neutral-500">Electronics Store Owner</p>
              <blockquote className="font-sans antialiased text-base text-neutral-500 md:text-lg mt-4 mb-6 [text-wrap:_balance] mx-auto max-w-lg">
                "The AI Agent has become our best salesperson. It helps customers find the perfect gadgets based on
                their needs, compares features, and even suggests accessories. The best part? It works around the clock,
                ensuring we never miss a sale opportunity."
              </blockquote>
              <div className="inline-flex items-center [&_data-slot=icon]:w-5 [&_data-slot=icon]:h-5 [&_data-slot=icon]:text-inherit [&_data-slot=icon]:cursor-pointer text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg border shadow-sm overflow-hidden border-transparent shadow-transparent bg-transparent">
            <div className="w-full h-max rounded p-0 text-center">
              <img
                src="https://v3.material-tailwind.com/man-profile-2.jpg"
                alt="Michael Thompson image"
                className="w-full h-full mx-auto max-w-40 max-h-40 object-cover object-center rounded-xl mb-4"
              />
              <p className="font-sans antialiased text-base md:text-lg text-current font-semibold">Michael Thompson</p>
              <p className="font-sans antialiased text-base text-neutral-500">Home Decor Store Owner</p>
              <blockquote className="font-sans antialiased text-base text-neutral-500 md:text-lg mt-4 mb-6 [text-wrap:_balance] mx-auto max-w-lg">
                "Since implementing ZenChat AI Agent, our team has been freed from repetitive customer questions. The
                AI Agent handles product specifications and even helps customers design their spaces. It's like having
                an expert sales team that never sleeps!"
              </blockquote>
              <div className="inline-flex items-center [&_data-slot=icon]:w-5 [&_data-slot=icon]:h-5 [&_data-slot=icon]:text-inherit [&_data-slot=icon]:cursor-pointer text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="py-16 bg-neutral-100">
  <div class="container mx-auto "> 
    <div class="h-max rounded p-6 w-full m-0 text-center ">
      <h1 class="font-sans antialiased font-extrabold text-2xl md:text-3xl lg:text-4xl text-neutral-950 mb-1 mt-4">
        Explore Our AI Agent Collection
      </h1>
      <p class="font-sans antialiased text-base md:text-lg text-neutral-500 max-w-3xl [text-wrap:balance] mx-auto mb-10">
        Explore our diverse collection of AI Agents ready to assist you with any task, project, or need you have - from business to personal, simple to complex.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3">
      
      <a href="/discover/chat/social-media-chatbot-suib" target="_blank">
        <div class="relative flex flex-col bg-clip-border bg-white text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div class="h-[260px] overflow-hidden rounded-md mb-4 m-2.5">
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/ai-agents/social-media-ai-agent.jpg" class="w-full h-full object-cover object-center" alt="Social Media AI Agent"></img>
          </div>
          <div class="p-4 pt-0">
            <h5 class="block antialiased tracking-normal font-sans text-black mb-0 font-bold text-lg">
              Social Media AI Agent
            </h5>
            <p class="block antialiased font-sans font-light text-inherit mt-2 text-sm">
              <span class="font-normal text-neutral-500">by <b>arjun</b></span>
            </p>
            <p class="antialiased font-sans font-light text-inherit mt-1.5 text-sm flex items-center justify-between">
              <span class="font-normal text-neutral-500">Released on: 10/10/2024</span>
              <span class="font-normal text-neutral-500 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path>
                </svg>
                25
              </span>
            </p>
            <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
              Open AI Agent
            </button>
          </div>
        </div>
      </a>

      
      <a href="/discover/chat/seo-chatbot-8ixy" target="_blank">
        <div class="relative flex flex-col bg-clip-border bg-white text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div class="h-[260px] overflow-hidden rounded-md mb-4 m-2.5">
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/ai-agents/seo-ai-agent.jpg" class="w-full h-full object-cover object-center" alt="SEO AI Agent"></img>

          </div>
          <div class="p-4 pt-0">
            <h5 class="block antialiased tracking-normal font-sans text-black mb-0 font-bold text-lg">
              SEO AI Agent
            </h5>
            <p class="block antialiased font-sans font-light text-inherit mt-2 text-sm">
              <span class="font-normal text-neutral-500">by <b>arjun</b></span>
            </p>
            <p class="antialiased font-sans font-light text-inherit mt-1.5 text-sm flex items-center justify-between">
              <span class="font-normal text-neutral-500">Released on: 10/10/2024</span>
              <span class="font-normal text-neutral-500 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path>
                </svg>
                226
              </span>
            </p>
            <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
              Open AI Agent
            </button>
          </div>
        </div>
      </a>

      
      <a href="/discover/chat/personal-psychologis-sgwf" target="_blank">
        <div class="relative flex flex-col bg-clip-border bg-white text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div class="h-[260px] overflow-hidden rounded-md mb-4 m-2.5">
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/ai-agents/psychologist-ai-agent.jpg" class="w-full h-full object-cover object-center" alt="Psychologist AI Agent"></img>
          </div>
          <div class="p-4 pt-0">
            <h5 class="block antialiased tracking-normal font-sans text-black mb-0 font-bold text-lg">
              Psychologist AI Agent
            </h5>
            <p class="block antialiased font-sans font-light text-inherit mt-2 text-sm">
              <span class="font-normal text-neutral-500">by <b>RohanJ</b></span>
            </p>
            <p class="antialiased font-sans font-light text-inherit mt-1.5 text-sm flex items-center justify-between">
              <span class="font-normal text-neutral-500">Released on: 10/10/2024</span>
              <span class="font-normal text-neutral-500 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path>
                </svg>
                105
              </span>
            </p>
            <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
              Open AI Agent
            </button>
          </div>
        </div>
      </a>

      
      <a href="/discover/chat/marketing-chatbot-viio" target="_blank">
        <div class="relative flex flex-col bg-clip-border bg-white text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div class="h-[260px] overflow-hidden rounded-md mb-4 m-2.5">
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/ai-agents/marketing-ai-agent.jpg" class="w-full h-full object-cover object-center" alt="Marketing AI Agent"></img>
          </div>
          <div class="p-4 pt-0">
            <h5 class="block antialiased tracking-normal font-sans text-black mb-0 font-bold text-lg">
              Marketing AI Agent
            </h5>
            <p class="block antialiased font-sans font-light text-inherit mt-2 text-sm">
              <span class="font-normal text-neutral-500">by <b>arjun</b></span>
            </p>
            <p class="antialiased font-sans font-light text-inherit mt-1.5 text-sm flex items-center justify-between">
              <span class="font-normal text-neutral-500">Released on: 10/10/2024</span>
              <span class="font-normal text-neutral-500 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path>
                </svg>
                47
              </span>
            </p>
            <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
              Open AI Agent
            </button>
          </div>
        </div>
      </a>
    </div>

    <div class="flex justify-center mt-12">
      <a href="https://www.galichat.com/discover" target="_blank" class="align-middle select-none font-sans font-medium text-center capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-full bg-neutral-900 text-white shadow-md shadow-neutral-900/10 hover:shadow-lg hover:shadow-neutral-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
        Discover Other AI Agents
      </a>
    </div>
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
          To add Zen Chat to your website, you need to create an account, customize your AI Agent, and then copy the code snippet provided to your website’s HTML. The AI Agent will then be live on your website, ready to assist your customers.
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


        <Footer/>
        </>
    )
}
export default Discoverpage