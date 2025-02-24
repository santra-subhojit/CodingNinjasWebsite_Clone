// src/pages/Services.js
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// Icons for each milestone
import { FaUserGraduate, FaBuilding, FaMoneyBillAlt, FaChartLine } from "react-icons/fa";

export default function Services() {
  useEffect(() => {
   
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      scale: 0.9,  
      reset: false,
      interval: 150,
    });

  
    sr.reveal(".cn-heading");
    sr.reveal(".cn-milestone");
  }, []);

  return (
    <div className="bg-[#1c1c1c] text-[#f5f5f5] min-h-screen py-16 px-4">
     
      <div className="max-w-3xl mx-auto text-center mb-12 cn-heading">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          9 years of transforming tech careers
        </h1>
      </div>

    
      <div className="relative max-w-md mx-auto">
      
        <div className="absolute top-0 bottom-0 left-1/2 -ml-px border-l-2 border-dotted border-gray-600" />

        <div className="relative mb-16 cn-milestone">
  
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#f7931e] rounded-full flex items-center justify-center text-white">
            <FaUserGraduate size={16} />
          </div>
   
          <div className="pt-12 text-center">
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              1.5 Lac+ learners
            </p>
            <p className="text-gray-400 text-sm">
              added diverse skill sets for top companies
            </p>
          </div>
        </div>

  
        <div className="relative mb-16 cn-milestone">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#f7931e] rounded-full flex items-center justify-center text-white">
            <FaBuilding size={16} />
          </div>
          <div className="pt-12 text-center">
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              1,400 Alumni in MAANG
            </p>
            <p className="text-gray-400 text-sm">&amp; more in 100+ Unicorns</p>
          </div>
        </div>

    
        <div className="relative mb-16 cn-milestone">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#f7931e] rounded-full flex items-center justify-center text-white">
            <FaMoneyBillAlt size={16} />
          </div>
          <div className="pt-12 text-center">
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              1 Cr+ highest CTC
            </p>
            <p className="text-gray-400 text-sm">
              your placements are unstoppable
            </p>
          </div>
        </div>

       
        <div className="relative mb-16 cn-milestone">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#f7931e] rounded-full flex items-center justify-center text-white">
            <FaChartLine size={16} />
          </div>
          <div className="pt-12 text-center">
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              128% average hike
            </p>
            <p className="text-gray-400 text-sm">from our program alumni</p>
          </div>
        </div>


        <div className="relative mb-16 text-center cn-milestone">
          <button className="bg-[#f7931e] hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md">
            Explore offerings !
          </button>
        </div>
      </div>
    </div>
  );
}
