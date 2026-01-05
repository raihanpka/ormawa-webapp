// Key Takeaways Section Component - "Ormawa in Rewind"
// Figma Node: 849:3419

import { useState } from "react";
import { KeyTakeawaysHeader } from "../keytakeaways/KeyTakeawaysHeader";
import { KeyTakeawaysSlide1 } from "../keytakeaways/KeyTakeawaysSlide1";
import { KeyTakeawaysSlide2 } from "../keytakeaways/KeyTakeawaysSlide2";
import { motion, AnimatePresence } from "framer-motion";

const imgGroup2608519 = "https://www.figma.com/api/mcp/asset/30c9a508-8791-444f-82c6-b0b695c8ca4a";
const imgExpandCircleRight = "https://www.figma.com/api/mcp/asset/7c8aa73d-c31a-4f56-9a60-49c8ae46cc49";
const imgExpandCircleRight1 = "https://www.figma.com/api/mcp/asset/8385b6b0-b110-4861-bb57-c651db409617";

export function KeyTakeawaysSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div 
      className="relative w-full flex flex-col items-center gap-8 md:gap-[33px] px-4 md:px-8 lg:px-16 py-12 md:py-[60px] min-h-screen justify-center overflow-hidden" 
      data-name="Coba sini bro" 
      data-node-id="849:3419"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        data-node-id="849:3418"
      >
        <img alt="" className="w-full h-full object-cover opacity-50 md:opacity-100" src={imgGroup2608519} />
      </div>

      {/* Title */}
      <KeyTakeawaysHeader />

      {/* Carousel Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[10px] w-full max-w-[1200px] z-10">
        {/* Left Arrow */}
        <div className="hidden md:block flex-none">
          <button 
            onClick={prevSlide}
            className="block cursor-pointer relative rotate-180 scale-y-[-100%] hover:scale-110 transition-transform" 
            style={{ width: '69px', height: '69px' }}
            aria-label="Previous slide"
          >
            <img className="block max-w-none size-full" alt="" src={imgExpandCircleRight} />
          </button>
        </div>

        {/* Content Area */}
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center"
            >
              {currentSlide === 0 ? <KeyTakeawaysSlide1 /> : <KeyTakeawaysSlide2 />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <div className="hidden md:block flex-none">
          <button 
            onClick={nextSlide}
            className="block cursor-pointer relative hover:scale-110 transition-transform" 
            style={{ width: '69px', height: '69px' }}
            aria-label="Next slide"
          >
            <img className="block max-w-none size-full" alt="" src={imgExpandCircleRight1} />
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden gap-4 mt-4">
          <button onClick={prevSlide} className="p-2 bg-gray-100 rounded-full shadow-md">
              <img className="w-8 h-8 rotate-180" alt="Prev" src={imgExpandCircleRight} />
          </button>
          <button onClick={nextSlide} className="p-2 bg-gray-100 rounded-full shadow-md">
              <img className="w-8 h-8" alt="Next" src={imgExpandCircleRight1} />
          </button>
        </div>
      </div>

    </div>
  );
}
