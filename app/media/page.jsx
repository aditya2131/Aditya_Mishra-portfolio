// app/media/page.jsx
"use client"; // Marks this component as a client-side component

import React from "react";

const mediaItems = [
  {
    type: "image",
    src: "/image/badminton.jpg",
    description: "Badminton has been a cherished part of my life since childhood. I still remember the evening matches with my childhood friends, where we’d play until the last bit of daylight faded. Those moments were filled with laughter, friendly competition, and a shared love for the game. Even now, whenever I get the chance, I pick up my racket and relive those memories. Badminton remains more than just a sport for me—it’s a reminder of the joy and connection it brings, both past and present.",
  },
  {
    type: "video",
    src: "/video/eren.webm",
    description: "Attack on Titan has captivated me since I started watching anime in class 11th. Its powerful storytelling, intricate plot twists, and deeply emotional character arcs have left a lasting impact. The series inspires me with its themes of courage and perseverance, showcasing the strength needed to face overwhelming challenges. The raw emotions and complex moral questions it explores resonate deeply, making AOT not just a show, but a profound source of inspiration and reflection for me.",
  },
  {
    type: "image",
    src: "/image/jaun_elia.jpg",
    description: "Jaun Elia's writings have profoundly influenced me since I first encountered them. His poetry and prose resonate with a depth of emotion and existential introspection that speaks to the core of human experience. Elia's unique blend of lyrical beauty and poignant insight into love, loss, and identity captivates me, inspiring me to explore and express the complexities of life through my own words. His work is a powerful reminder of the beauty and pain inherent in the human condition.",
  },
  {
    type: "video",
    src: "/video/uchiha.mp4",
    description: "Naruto holds a special place in my heart as my first anime, marking the beginning of my journey into the world of anime. Its story of Naruto Uzumaki’s growth from an outcast to a revered leader is both inspiring and relatable. The series taught me invaluable lessons about perseverance, self-belief, and the importance of never giving up on one's dreams. The diverse characters and their personal struggles highlight themes of friendship, resilience, and redemption, making Naruto not just a memorable series, but a profound source of motivation and insight in my life.",
  },
];

const MediaPage = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
      <h2 className="mx-auto flex items-center justify-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold text-lg md:text-xl font-bold font-gil-sans-cursive text-gray-800 mb-6">
  Things I Love
</h2>

        <div className="space-y-12">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="media"
                  className="w-full lg:w-1/3 object-cover rounded-lg shadow-lg border border-gray-300"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full lg:w-1/3 object-cover rounded-lg shadow-lg border border-gray-300"
                  autoPlay
                  loop
                  muted
                />
              )}
              <div className="lg:w-2/3 lg:px-8 mt-4 lg:mt-0">
                <p className="font-serif text-pink-300 text-lg font-semibold">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPage;
