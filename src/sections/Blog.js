// src/pages/Blog.js
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import {
  FaDownload,
  FaStar,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa"; 

export default function Blog() {
  useEffect(() => {
   
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 700,
      easing: "ease-in-out",
      scale: 0.95,
      reset: false,
      interval: 100, 
    });

    sr.reveal(".reveal");
  }, []);

  const marqueeStyles = `
    @keyframes scrollLeft {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `;

  const topLogos = [
    {
      name: "PayPal",
      sub: "CS/IT",
      logo: "https://files.codingninjas.com/paypal-32667.png",
    },
    {
      name: "Google",
      sub: "CS/IT",
      logo: "https://files.codingninjas.com/google-32675.png",
    },
    {
      name: "AWS",
      sub: "Service to product",
      logo: "https://files.codingninjas.com/amazon-web-service-32671.png",
    },
    {
      name: "Citibank",
      sub: "Non-CS/IT",
      logo: "https://files.codingninjas.com/citibank-32661.png",
    },
    {
      name: "Optum",
      sub: "Tier 2/3 college",
      logo: "https://files.codingninjas.com/optum-32664.png",
    },
    {
      name: "Uber",
      sub: "Tier 2/3 college",
      logo: "https://files.codingninjas.com/uber-32669.png",
    },
  ];

  return (
    <>
    
      <style>{marqueeStyles}</style>

      
      <div className="bg-white text-gray-900 py-10 px-4">
    
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between reveal">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Our Ninjas at top tech companies
          </h2>
          <a
            href="#download-placement-report"
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2"
          >
            <FaDownload size={16} />
            <span>Download placement report</span>
          </a>
        </div>

        <div className="max-w-6xl mx-auto mt-8 overflow-hidden relative h-28 reveal">
          <div
            className="
              absolute 
              flex 
              items-center 
              space-x-10 
              h-full 
              whitespace-nowrap 
              animate-[scrollLeft_30s_linear_infinite]
            "
          >
     
            {Array.from({ length: 2 }).map((_, loopIdx) => (
              <React.Fragment key={loopIdx}>
                {topLogos.map((company, idx) => (
                  <div
                    key={`${loopIdx}-${idx}`}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-md flex items-center justify-center bg-gray-50">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="object-contain w-12 h-12"
                      />
                    </div>
                    <p className="mt-2 font-semibold text-sm">{company.name}</p>
                    <p className="text-xs text-gray-500">{company.sub}</p>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-[#1c1c1c] text-white py-16 px-4">
        <div className="absolute top-0 bottom-0 left-12 w-[3px] hidden md:block">
          <div className="h-full border-l-2 border-dotted border-gray-500" />
        </div>

     
        <div className="max-w-6xl mx-auto pl-14 md:pl-20">
       
          <div className="flex items-center justify-between mb-6 reveal">
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "No tech to tech",
                "Service to product",
                "Tier 2/3 colleges",
                "Job Bootcamp",
                "Upskilling Courses",
                "All",
              ].map((filter, i) => (
                <span
                  key={i}
                  className="
                    bg-[#2b2b2b] 
                    px-3 
                    py-1 
                    rounded-full 
                    border 
                    border-gray-600 
                    hover:bg-orange-500 
                    hover:text-white 
                    transition-colors
                  "
                >
                  {filter}
                </span>
              ))}
            </div>
            <a
              href="#all-success-stories"
              className="text-sm text-orange-500 hover:text-orange-600 font-medium"
            >
              Read all success stories &gt;
            </a>
          </div>

     
          <h2 className="text-2xl md:text-3xl font-bold mb-14 text-left reveal">
            Stories from people like you
          </h2>

        
<div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mb-10 reveal">

  <div className="relative bg-[#2b2b2b] flex-1 p-8 rounded-md shadow-sm min-h-[280px]">
   
    <div className="
      absolute 
      left-1/2 
      top-[-32px] 
      -translate-x-1/2 
      w-16 
      h-16 
      bg-gradient-to-br 
      from-pink-500 
      to-purple-500 
      rounded-full
    " />

    <div className="mb-4 text-gray-300 mt-4">
      <p className="font-semibold text-lg">Twisam</p>
      <p className="text-sm mt-1">
        From non-tech to tech, thanks to Coding Ninjas.
        It helped me excel in projects.
        On completing my journey,
        giving clarity and optimization skill set.
      </p>
    </div>
    <div className="text-sm text-gray-500">
      <p>Role: Full Stack Developer</p>
      <p>Post: Coding Ninjas | Cognizant &amp; Infosys</p>
    </div>
  </div>

  
  <div className="relative bg-[#2b2b2b] flex-1 p-8 rounded-md shadow-sm min-h-[280px]">
 
    <div className="
      absolute 
      left-1/2 
      top-[-32px] 
      -translate-x-1/2 
      w-16 
      h-16 
      bg-gradient-to-br 
      from-blue-500 
      to-green-400 
      rounded-full
    " />

    <div className="mb-4 text-gray-300 mt-4">
      <p className="font-semibold text-lg">Oskar Lepate</p>
      <p className="text-sm mt-1">
        Chose Coding Ninjas for structured,
        high-quality learning.
        Got a boost up at Capgemini.
        Great mentors, quick TAs,
        and a supportive community.
        Best decision I made.
      </p>
    </div>
    <div className="text-sm text-gray-500">
      <p>Role: Developer</p>
      <p>Post: BNY Mellon | Capgemini</p>
    </div>
  </div>

 
  <div className="relative bg-[#2b2b2b] flex-1 p-8 rounded-md shadow-sm min-h-[280px]">

    <div className="
      absolute 
      left-1/2 
      top-[-32px] 
      -translate-x-1/2 
      w-16 
      h-16 
      bg-gradient-to-br 
      from-yellow-400 
      to-orange-500 
      rounded-full
    " />
    

    <div className="mb-4 text-gray-300 mt-4">
      <p className="font-semibold text-lg">Durgesh Chaubey</p>
      <p className="text-sm mt-1">
        Coding Ninjas exceeded my college experience.
        Now a developer in SDE-1.
        Exceptional training,
        interview readiness.
        Couldn’t be happier.
      </p>
    </div>
    <div className="text-sm text-gray-500">
      <p>Role: SDE 1</p>
      <p>Post: Deutsche Bank | TCS</p>
    </div>
  </div>
</div>


          <div className="text-center mb-8 reveal">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md">
              Explore offerings
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm reveal">
            <p className="mb-2">
              <strong className="text-gray-200">1,00,000+</strong> Coding Ninjas
              alumni from 1,100+ companies &amp; 4,400+ colleges working in top
              product companies
            </p>

    
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
          
              <div className="flex items-center gap-2">
                <FaFacebookF className="text-[#4267B2]" />
                <span className="text-gray-200 font-semibold text-base">
                  4.9 <FaStar className="inline text-yellow-400 mb-1" />
                </span>
                <span className="text-xs text-gray-500">700+ reviews</span>
              </div>

             
              <div className="flex items-center gap-2">
                <FaGoogle className="text-[#DB4437]" />
                <span className="text-gray-200 font-semibold text-base">
                  4.7 <FaStar className="inline text-yellow-400 mb-1" />
                </span>
                <span className="text-xs text-gray-500">2300+ reviews</span>
              </div>

              
              <div className="flex items-center gap-2">
                <img
                  src="https://files.codingninjas.com/new-cn-logos-32028.svg"
                  alt="Coding Ninjas"
                  className="w-5 h-5"
                />
                <span className="text-gray-200 font-semibold text-base">
                  4.8 <FaStar className="inline text-yellow-400 mb-1" />
                </span>
                <span className="text-xs text-gray-500">Course rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
