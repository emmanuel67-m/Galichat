import React from 'react';

const SignInPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center min-h-screen">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 mx-auto md:w-7/12">
        <div className="xl:w-full xl:max-2xl:max-w-md xl:mx-auto">
          <a href="/">
            <div className="flex items-center font-medium text-blue-gray-500">
              
              Homepage
            </div>
          </a>
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-3xl mt-16">Sign In</h2>
          <p className="mt-2 text-sm text-blue-gray-500 mb-8">Enter your email address to get started</p>
          <button className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg border text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] w-full normal-case text-xs justify-center border-gray-300 shadow-sm flex items-center" type="button">
            
            Sign in with Google
          </button>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-blue-gray-500">Or</span>
            </div>
          </div>
          <div className="space-y-3">
            <form>
              <p className="block antialiased font-sans text-blue-gray-900 text-sm font-semibold mb-2">Email Address</p>
              <div className="relative w-full min-w-[200px] h-10">
                <input placeholder="Your email address" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border-t-blue-gray-200 placeholder:text-blue-gray-300" />
              </div>
              <button type="submit" className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mt-5 w-full normal-case">
                Sign In
              </button>
            </form>
            <div className="!mt-8 text-center">
              <p className="block antialiased font-sans text-blue-gray-500 text-sm font-medium mb-2 cursor-pointer false">
                Don't have an account? <span className="font-bold underline">Create Account</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 h-full hidden lg:block">
        <div className="flex h-full rounded-xl" style={{ backgroundImage: "url('https://github.com/creativetimofficial/public-assets/blob/master/gali/hero-gali.jpg?raw=true')" }}>
          <div className="flex flex-col items-center justify-end">
            <h1 className="text-3xl font-bold mb-3 text-white">Welcome to the future</h1>
            <p className="block antialiased font-sans font-medium text-white text-lg">Your Ultimate 24/7 AI-Powered Customer Support Assistant</p>
            <p className="block antialiased font-sans mt-7 text-6xl font-bold text-white">ZenChat</p>
            <div className="group bg-gray-900/70 border w-fill mt-40 relative m-4 p-4 pr-1 py-1 rounded-xl lg:p-6 border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="font-display text-lg text-amber-400">★★★★★</div>
                  <div className="font-display text-sm mt-4 text-white">"It's exactly what I was looking for. It engages our site visitors with the right answers and collects their information, so we get more leads."</div>
                  <div className="font-display text-sm mt-6 flex flex-row items-center">
                    <div>
                      <div className="font-semibold mb-1 text-white">Robert Tatoi</div>
                      <div className="text-white">CEO @PlayVertical</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
