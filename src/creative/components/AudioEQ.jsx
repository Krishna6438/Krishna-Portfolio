import React from 'react';
import { motion } from 'framer-motion';

const AudioEQ = () => {
  const bars = [1, 2, 3, 4, 5];
  
  return (
    <div className="flex items-end gap-1 h-6 ml-4">
      {bars.map((bar, index) => (
        <motion.div
          key={index}
          className="w-1.5 bg-[#d4a853] rounded-t-sm"
          animate={{
            height: ["20%", "100%", "40%", "80%", "30%", "90%"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.15
          }}
          style={{ originY: 1 }}
        />
      ))}
    </div>
  );
};

export default AudioEQ;
