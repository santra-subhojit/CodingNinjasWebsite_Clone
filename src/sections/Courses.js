// src/pages/Courses.js
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaVolumeUp } from "react-icons/fa";
import { FaClock, FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Courses() {
  useEffect(() => {
  
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      scale: 0.95,
      reset: false,
      interval: 100,
    });


    sr.reveal(".reveal");
  }, []);

  return (
    <div
      className="
        relative 
        min-h-screen 
        py-16 
        px-4 
        text-white
      "
      style={{

        backgroundColor: "#0b0b0b",
        backgroundImage:
          "url('https://files.codingninjas.com/your-grid-pattern-12345.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
   
      <div className="max-w-6xl mx-auto text-center mb-10 relative">
     
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold reveal">
          WHY US
        </h1>

   
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            className="
              text-[10rem] 
              md:text-[14rem] 
              font-extrabold 
              uppercase 
              leading-none 
              opacity-5 
              text-transparent
            "
            style={{ WebkitTextStroke: "2px #ffffff" }}
          >
            WHY US
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-start md:items-start justify-center gap-8 mb-12">
  
          <div
            className="
              relative 
              bg-[#1c1c1c] 
              rounded-lg 
              w-full 
              md:w-1/2 
              min-h-[360px] 
              p-4 
              shadow-md 
              reveal
            "
          >
    
            <img
              src="https://files.codingninjas.com/1-1-doubt-support-with-subtitle-2-33136.mp4"
              alt="Ankush Singla"
              className="w-full h-[240px] object-cover rounded-md"
            />
     
            <div className="absolute top-6 right-6 bg-black bg-opacity-50 p-2 rounded-full">
              <FaVolumeUp size={16} />
            </div>
     
            <div className="absolute bottom-6 right-6 bg-[#1c1c1c] p-2 rounded-full text-sm font-bold">
              6
            </div>

   
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-1">Ankush Singla</h2>
              <p className="text-gray-400 text-sm">
                Co-Founder of Coding Ninjas | Mentor
              </p>
              <p className="text-gray-400 text-sm mt-2">
                you get to rate your teaching assistant as well.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-1/2">
   
            <div
              className="
                reveal
                bg-[#1673ff] 
                rounded 
                px-4 
                py-3 
                text-white 
                flex 
                items-center 
                gap-2
              "
            >
              <FaClock size={20} />
              <span className="text-base md:text-lg font-semibold">
                Fastest 1:1 doubt support
              </span>
            </div>
    
            <div
              className="
                reveal
                bg-[#1673ff] 
                rounded 
                px-4 
                py-3 
                text-white 
                flex 
                items-center 
                gap-2
              "
            >
              <FaGraduationCap size={20} />
              <span className="text-base md:text-lg font-semibold">
                Stanford/IIT/MAANG faculty
              </span>
            </div>
          
            <div
              className="
                reveal
                bg-[#1673ff] 
                rounded 
                px-4 
                py-3 
                text-white 
                flex 
                items-center 
                gap-2
              "
            >
              <FaBriefcase size={20} />
              <span className="text-base md:text-lg font-semibold">
                Placement assistance
              </span>
            </div>
          </div>
        </div>

       
        <div
          className="
            bg-[#1c1c1c] 
            rounded-lg 
            p-6 
            mb-8 
            shadow-md 
            reveal
          "
        >
          <h2 className="text-center text-2xl font-bold mb-6">
            The Coding Ninjas advantage
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-separate border-spacing-y-3 border-spacing-x-2">
              <thead>
                <tr className="text-gray-300">
                  <th className="py-2 px-3"></th>
                  <th className="py-2 px-3 text-sm">Free resources</th>
                  <th className="py-2 px-3 text-sm">Other courses</th>
                  <th className="py-2 px-3 text-sm">Our courses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#2c2c2c] text-gray-200 rounded">
                  <td className="py-2 px-3">
                    Structured + problem solving based
                  </td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✓</td>
                </tr>
                <tr className="bg-[#2c2c2c] text-gray-200 rounded">
                  <td className="py-2 px-3">Fastest 1:1 doubt support</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✓</td>
                </tr>
                <tr className="bg-[#2c2c2c] text-gray-200 rounded">
                  <td className="py-2 px-3">Integrated prep platform</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✓</td>
                </tr>
                <tr className="bg-[#2c2c2c] text-gray-200 rounded">
                  <td className="py-2 px-3">Profiles highlighted on Naukri</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✓</td>
                </tr>
                <tr className="bg-[#2c2c2c] text-gray-200 rounded">
                  <td className="py-2 px-3">Coding Ninjas brand</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✕</td>
                  <td className="py-2 px-3 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className="bg-[#2c2c2c] rounded-md p-4 flex items-center justify-between reveal">
      
          <img
            src="https://files.codingninjas.com/new-cn-logos-32028.svg"
            alt="Coding Ninjas"
            className="h-8"
          />
     
          <div className="flex-1 mx-4 h-2 bg-orange-500 rounded" />
          <span className="text-sm text-gray-200">
            Your dream role, faster and with confidence!
          </span>
          <FaBriefcase className="text-orange-500 ml-4" />
        </div>

        <div className="text-right text-gray-400 text-sm mt-1 reveal">
          Others: Average role, under-confident?
        </div>


        <div className="text-center mt-8 reveal">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md">
            Explore offerings
          </button>
        </div>
      </div>
    </div>
  );
}
