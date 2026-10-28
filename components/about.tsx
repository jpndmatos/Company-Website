"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section 
      ref={ref}
      className=" flex flex-col justify-center items-center min-h-screen pt-[4.5rem]"
      id="About"
    >       
    <div className="rounded-3xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue from-70% to-pink to-100% animate-gradient bg-300% max-w-6xl mx-auto px-8 sm:px-16 div-3d-hover">
      <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-up" data-aos-delay="100">
          <h2 className="h1 mb-12 font-semibold text-white">About Doppel</h2>
          <p className="text-xl leading-9 font-normal text-gray-300">At Doppel we develop integrated digital and physical solutions for Cultural Heritage, with a strong focus on 3D Digitalization and interactive digital environments with a team of specialized professionals with a background in Archeology and Heritage, Digital Media and Graphic Design that offers an innovative approach for Heritage dissemination and education</p>
        </div>
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-16 md:max-w-2xl lg:max-w-none text-center">
          {/* 1 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
            <h4 className="h4 font-normal mb-3 text-white">Archeology</h4>
            <p className="text-m text-gray-300 text-center">Consulting and services.</p>
          </div>
          {/* 2 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            <h4 className="h4 font-normal mb-3 text-white">3D Surveys</h4>
            <p className="text-m text-gray-300 text-center">Photogrammetry and laser scanning.</p>
          </div>
          {/* 3 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
            <h4 className="h4 font-normal mb-3 text-white">Virtual reconstruction</h4>
            <p className="text-m text-gray-300 text-center">3D modeling and animation.</p>
          </div>
          {/* 4 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <h4 className="h4 font-normal mb-3 text-white">Interactive applications</h4>
            <p className="text-m text-gray-300 text-center">Web, mobile and augmented reality.</p>
          </div>
          {/* 5 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
            <h4 className="h4 font-normal mb-3 text-white">Virtual reality</h4>
            <p className="text-m text-gray-300 text-center">Immersive VR environments.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
