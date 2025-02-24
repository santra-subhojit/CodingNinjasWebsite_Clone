// src/pages/Contact.js
import React, { useState, useRef, useEffect } from "react";


function ScrollLine({
  id,
  activeLine,
  setActiveLine,
  markerTop = "0px",
  heading,
  subheading,
}) {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLine(id);
          }
        });
      },
      {
        
        threshold: 0.5,
      }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, [id, setActiveLine]);


  const isActive = activeLine === id;

  const circleColor = isActive ? "bg-orange-500 opacity-0" : "bg-gray-500 opacity-0";
  const headingColor = isActive ? "text-orange-400 scale-100" : "text-white scale-95";
  const subheadingColor = isActive ? "text-orange-400" : "text-gray-300";

  return (
    <div
      ref={lineRef}
     
      className="relative mb-16 transition-all duration-700"
    >
     
      <div
        className={`
          hidden md:flex
          absolute
          items-center justify-center
          w-8 h-8
          ${circleColor}
          rounded-full
          shadow-md
          transition-colors duration-700
        `}
        style={{
          left: "76px", 
          top: markerTop,
        }}
      />
 
      <h2
        className={`
          font-bold
          text-2xl md:text-3xl
          mb-2
          transform-gpu
          transition-all duration-700
          ${headingColor}
        `}
      >
        {heading}
      </h2>
  
      {subheading && (
        <p
          className={`
            text-base md:text-lg leading-relaxed
            transition-colors duration-700
            ${subheadingColor}
          `}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [activeLine, setActiveLine] = useState(null);

  return (
    <div className="relative w-full min-h-screen">
     
      <section
        className="relative z-10 py-16 px-4"
        style={{ backgroundColor: "#F8FCFF" }}
      >
        <div
          className="
            max-w-6xl
            mx-auto
            md:pl-[120px]
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
          "
        >
       
          <div className="hidden md:block w-0">
          </div>

        
          <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              A 3-stage learning model to turn you into a Coding Ninja
            </h1>
            <ul className="space-y-3 ml-4 list-disc list-inside text-gray-700">
              <li>
                <strong>Learn:</strong> Experience seamless learning with
                problem-solving modules, leaderboard, and awards.
              </li>
              <li>
                <strong>Excel:</strong> Track your skill level and make
                meaningful progress for you to grow.
              </li>
              <li>
                <strong>Standout:</strong> Stand out to recruiters, showcase
                ratings, get feedback and interview insights.
              </li>
            </ul>
          </div>

        
          <div className="flex-1 flex justify-center">
            <img
              src="https://files.codingninjas.com/web_learn-33056.webp"
              alt="Learning module"
              className="max-w-md rounded shadow-md"
            />
          </div>
        </div>
      </section>

     
      <section className="relative z-10 bg-[#1c1c1c] text-white py-16 px-4 overflow-hidden">
       
        <div className="hidden md:block absolute top-0 bottom-0 left-8 border-l-2 border-dotted border-gray-500 z-0" />

        <div className="relative max-w-6xl mx-auto">
         
          <div className="hidden md:block absolute left-[-300px] top-[5px] z-10">
            <div className="bg-white text-black text-sm px-4 py-1 rounded-full shadow-md flex items-center gap-2">
              <div className="w-4 h-4 bg-black rounded-full" />
              <span>Always available when you get stuck</span>
            </div>
          </div>

         
          <h2
            className="
              absolute
              text-3xl md:text-5xl
              font-bold
              text-gray-500
              opacity-10
              leading-tight
              w-[90%] md:w-[70%]
              -top-6 md:-top-8
              z-0
              pointer-events-none
            "
          >
            
          </h2>
          <div className="relative pt-12 z-10">
            <ScrollLine
              id="line1"
              activeLine={activeLine}
              setActiveLine={setActiveLine}
              markerTop="0px"
              heading="Resolve doubts any time through chat, voice notes or calling."
            />
            <ScrollLine
              id="line2"
              activeLine={activeLine}
              setActiveLine={setActiveLine}
              markerTop="80px"
              heading="500+ dedicated Teaching Assistants to resolve your doubts quickly"
            />
            <ScrollLine
              id="line3"
              activeLine={activeLine}
              setActiveLine={setActiveLine}
              markerTop="160px"
              heading="5/5 rating for 90% doubt resolutions."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
