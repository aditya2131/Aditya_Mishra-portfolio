// components/homepage/media.jsx
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
    description: "A video of a waterfall I captured while traveling.",
  },
  {
    type: "image",
    src: "/image/jaun_elia.jpg",
    description: "A beautiful sunset at the beach.",
  },
  {
    type: "video",
    src: "/video/uchiha.mp4",
    description: "A music festival I attended last summer.",
  },
];

const MediaSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Media Gallery</h2>
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
                  className="w-full lg:w-1/2 object-cover rounded-lg shadow-lg"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full lg:w-1/2 object-cover rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                />
              )}
              <div className="lg:w-1/2 lg:px-8 mt-4 lg:mt-0">
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
