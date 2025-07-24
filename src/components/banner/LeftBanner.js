import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 items-center lgl:items-start text-center lgl:text-left px-4 sm:px-8">
      <div className="flex flex-col gap-4">
        <h4 className="text-base sm:text-lg font-normal text-gray-400">WELCOME TO MY WORLD</h4>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Pandian D</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide max-w-[600px] mx-auto lgl:mx-0">
          I use animation as a third dimension to simplify experiences through each interaction. I'm not adding motion just to spruce things up, but doing it in meaningful ways.
        </p>
      </div>

      {/* Social Media Section */}
      <Media />
    </div>
  );
};

export default LeftBanner;
