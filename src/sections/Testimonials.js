// src/pages/Testimonials.js
import React from "react";

export default function Testimonials() {
  return (
    <div className="relative w-full bg-white text-gray-900">
      
      <div className="hidden md:block absolute top-0 bottom-0 left-[80px] border-l-2 border-dotted border-gray-300 z-0" />

      
      <section className="relative z-10 py-16 px-4 bg-[#FFF2F2]">
        <div className="max-w-6xl mx-auto relative">
          
          <div className="hidden md:block w-0 mb-8">
          </div>

         
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Coding Ninjas in spotlight
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8 mt-6">
            
            <div className="w-full md:w-1/2 border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
               
                <img
                  src="https://files.codingninjas.com/news_ted-33207.webp"
                  alt="TEDx"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    TEDx: Demand, Supply, Run!
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Ankush Singla | TEDx@VCOE
                  </p>
                  <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1 rounded-md">
                    Play video
                  </button>
                </div>
              </div>
            </div>

            
            <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
              
              <div className="border rounded-md p-2 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="https://files.codingninjas.com/cxo-33141.png"
                  alt="CXO Today"
                  className="h-10 object-contain"
                />
              </div>
              <div className="border rounded-md p-2 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="https://files.codingninjas.com/hindustan-times-33144.png"
                  alt="Hindustan Times"
                  className="h-6 object-contain"
                />
              </div>
              <div className="border rounded-md p-2 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="https://files.codingninjas.com/economic-times-33143.png"
                  alt="The Economic Times"
                  className="h-6 object-contain"
                />
              </div>
              <div className="border rounded-md p-2 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="https://files.codingninjas.com/money-control-33145.png"
                  alt="Moneycontrol"
                  className="h-6 object-contain"
                />
              </div>
              <div className="border rounded-md p-2 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="https://files.codingninjas.com/google-32675.png"
                  alt="Google"
                  className="h-6 object-contain"
                />
              </div>
              <div className="border rounded-md p-2 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="https://files.codingninjas.com/amazon-web-service-32671.png"
                  alt="AWS"
                  className="h-6 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="relative z-10 py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto relative">
          
          <div className="hidden md:block w-0 mb-8">
          </div>

          
          <div className="flex flex-col md:flex-row items-start gap-8">
          
            <div className="w-full md:w-1/2 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://files.codingninjas.com/10920-sunrise-mentors-private-limited-coding-ninjas-_11zon-1714543245.webp"
                alt="NSDC Certificate"
                className="w-full object-cover rounded-md"
              />
            </div>

            
            <div className="md:w-1/2">
              <p className="text-xl md:text-2xl font-semibold mb-6">
                We are an approved training partner of NSDC under their scheme
                for market led fee-based services
              </p>
              <p className="text-sm text-gray-700 mb-4">
                This recognition ensures our programs meet the highest quality
                standards, preparing you for real-world challenges and helping
                you stand out to employers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
