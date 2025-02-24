// src/pages/About.js
import React, { useEffect, useRef } from "react";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import ScrollReveal from "scrollreveal";


import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
 
  const lineProgressRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      lineProgressRef.current,
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: "#offerings-container",
          start: "top top",
          end: "bottom centre",
          scrub: true,
        },
      }
    );


    ScrollReveal().reveal(".reveal-card", {
      origin: "bottom",
      distance: "50px",
      duration: 600,
      easing: "ease-in-out",
      interval: 100, 
      reset: false,  
    });
  }, []);

  return (
    <>
      
      <div
        id="offerings-container"
        className="relative bg-white text-gray-900 py-12 px-4"
      >
      
        <div className="hidden md:block absolute top-0 left-0 w-[3px] h-full bg-gray-300">
         
          <div
            ref={lineProgressRef}
            className="absolute top-0 left-0 w-full bg-orange-500"
            style={{ height: 0 }}
          />
        </div>

    
        <div className="max-w-6xl mx-auto">
        
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 reveal-card">
            OUR OFFERINGS
          </h2>

       
          <div className="mb-8 reveal-card">
       
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-medium text-gray-700">Job Bootcamp</span>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-orange-500">For graduates</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
              <div className="rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Full Stack Web Development with GenAI
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  600+ Problems • 25K+ Mentors • 2000+ Learners • 6 months
                </p>
              </div>

     
              <div className="rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Data Analytics with GenAI
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  620+ Problems • 25K+ Mentors • 2000+ Learners • 6 months
                </p>
              </div>
            </div>
          </div>

     
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-6 reveal-card">
              <span className="font-medium text-gray-700">IT Certifications</span>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-orange-500">For graduates</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
              <div className="rounded-lg shadow-sm border p-4 reveal-card">
                <LazyLoadImage
                  src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                  alt="Certification"
                  effect="blur"
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold mb-1">
                  PG Certification in Full Stack Web Dev with GenAI
                </h3>
                <p className="text-sm text-gray-600">
                  B&ICT Academy • 20K+ Learners • 6 months
                </p>
              </div>

        
              <div className="rounded-lg shadow-sm border p-4 reveal-card">
                <LazyLoadImage
                  src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                  alt="Certification"
                  effect="blur"
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold mb-1">
                  Professional Certification in Full Stack Web Dev with GenAI
                </h3>
                <p className="text-sm text-gray-600">
                  B&ICT Academy • 25K+ Learners • 6 months
                </p>
              </div>

              <div className="rounded-lg shadow-sm border p-4 reveal-card">
                <LazyLoadImage
                  src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                  alt="Certification"
                  effect="blur"
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold mb-1">
                  Training & Internship Certification in Full Stack Web Dev
                </h3>
                <p className="text-sm text-gray-600">
                  B&ICT Academy • 15K+ Learners • 5 months
                </p>
              </div>

              <div className="rounded-lg shadow-sm border p-4 reveal-card">
                <LazyLoadImage
                  src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                  alt="Certification"
                  effect="blur"
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold mb-1">
                  PG Certification in Advanced DSA
                </h3>
                <p className="text-sm text-gray-600">
                  B&ICT Academy • 18K+ Learners • 4 months
                </p>
              </div>

              <div className="rounded-lg shadow-sm border p-4 reveal-card">
                <LazyLoadImage
                  src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                  alt="Certification"
                  effect="blur"
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold mb-1">
                  Professional Certification in Data Analytics
                </h3>
                <p className="text-sm text-gray-600">
                  B&ICT Academy • 20K+ Learners • 6 months
                </p>
              </div>

              <div className="rounded-lg shadow-sm border p-4 reveal-card">
                <LazyLoadImage
                  src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                  alt="Certification"
                  effect="blur"
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold mb-1">
                  Training & Internship Certification in Full Stack Web Dev
                </h3>
                <p className="text-sm text-gray-600">
                  B&ICT Academy • 12K+ Learners • 6 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

      `}</style>
    </>
  );
}
