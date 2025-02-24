// src/pages/Profile.js
import React from "react";
import { Link } from "react-router-dom";


function FacebookIcon() {
  return (
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 320 512"
      aria-hidden="true"
    >
      <path d="M279.14 288l14.22-92.66h-88.91V129.26c0-25.35 12.42-50.06 52.24-50.06H295V3.22S271.2 0 241.53 0c-73.06 0-120.53 44.38-120.53 124.72v70.62H32v92.66h89v224h107.1v-224z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 512 512"
      aria-hidden="true"
    >
      <path d="M459.37 151.716c.325 4.548 0 9.097 0 13.645 0 138.72-105.583 298.557-298.557 298.557A296.56 296.56 0 010 397.408a218.148 218.148 0 0025.6 1.447 209.23 209.23 0 00129.86-44.843 104.6 104.6 0 01-97.68-72.772 132.2 132.2 0 0019.8 1.6 110.2 110.2 0 0027.5-3.6 104.52 104.52 0 01-83.89-102.414v-1.318a105 105 0 0047.21 13.07 104.5 104.5 0 01-32.4-139.56 297.31 297.31 0 00215.77 109.64 117.25 117.25 0 01-2.59-23.86 104.52 104.52 0 01180.9-71.52 209.1 209.1 0 0066.44-25.34 103.88 103.88 0 01-45.94 57.61 209.52 209.52 0 0060.24-16.23 226.93 226.93 0 01-52.48 54.4z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 448 512"
      aria-hidden="true"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.4 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9H317c-14.9 0-26.9-12-26.9-26.9v-26.7c0-14.9 12-26.9 26.9-26.9h26.7c14.9 0 26.9 12 26.9 26.9v26.7zM398.8 96h-49.9c-33.5 0-60.7 27.2-60.7 60.7v49.9c0 33.5 27.2 60.7 60.7 60.7h49.9c33.5 0 60.7-27.2 60.7-60.7v-49.9c0-33.5-27.2-60.7-60.7-60.7zM224.1 0C100.3 0 0 100.3 0 224.1 0 347.7 100.3 448 224.1 448c123.8 0 224.1-100.3 224.1-223.9C448.2 100.3 347.9 0 224.1 0z" />
    </svg>
  );
}


function VisaIcon() {
  return <span className="text-xs font-bold">VISA</span>;
}
function MasterCardIcon() {
  return <span className="text-xs font-bold">MC</span>;
}
function AmexIcon() {
  return <span className="text-xs font-bold">AMEX</span>;
}

export default function Profile() {
  return (
    <div className="bg-[#2b2b2b] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            {/* Official CN logo from provided link */}
            <img
              src="https://files.codingninjas.com/new-cn-logos-32028.svg"
              alt="Coding Ninjas Logo"
              className="w-36 h-auto object-contain"
            />

            {/* Contact info */}
            <div className="text-sm text-gray-300 leading-relaxed">
              <p>Call us: 1800-123-3598</p>
              <p>Email: contact@codingninjas.com</p>
            </div>

            {/* Address or small tagline */}
            <p className="text-xs text-gray-400">
              Sunrise Mentors Pvt. Ltd.
              <br />
              Building the future of coding education.
            </p>

            {/* Social icons row */}
            <div className="flex space-x-3 mt-2">
              <Link
                to="#"
                className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full hover:bg-orange-500 transition-colors"
              >
                <FacebookIcon />
              </Link>
              <Link
                to="#"
                className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full hover:bg-orange-500 transition-colors"
              >
                <TwitterIcon />
              </Link>
              <Link
                to="#"
                className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded-full hover:bg-orange-500 transition-colors"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Important Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Placement Statistics
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Coding Ninjas University
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Bug Bounty
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Products</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Job Bootcamp
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  IT Certifications
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Starter Courses
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Career Confidant
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  CodeStudio
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Code360
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Student Chapters
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Events & Webinars
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Campus Ambassadors
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Interview Experiences
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Tech Blogs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Career Camp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="bg-[#2b2b2b] border-t border-gray-700 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-start justify-between gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100">
              Important Links
            </h3>

            <div className="text-sm text-gray-300">
              <p className="font-medium text-gray-100">
                Job Bootcamp for professionals
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                <Link to="#" className="hover:text-orange-500">
                  Web Development Bootcamp
                </Link>
                <Link to="#" className="hover:text-orange-500">
                  MERN & SpringBoot
                </Link>
                <Link to="#" className="hover:text-orange-500">
                  Data Analytics Job Bootcamp
                </Link>
              </div>
            </div>


            <div className="text-sm text-gray-300">
              <p className="font-medium text-gray-100">
                IT Certifications for Professionals
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                <Link to="#" className="hover:text-orange-500">
                  PG Certification in Data Analytics by E&ICT Academy
                </Link>
                <Link to="#" className="hover:text-orange-500">
                  IT Gawds
                </Link>
              </div>
            </div>


            <div className="text-sm text-gray-300">
              <p className="font-medium text-gray-100">
                IT Certifications for Students
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                <Link to="#" className="hover:text-orange-500">
                  Training and Internship Certification in Data Analytics
                </Link>
                <Link to="#" className="hover:text-orange-500">
                  E&ICT Academy
                </Link>
                <Link to="#" className="hover:text-orange-500">
                  IT Gawds
                </Link>
              </div>
            </div>
          </div>


          <div className="space-y-4">
            <p className="text-sm text-gray-400">
              We accept payments using:
            </p>
            <div className="flex flex-wrap items-center gap-3">

              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center">
                <VisaIcon />
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center">
                <MasterCardIcon />
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center">
                <AmexIcon />
              </div>

              <img
                src="https://files.codingninjas.com/paypal-32667.png"
                alt="PayPal"
                className="h-6 object-contain"
              />
              <img
                src="https://files.codingninjas.com/amazon-web-service-32671.png"
                alt="Net Banking"
                className="h-6 object-contain"
              />
            </div>

            <div>
              <Link
                to="#"
                className="inline-block bg-[#68f2c3] text-black px-3 py-1 text-sm font-semibold rounded hover:opacity-90"
              >
                30% extra secure payment
              </Link>
            </div>
          </div>
        </div>
      </div>



      <div className="relative w-full bg-[#2b2b2b] pt-12 pb-24 overflow-visible">
        <h2
          className="text-center text-[40px] md:text-[80px] font-extrabold leading-none"
          style={{
            color: "#ffffff20", 
            background: `
              linear-gradient(
                to right,
                rgba(255,255,255,0) 0%,
                rgba(255,255,255,0.4) 50%,
                rgba(255,255,255,0) 100%
              )
            `,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 2.5s linear infinite",
          }}
        >
          Coding Ninjas
        </h2>
      </div>


      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}
      </style>
    </div>
  );
}
