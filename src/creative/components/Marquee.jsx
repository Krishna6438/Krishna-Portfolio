import React from 'react';

const Marquee = () => {
  const texts = [
    "Music Production", "•", "Video Editing", "•", "Content Creation", "•", "Digital Strategy", "•"
  ];
  
  // Repeat to ensure smooth infinite scroll
  const marqueeItems = [...texts, ...texts, ...texts, ...texts];

  return (
    <div className="relative w-full overflow-hidden bg-[#d4a853] py-4 transform -skew-y-2 my-20 shadow-2xl z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {marqueeItems.map((text, i) => (
          <span key={i} className="text-[#1a1510] text-xl md:text-2xl font-bold uppercase tracking-widest mx-6 font-outfit">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
