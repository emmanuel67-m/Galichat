import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from '../components/Navbarpage';
import Footer from '../components/Footerpage';


function Home() {
  return (
    <div className="max-w-full mx-auto ">
      <Navbar/>
      <section className="relative flex items-center justify-center text-center min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/public/hero-gali.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Tagline Pill */}
          <div className="relative items-center font-sans font-bold whitespace-nowrap border py-1.5 px-3 text-xs normal-case inline-flex rounded-full border-gray-300 bg-gray-900/10 text-white mb-4 select-text">
            Custom AI Agents trained on your data
          </div>

          {/* Main Headings */}
          <div className="space-y-4 mb-8">
            <h1 className="block antialiased tracking-normal font-sans leading-tight text-white font-extrabold text-3xl md:text-4xl lg:text-5xl">
              Support. Engage. Sell.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              AI Agents that Grow Your Business
            </h2>
          </div>

          {/* Subheading */}
          <p className="block antialiased font-sans font-normal leading-relaxed  md:px-32 lg:px-52 text-white text-base md:text-lg lg:text-xl">
            Power your business growth with AI Agents that deliver flawless customer experiences and lead generation.
            Make your customers happy while saving money.
          </p>

          <a 
             href="/signin"
             className="align-middle mt-24 select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none normal-case rounded-full"
           >
             Create AI Agent
          </a>



          {/* Dashboard & Chat Interface */}
          <div className=" relative w-full max-w-6xl mx-auto mt-20">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/dashboard.png"
                alt="AI Chat Dashboard Interface"
                className="absolute z-10 rounded-xl -translate-x-1/2 left-1/2 -mt-12 w-full max-w-[740px] lg:w-1/2 shadow-2xl"
              />
              {/* Center Image - Responsive Positioning */}
              <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/chat.png"
                alt="Center Image"
                className="absolute z-20 -translate-x-1/2 left-1/2 mt-2 md:mt-12 rounded-lg w-44 md:w-72 shadow-xl"
              />
            </div>
          </div>

          {/* Stats Grid - Responsive Layout */}
          <div className="grid gap-y-10 gap-x-10 md:grid-cols-2 lg:grid-cols-4 mt-120">
            {[
              { icon: '$', percentage: '50%', title: 'Support Cost Reduction', description: 'Reduce up to 50% of your customer support costs per agent.' },
              { icon: '⏱️', percentage: '3x', title: 'Faster Response', description: 'Our AI Agent responds 3x faster than a human.' },
              { icon: '📄', percentage: '100%', title: 'Accuracy', description: 'Our AI Agent has 100% accuracy in answering questions.' },
              { icon: '💬', percentage: '24/7', title: 'Support Assistant', description: 'Compared with standard support, the AI Agent is available 24/7 for your clients.' }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-2 sm:p-4">
                <div className="flex justify-center mb-2 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-base sm:text-xl">{stat.icon}</span>
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{stat.percentage}</h3>
                <h4 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2">{stat.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 text-center">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="container mx-auto py-8">
  
  <div class="mb-10 text-center lg:mb-10">
    <p class="block antialiased font-sans mb-2 font-bold text-lg text-gray-500">No Code AI Agent</p>
    <p class="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-4 font-extrabold lg:!text-4xl">Setup in just 3 minutes</p>
  </div>

  
  <div class="lg:w-[60rem] block md:flex gap-8 mx-auto">
  
    <div class="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-gray-50">
      <div class="p-6">
        <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">Step 1</h5>
        <p class="block antialiased font-sans text-base font-normal leading-7 !text-gray-600 mb-4">Add your website link or your files.</p>
        <img class="w-72" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/step-1.png" alt="Step 1"></img>
      </div>
    </div>


    <div class="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-gray-50">
      <div class="p-6">
        <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">Step 2</h5>
        <p class="block antialiased font-sans text-base font-normal leading-7 !text-gray-600 mb-4">Train the AI Agent on your own data.</p>
        <img class="w-72" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/step-2.png" alt="Step 2"></img>
      </div>
    </div>

    
    <div class="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-gray-50">
      <div class="p-6">
        <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">Step 3</h5>
        <p class="block antialiased font-sans text-base font-normal leading-7 !text-gray-600 mb-4">Deploy it on your website. The AI Agent is ready!</p>
        <img class="w-72" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/step-3.png" alt="Step 3"></img>
      </div>
    </div>
  </div>


  <div class="mt-8 text-center">
    <a class="mt-5 w-full normal-case" href="/signin">
      <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none normal-case rounded-full" type="button">
        Create AI Agent
      </button>
    </a>
    <span class="text-gray-500 text-sm block mt-3">No credit card required</span>
  </div>
</section>


         {/* Every Industry section */}
         <section class="lg:py-28 py-10 px-8">
          <div className="container mx-auto mb-24 text-center">
        <h3 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blue-gray-900 mb-4 font-extrabold lg:!text-4xl">
          Adaptable AI ChatGPT for          
          
          <span className="text-blue-500 ">    Every Industry</span>
        </h3>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto max-w-xl">
        Our easy-to-use AI Agent can be easily implemented by businesses across all sectors.
        </p>
        </div>
        <div className="flex-col lg:flex-row grid grid-cols-2 lg:grid-cols-8 justify-center gap-3 relative">
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>🩺</span> Healthcare
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>💰</span> Finance
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>🎓</span> Education
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>🛒</span> Retail
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>🏨</span> Hospitality
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>🏠</span> Real Estate
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>📞</span> Consulting
          </button>

          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer ">
            <span>🚗</span> Automotive
          </button>
          
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row justify-center gap-3 mt-4">
        
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>🎬</span> Entertainment
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>🍔</span> Food & Beverage
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>💪</span> Fitness & Wellness
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer">
            <span>🛍️</span> Ecommerce
          </button>
        </div>
      </section>

      <section class="py-16 px-4 sm:px-48 lg:px-28">
  <div class="mb-24">
    <p class="block antialiased font-sans font-semibold text-gray-900 text-lg mb-2">Gali Features</p>
    <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3] mb-2 font-extrabold text-gray-900">
      Help Your Customers Through AI
    </h2>
    <p class="block antialiased font-sans text-xl font-normal leading-relaxed max-w-3xl text-gray-600">
      It's like having your own custom ChatGPT trained for your website and with a sleeker UI.
    </p>
    <div class="mt-6 mb-6 text-left">
      <div class="flex items-center gap-4">
        <a class="normal-case" href="/signin">
          <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none normal-case rounded-full" type="button">
            Create AI Agent
          </button>
        </a>
        <span class="text-gray-500 text-sm">No credit card required</span>
      </div>
    </div>
  </div>

  <div class="mt-12 grid max-w-6xl grid-cols-2 lg:gap-y-16 gap-y-4 gap-x-4 md:grid-cols-4">
  <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
    <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900 grid items-center justify-center border border-gray-300 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
        <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" ></path>
      </svg>
    </div>
    <div class="p-6 px-4">
      <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-black font-bold mb-2">Text, PDFs, Links Training</h6>
      <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">Our AI Agents are trained on a variety of formats.</p>
    </div>
  </div>
  
  <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
    <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900 grid items-center justify-center border border-gray-300 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 to 0-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"></path>
      </svg>
    </div>
    <div class="p-6 px-4">
      <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-black font-bold mb-2">24/7 Custom Support</h6>
      <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">No more waiting for a human to respond to your customers.</p>
    </div>
  </div>
  
  <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
    <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900 grid items-center justify-center border border-gray-300 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
        <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <div class="p-6 px-4">
      <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-black font-bold mb-2">Lead Generation</h6>
      <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">Our AI Agents can help you generate leads.</p>
    </div>
  </div>
  
  <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
    <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900 grid items-center justify-center border border-gray-300 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
        <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z"></path>
        <path fill-rule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" ></path>
      </svg>
    </div>
    <div class="p-6 px-4">
      <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-black font-bold mb-2">AI Trained on your content</h6>
      <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">The models are trained on your content for accurate answers.</p>
    </div>
  </div>
  

  <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
    <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900 grid items-center justify-center border border-gray-300 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
        <path fill-rule="evenodd" d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z"></path>
      </svg>
    </div>
    <div class="p-6 px-4">
      <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-black font-bold mb-2">Privacy Focused</h6>
      <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">We don't save any of your customer visiting data.</p>
    </div>
  </div>

  <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
  <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900 grid items-center justify-center border border-gray-300 rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
      <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path>
    </svg>
  </div>
  <div class="p-6 px-4">
    <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-black font-bold mb-2">Custom Style</h6>
    <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">Customize the AI Agent to match your website.</p>
  </div>
</div>

    <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
  <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900 grid items-center justify-center border border-gray-300 rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd"></path>
    </svg>
  </div>
  <div class="p-6 px-4">
    <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-black font-bold mb-2">5 Minutes Setup</h6>
    <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">Get your AI Agent up and running in 5 minutes.</p>
  </div>


  </div>
  <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
  <div class="relative bg-clip-border mx-4 overflow-hidden bg-white -mt-6 h-12 w-12 text-gray-900 grid items-center justify-center border border-gray-300 rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"></path>
    </svg>
  </div>
  <div class="p-6 px-4">
    <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-black font-bold mb-2">Accurate Answers</h6>
    <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500 mb-2">Get the right answers to your customers.</p>
  </div>
</div>

</div>

</section>


      <section class="container mx-auto pt-8 px-4">
        <div class="md:flex justify-between">
          <div class="flex items-center justify-center">
            <div class="flex md:flex-col md:mr-8 items-center">
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 md:mb-12 text-2xl" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇸🇦</span>
              </button>
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 text-2xl" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇮🇳</span>
              </button>
            </div>
            <div class="flex md:flex-col items-center">
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 md:mb-12 text-2xl" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇺🇸</span>
              </button>
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 md:mb-12 text-2xl" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇩🇪</span>
              </button>
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 text-2xl" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇫🇷</span>
              </button>
            </div>
          </div>
          <div class="text-center mt-12 py-12 md:py-32 bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/worldmap.png')] bg-contain bg-center bg-no-repeat">
            <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg text-sm border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 mb-4" type="button">
              <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.4 12.5L22.175 12.8L22.4 13.1L26.48 18.54C26.6026 18.7035 26.6773 18.8978 26.6956 19.1013C26.714 19.3047 26.6753 19.5093 26.5839 19.692C26.4926 19.8747 26.3521 20.0284 26.1784 20.1358C26.0046 20.2432 25.8043 20.3 25.6 20.3H9.60005C9.04309 20.3 8.50895 20.5213 8.11512 20.9151C7.7213 21.309 7.50005 21.8431 7.50005 22.4V27.2C7.50005 27.4918 7.38416 27.7716 7.17787 27.9779C6.97158 28.1842 6.69179 28.3 6.40005 28.3C6.10831 28.3 5.82852 28.1842 5.62223 27.9779C5.41594 27.7716 5.30005 27.4918 5.30005 27.2V9.60005C5.30005 8.45962 5.75308 7.3659 6.55949 6.55949C7.3659 5.75308 8.45962 5.30005 9.60005 5.30005H25.6C25.8043 5.30005 26.0046 5.35694 26.1784 5.46433C26.3521 5.57173 26.4926 5.7254 26.5839 5.90811C26.6753 6.09083 26.714 6.29538 26.6956 6.49884C26.6773 6.70229 26.6026 6.89662 26.48 7.06005L22.4 12.5Z" fill="#212121" stroke="#212121"></path>
                </svg>
              </span>
            </button>
            <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3] mb-4 font-extrabold text-gray-900">50+ Languages</h2>
            <p class="block antialiased font-sans leading-relaxed mx-auto font-bold mt-2 !text-2xl max-w-2xl text-gray-800">Whether your customers are from USA, Spain, Germany, France or anywhere, our AI Agent speaks their language.</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="flex md:flex-col items-center md:mr-8">
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 text-2xl md:mb-12" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇪🇸</span>
              </button>
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 text-2xl md:mb-12" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇷🇺</span>
              </button>
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 text-2xl" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇮🇹</span>
              </button>
            </div>
            <div class="flex md:flex-col items-center">
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 text-2xl md:mb-12" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇧🇷</span>
              </button>
              <button disabled="" class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] p-6 !opacity-100 border-gray-300 text-2xl md:mb-12" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">🇯🇵</span>
              </button>
            </div>
          </div>
        </div>
        <div class="text-center mt-10 mb-10">
          <a class="normal-case" href="/signin">
            <button
             onClick={() => window.location.href = "/signin"}
            class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none normal-case rounded-full" type="button">
              Create AI Agent
            </button>
          </a>
          <span class="text-gray-500 text-sm block mt-3">No credit card required</span>
        </div>
      </section>


      <section class="container mx-auto pt-8 px-4">
  <div class="mb-8 text-center pt-12 bg-gray-100 border border-gray-300 rounded-2xl shadow-sm">
    <div class="relative items-center font-sans font-bold whitespace-nowrap select-none py-1.5 px-3 text-xs rounded-lg bg-white border border-gray-300 text-gray-900 capitalize inline-block mb-2" >
      <span class="">Sources</span>
    </div>
    <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blue-gray-900 font-extrabold">
      Easily Import Your Data
    </h2>
    <p class="block antialiased font-sans font-light text-blue-gray-900 mx-auto mt-2 mb-4 text-lg max-w-2xl">
      You need only 3 minutes to import your data.
    </p>
    <div class="relative w-11/12 md:w-2/3 mx-auto overflow-hidden md:overflow-visible">
      <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/easily-import.png" alt="import data" class="mx-auto"></img>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  
    <div class="relative flex flex-col bg-clip-border text-gray-700 mb-8 text-center pt-6 bg-gray-100 border border-gray-300 rounded-2xl shadow-sm">
      <div class="p-6 md:px-12">
        <div class="relative items-center font-sans font-bold whitespace-nowrap select-none py-1.5 px-3 text-xs rounded-lg bg-white border border-gray-300 text-gray-900 capitalize inline-block mb-2" >
          <span class="">Based on AI</span>
        </div>
        <h3 class="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 font-bold">
          Train Advanced GPT
        </h3>
        <p class="block antialiased font-sans font-light mx-auto mt-2 mb-8 text-lg text-gray-600 max-w-lg">
          Gali Chat is based on the most advanced AI and NLP technologies available.
        </p>
        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/train-chat.png" alt="train advanced GPT" class="mx-auto mt-8"></img>
      </div>
    </div>

    
    <div class="relative flex flex-col bg-clip-border text-gray-700 mb-8 text-center pt-6 bg-gray-100 border border-gray-300 rounded-2xl shadow-sm">
      <div class="p-6 md:px-12">
        <div class="relative items-center font-sans font-bold whitespace-nowrap select-none py-1.5 px-3 text-xs rounded-lg bg-white border border-gray-300 text-gray-900 capitalize inline-block mb-2" >
          <span class="">Visual look</span>
        </div>
        <h3 class="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 font-bold">
          Customize and Match Your Brand
        </h3>
        <p class="block antialiased font-sans font-light mx-auto mt-2 mb-8 text-lg text-gray-600 max-w-lg">
          A AI Agent that is distinctly branded can differentiate your customer service from competitors.
        </p>
        <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/customize-chat.png" alt="customize chat" class="mx-auto mt-8"></img>
      </div>
    </div>
  </div>
</section>



<div class="container mx-auto pt-8 px-4">
  <div class="relative flex flex-col bg-clip-border text-gray-700 bg-gray-200 border border-gray-300 rounded-2xl shadow-sm">
    <div class="p-6">
      <div class="md:flex items-center">
        <div class="block my-auto pl-6">
          <div class="relative items-center font-sans font-bold whitespace-nowrap select-none py-1.5 px-3 text-xs rounded-lg bg-white border border-gray-300 text-gray-900 capitalize inline-block mb-4">
            <span>Ready to use</span>
          </div>

          <h3 class="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 mb-4 font-bold">
            Add it to Your Website
          </h3>

          <p class="block antialiased font-sans text-base leading-relaxed text-gray-600 font-medium">
            No need for coding skills or technical support from your team. With just a few clicks, our AI Agent is ready!
          </p>

          <div class="mt-6 text-left">
            <div class="flex items-center gap-4">
              <a class="normal-case" href="/signin">
                <button class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none normal-case rounded-full" type="button">
                  Create AI Agent
                </button>
              </a>
              <span class="text-gray-500 text-sm">No credit card required</span>
            </div>
          </div>
        </div>

        <div class="ml-auto">
          <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/add-chat.png" alt="Add chat image" />
        </div>
      </div>
    </div>
  </div>
</div>



     {/* Testimonials section */}
<section className="py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-sm text-gray-600 mb-2">Gali Testimonials</div>
    <h2 className="text-4xl font-bold mb-4">What our clients say</h2>
    <p className="text-gray-600 mb-12">See what other people are thinking about our solution.</p>

    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex text-yellow-400 mb-4">★★★★★</div>
        <p className="text-gray-700 mb-6">
          "It doesn't just feel like a tool; it feels like an extension of our team. The feedback from our customers
          has been overwhelmingly positive."
        </p>
        <div>
          <p className="font-semibold">Taqi Ahmed</p>
          <p className="text-gray-500">Customer Support @CreativeTim</p>
        </div>
      </div>

      <div>
        <div className="flex text-yellow-400 mb-4">★★★★★</div>
        <p className="text-gray-700 mb-6">
          "It's exactly what I was looking for. It engages our site visitors with the right answers and collects
          their information, so we get more leads."
        </p>
        <div>
          <p className="font-semibold">Adam Kempinski</p>
          <p className="text-gray-500">Customer Success @MaterialTailwind</p>
        </div>
      </div>

      <div>
        <div className="flex text-yellow-400 mb-4">★★★★★</div>
        <p className="text-gray-700 mb-6">
          "This AI Agent offers support whenever the clients need it, making our service truly 24/7. It's a
          game-changer, as we don't have a big team to handle all the requests."
        </p>
        <div>
          <p className="font-semibold">Tina Feraro</p>
          <p className="text-gray-500">Chief Designer @IRA Design</p>
        </div>
      </div>
    </div>

    <div className="mt-12">
      <button className="bg-black text-white px-6 py-3 rounded-full font-medium">Create AI Agent</button>
      <span className="ml-4 text-gray-500">No credit card required</span>
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
</section >
<section className="px-4 py-20">
  <div className="container mx-auto">
    <div className="flex flex-col bg-clip-border rounded-2xl text-gray-700 shadow-md relative overflow-hidden bg-[url('https://github.com/creativetimofficial/public-assets/blob/master/gali/hero-gali.jpg?raw=true')] bg-cover bg-center">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 max-w-2xl">
        <h3 className="text-3xl font-semibold text-white mb-2">
          Be the first who see the news
        </h3>
        <p className="text-white/80 text-base font-light">
          Subscribe to our newsletter and get the latest news about Gali. We promise not to spam you.
        </p>

        {/* Form */}
        <form id="sib-form" className="mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              name="EMAIL"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-gray-900 rounded-lg font-medium shadow-md hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  {/* Powered by badge */}
  <div className="flex justify-center mt-8">
    <a href="https://theresanaiforthat.com/ai/galichat/?ref=featured&v=1267077" target="_blank" rel="nofollow">
      <img
        src="https://media.theresanaiforthat.com/featured1.png"
        width="200"
        style={{ margin: '0 auto' }}
        alt="There's an AI for that"
      />
    </a>
  </div>
</section>





    <Footer/>
    </div>
  )
}

export default Home

