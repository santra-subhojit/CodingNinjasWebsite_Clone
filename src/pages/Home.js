// src/pages/Home.js
import React from "react";
import About from "../sections/About";
import Services from "../sections/Services";
import Courses from "../sections/Courses";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import FAQ from "../sections/FAQ";
import Testimonials from "../sections/Testimonials";
import Profile from "../sections/Profile";

export default function Home() {
  return (
    <main className="scroll-smooth">

      <section
        id="home"
        className="
          relative
          flex
          items-center
          justify-center
          h-screen
          px-4
          text-white
          bg-[#1c1c1c]
          [background-image:radial-gradient(#2e2e2e_1px,transparent_1px)]
          [background-size:10px_10px]
        "
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="mb-2 text-sm font-medium tracking-wide text-orange-500">
            Restricted by opportunities?
          </p>


          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl">
            Get the tech career you deserve. Faster.
          </h1>

          <p className="mb-8 text-base text-gray-300 md:text-lg">
            Structured coding courses that give you the skills with confidence
          </p>


          <button
            className="
              rounded-md
              bg-orange-500
              px-6
              py-3
              font-semibold
              text-white
              transition-colors
              hover:bg-orange-600
            "
          >
            Explore offerings
          </button>


          <div className="mx-auto mt-12 max-w-3xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/kG7l4bT6-L0"
                title="The Indian EdTech Story x Coding Ninjas"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="py-20 px-4 min-h-screen bg-[#1c1c1c]">
        <About />
      </section>


      <section id="services" className="py-20 px-4 min-h-screen bg-[#1c1c1c]">
        <Services />
      </section>


      <section id="courses" className="py-20 px-4 min-h-screen bg-[#1c1c1c]">
        <Courses />
      </section>


      <section id="blog" className="py-20 px-4 min-h-screen bg-[#1c1c1c]">
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 min-h-screen bg-[#1c1c1c]">
        <Contact />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 min-h-screen bg-[#1c1c1c]">
        <FAQ />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 min-h-screen bg-[#1c1c1c]">
        <Testimonials />
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 px-4 min-h-screen bg-[#1c1c1c]">
        <Profile />
      </section>
    </main>
  );
}

