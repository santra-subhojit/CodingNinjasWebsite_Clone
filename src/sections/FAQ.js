import React, { useState, useRef, useEffect } from "react";


function LinkedInIcon() {
  return (
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M100.28 448H7.4V149.4h92.88zm-46.4-341A53.9 53.9 0 119.38 160a53.9 53.9 0 1144.5-53.9zM447.9 448h-92.68V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.8V448h-92.7V149.4h88.9v40.8h1.3c12.4-23.5 42.5-48.4 87.4-48.4 93.5 0 110.7 61.5 110.7 141.3V448z" />
    </svg>
  );
}

export default function FAQ() {

  const mentorshipRef = useRef(null);
  const learnRef = useRef(null);
  const facultyRef = useRef(null);


  const [activeSection, setActiveSection] = useState("mentorship");

  const [orangeLineHeight, setOrangeLineHeight] = useState(0);

  const sectionOffsets = useRef({
    mentorship: 0,
    learn: 0,
    faculty: 0,
  });

 
  useEffect(() => {
    function updateOffsets() {
      
      if (mentorshipRef.current) {
        const rect = mentorshipRef.current.getBoundingClientRect();
        sectionOffsets.current.mentorship =
          rect.top + window.scrollY + 8; 
      }
      if (learnRef.current) {
        const rect = learnRef.current.getBoundingClientRect();
        sectionOffsets.current.learn =
          rect.top + window.scrollY + 8;
      }
      if (facultyRef.current) {
        const rect = facultyRef.current.getBoundingClientRect();
        sectionOffsets.current.faculty =
          rect.top + window.scrollY + 8;
      }
    }

    
    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

 
  useEffect(() => {
    function onScroll() {
   
      const scrollY = window.scrollY + window.innerHeight * 0.3;
    
      const distances = {
        mentorship: Math.abs(sectionOffsets.current.mentorship - scrollY),
        learn: Math.abs(sectionOffsets.current.learn - scrollY),
        faculty: Math.abs(sectionOffsets.current.faculty - scrollY),
      };

    
      let minSection = "mentorship";
      let minVal = distances.mentorship;
      for (const key of ["learn", "faculty"]) {
        if (distances[key] < minVal) {
          minVal = distances[key];
          minSection = key;
        }
      }
     
      setActiveSection(minSection);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
 
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  
  useEffect(() => {
    const topOffset = sectionOffsets.current.mentorship; // The first circle
    const activeOffset = sectionOffsets.current[activeSection];
    const newHeight = Math.max(0, activeOffset - topOffset);
    setOrangeLineHeight(newHeight);
  }, [activeSection]);

  return (
    <div className="relative w-full bg-white text-gray-900">
     
      <div className="hidden md:block absolute top-0 bottom-0 left-8 border-l-2 border-dotted border-gray-300 z-0" />

     
      <div
        className="hidden md:block absolute left-[7px] bg-orange-500 w-[2px] z-10 transition-all duration-300"
        style={{
          
          top: sectionOffsets.current.mentorship ? sectionOffsets.current.mentorship - 4 : 0,
          height: orangeLineHeight,
        }}
      />

     
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="hidden md:block w-0 relative mb-8">
            <div
     
              ref={mentorshipRef}
            />
          </div>

 
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            1:1 Mentorship sessions
          </h2>
          <p className="text-gray-600 mb-8">
            Personalized guidance to prepare you for your interview match.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
   
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://files.codingninjas.com/mock-interview-32171.webp"
                alt="Mock interview"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Mock interview</h3>
              <p className="text-sm text-gray-700">
                Reduce hiring anxieties and develop your confidence.
                Gain insights from real interviews.
              </p>
            </div>

 
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://files.codingninjas.com/profile-review-32172.webp"
                alt="Profile review"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Profile review</h3>
              <p className="text-sm text-gray-700">
                Get your profile & resume reviewed by industry experts
                for better visibility.
              </p>
            </div>


            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://files.codingninjas.com/project-guidance-32173.webp"
                alt="Project guidance"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Project guidance</h3>
              <p className="text-sm text-gray-700">
                Connect confidently with industry-level mentors to
                sharpen your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="relative z-10 bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto">
 
    <div className="hidden md:block w-0 relative mb-8">
      <div
        ref={learnRef}
      />
    </div>

  
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
   
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Learn by doing</h2>
        <p className="text-gray-600 mb-8">
          Interesting projects to help you stand out to recruiters
        </p>
      </div>

     
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://files.codingninjas.in/frame-1000004133-32120.webp"
          alt="Learn by Doing"
          className="w-full h-auto object-cover rounded shadow-sm"
        />
      </div>
    </div>
  </div>
</section>

    
      <section className="relative z-10 bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="hidden md:block w-0 relative mb-8">
            <div
              ref={facultyRef}
            />
          </div>

    
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Faculty that brings out the best in you
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="h-32 w-32 bg-gray-200 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold mb-1">Ankush Singla</h3>
              <p className="text-sm text-gray-600 mb-2">
                Co-Founder & Instructor
              </p>
              <p className="text-xs text-gray-500">
                Teaches: Basics of C++ with DSA, Data Science & Machine Learning
              </p>
          
              <a
                href="https://www.linkedin.com/in/ankush-singla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1 mt-2"
              >
                <LinkedInIcon />
                LinkedIn profile
              </a>
            </div>

   
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="h-32 w-32 bg-gray-200 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold mb-1">Parikh Jain</h3>
              <p className="text-sm text-gray-600 mb-2">
                Instructor & Founding Member
              </p>
              <p className="text-xs text-gray-500">
                Teaches: Basics of Python with DSA, Competitive Programming
              </p>
              <a
                href="https://www.linkedin.com/in/parikh-jain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1 mt-2"
              >
                <LinkedInIcon />
                LinkedIn profile
              </a>
            </div>

            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="h-32 w-32 bg-gray-200 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold mb-1">Nidhi Agarwal</h3>
              <p className="text-sm text-gray-600 mb-2">
                Founding member & Product Manager
              </p>
              <p className="text-xs text-gray-500">
                Teaches: Data Analytics Course, Data Structures & Interview Prep
              </p>
              <a
                href="https://www.linkedin.com/in/nidhi-agarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1 mt-2"
              >
                <LinkedInIcon />
                LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
