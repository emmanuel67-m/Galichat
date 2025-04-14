import React from "react";
import Navbar from "../components/Navbarpage";
import Footer from "../components/Footerpage";

function Usecases() {
    return(
        <>
        <Navbar/>
        
        <section class="bg-neutral-100 py-12 pt-36 pb-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
    <h1 class="text-4xl font-extrabold text-neutral-900 mb-4">
      Use Cases - GaliChat AI
    </h1>
    <p class="text-lg text-neutral-500 mb-8 max-w-4xl">
      Whether you're selling electronics, fashion, home goods, or any other products, GaliChat helps you create and seamlessly integrate AI Agents into your website.
    </p>
    <div class="flex justify-start space-x-2">
      <a href="/chats" target="_blank" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed text-base rounded-full py-2.5 px-5 shadow-sm bg-neutral-900 border-neutral-900 text-neutral-50 hover:bg-neutral-900 hover:border-neutral-900">
         Get Started Now - Free
      </a>
    </div>
  </div>
</section>
{/* 

<section class="px-8 py-20 bg-neutral-100">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
    <h1 class="text-3xl font-extrabold text-neutral-900 mb-2">AI Agents For Every Business</h1>
    <p class="text-neutral-500 mb-6 max-w-4xl">Automate your online store with AI-powered shopping assistants that boost conversions and take care of customer interactions. Spanning across healthcare, finance, retail, and more, GaliChat's AI Agents provide customized solutions.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
         
      
        
          <a href="/usecases/ai-agent-electronics-shopify/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">

    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/electronics-shopify-store.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Electronics Stores
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Boost your Shopify electronics store with an AI agent that enhances customer experience, automates sales, and drives conversions effortlessly.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-agent-for-fashion-stores/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
    
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/fashion-shopify-store.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Fashion Stores
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Upgrade your fashion store with an AI agent that provides personalized shopping experiences, boosts engagement, and increases sales seamlessly.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-beauty-salons/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
   
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-beauty-salons.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Beauty Salons
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          nhance your beauty salon's customer service with an AI chatbot that books appointments, answers FAQs, and improves client satisfaction 24/7.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-book-authors/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
    
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-book-authors.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
   
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Book Authors
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Engage readers and promote your books with an AI Agent that answers queries, automates marketing, and helps build a loyal fanbase effortlessly.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-busy-entrepreneurs/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
 
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-jewelry-store-owners.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Busy Entrepreneurs
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Free up your time with an AI Agent that handles customer queries, schedules meetings, and automates tasks so you can focus on growing your business.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-coaches/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
   
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-coaches.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
   
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Coaches
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Streamline your coaching business with an AI Agent that schedules sessions, nurtures leads, and delivers personalized engagement for clients.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-course-creators/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
    
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-course-creators.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Course Creators
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Increase enrollments and engage students with an AI Agent that provides instant support, answers queries, and automates your online course business.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-jewelry-store-owners/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
    
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-jewelry-store-owners.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
   
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Jewelry Store Owners
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Sell more jewelry with an AI Agent that assists customers, recommends products, and enhances shopping experiences with automated responses.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-lawyers/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
   
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-lawyers.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Lawyers
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Automate client interactions with an AI Agent that schedules consultations, answers legal FAQs, and enhances your law firm's efficiency.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-marketing/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
    
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-jewelry-store-owners.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Marketing
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Boost your marketing strategy with an AI Agent that engages customers, automates lead generation, and provides 24/7 support for your business.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-musicians/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
    
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-musicians.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Musicians
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Grow your fanbase with an AI Agent that interacts with followers, recommends your events, and keeps fans updated with your latest music and events.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-podcasters/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
   
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-podcasters.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
    
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Podcasters
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Engage listeners with an AI Agent that promotes episodes, answers fan questions, and helps monetize your podcast with smart automation.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
        
          <a href="/usecases/ai-chatbot-web3-enthusiasts/">
  <div class="relative flex flex-col bg-white bg-clip-border text-neutral-700 w-full border border-neutral-200 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
    
    <div class="relative h-48 overflow-hidden rounded-md mb-4 m-2.5 bg-neutral-900 flex items-center justify-center" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/gali/solutions/thumbs/ai-agent-web3-enthusiasts.jpg'); background-size: cover; background-position: center;">
     
    </div>
    
   
    <div class="p-4 pt-0">
      <h5 class="text-neutral-900 text-xl font-bold">
        AI Agent for Web 3.0 Enthusiasts
      </h5>
      <p class="block antialiased font-sans font-base text-inherit mt-2 text-sm">
        <span class="font-normal text-neutral-500">
          Stay ahead in Web3 with an AI Agent that educates users, automates NFT sales, and enhances blockchain community engagement effortlessly.
        </span>
      </p>
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border text-neutral-900 hover:opacity-75 focus:ring focus:ring-neutral-300 active:opacity-[0.85] border-neutral-300 mt-6 capitalize rounded-md" type="button">
        Explore AI Agent        
      </button>
    </div>
  </div>
</a>

         
      
         
      
         
      
         
      
         
      
         
      
    </div>
  </div>
</section>
 */}














        








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
          What is Gali?
        </h4>
        <p class="block antialiased font-sans text-base leading-relaxed font-normal !text-gray-500">
          Gali is an advanced, smart AI Agent designed with the latest technology to interact with users by understanding their questions and providing accurate answers. It can comprehend and respond to inquiries in real-time, 24 hours a day, seven days a week.
        </p>
      </div>

      
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 mb-6">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
          Am I able to become a partner?
        </h4>
        <p class="block antialiased font-sans text-base leading-relaxed font-normal !text-gray-500">
          We offer an affiliate partnership program open to any individual or business with clients or users who own websites and can integrate GaliChat.
        </p>
      </div>

      
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 mb-6">
        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 pb-6">
          How do I add GaliChat to a website?
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
        <Footer/>
        </>
    )
}
export default Usecases