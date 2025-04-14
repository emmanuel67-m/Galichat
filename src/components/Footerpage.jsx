function Footer() {
    const footerLinks = {
      usecases: [
        { title: "Book Authors", href: "/bookauthors" },
        { title: "Coaches", href: "/coachespage" },
        { title: "Course Creators", href: "/coursecreatorspage" },
        { title: "Entrepreneurs", href: "/entrepreneurspage" },
        { title: "Musicians", href: "/musicianspage" },
        { title: "Podcasters", href: "/podcasterspage" },
        { title: "Web 3.0 Enthusiasts", href: "/web3.0enthusiastspage" },
        { title: "Jewelry Store Owners", href: "/jewelrystoreowners" },
        { title: "Beauty Salons", href: "/beautysalonspage" },
        { title: "Marketing", href: "/marketingpage" },
        { title: "Lawyers", href: "/lawyerspage" },
      ],
      gettingStarted: [
        { title: "How to Start", href: "/howtostart" },
        { title: "How to Train", href: "/howtostart" },
        { title: "How to Install", href: "/howtostart" },
        { title: "Become a partner", href: "/becomeapartner" },
      ],
      application: [
        { title: "Pricing", href: "/pricing" },
        { title: "Dashboard", href: "/signin" },
        { title: "Free Demo", href: "/signin" },
      ],
      legal: [
        { title: "Privacy Policy", href: "/privacypolicy" },
        { title: "Terms & Conditions", href: "#" },
        { title: "Cookies Policy", href: "#" },
        { title: "GDPR Definitions", href: "#" },
        { title: "Contact Us", href: "#" },
      ],
      news: [
        { title: "Website AI Agent", href: "#" },
        { title: "Design Examples", href: "#" },
        { title: "AI Agent vs Live Chat", href: "#" },
        { title: "AI Agent vs Conversational AI", href: "#" },
        { title: "How to Build AI Agent", href: "#" },
      ],
    }
  
    return (
      <footer className="bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold">GaliChat</h2>
              <p className="mt-4 text-gray-600 text-sm">
                Your 24/7 AI Support Assistant that helps you to grow your business.
              </p>
              <p className="mt-4 text-gray-500 text-xs">All rights reserved. Copyright © 2025 GaliChat</p>
            </div>
  
            {/* Usecases Section */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Usecases</h3>
              <ul className="space-y-2">
                {footerLinks.usecases.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Getting Started Section */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Getting Started</h3>
              <ul className="space-y-2">
                {footerLinks.gettingStarted.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Application Section */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Application</h3>
              <ul className="space-y-2">
                {footerLinks.application.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Legal Section */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* News Section */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">News</h3>
              <ul className="space-y-2">
                {footerLinks.news.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  