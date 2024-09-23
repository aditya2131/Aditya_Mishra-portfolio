"use client"; // Marks this component as a client-side component

import React from "react";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

const hobbies = [
  {
    image: "/image/sports.webp",
    title: "Sports",
    description: "Sports fuel my passion for challenge, drive my sense of teamwork, and push me to grow both mentally and physically.",
  },
  {
    image: "/image/all-in-one.jpg",
    title: "Animes",
    description: "I love anime for its unique ability to blend art, emotion, and storytelling, taking me on unforgettable journeys through diverse worlds.",
  },
  {
    image: "/image/quotes.jpg",
    title: "Writings",
    description: "I’m drawn to quotes and writing for their power to distill complex emotions, inspire thought, and express creativity through words.",
  },
];

const HobbiesSection = () => {
  return (
    <section className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Interests</span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {hobbies.map((hobby, index) => (
          <div key={index} className="bg-[#1b203e] border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 rounded-lg p-6">
            <img
              src={hobby.image}
              alt={hobby.title}
              className="h-48 w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2 text-white">{hobby.title}</h3>
            <p className="text-gray-300">{hobby.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          href="/media"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default HobbiesSection;
