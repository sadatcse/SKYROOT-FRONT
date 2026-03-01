import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

import testimonialsData from '../../testimonials.json';

const testimonials = testimonialsData;

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-neutral/10 pb-10">
          <div>
            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3 block">Client Stories</span>
            <h2 className="text-4xl md:text-6xl font-serif text-neutral tracking-tight">
              Voices of Trust
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full border border-neutral/20 flex items-center justify-center text-neutral hover:bg-neutral hover:text-white transition-all duration-300 group bg-white"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full border border-neutral/20 flex items-center justify-center text-neutral hover:bg-neutral hover:text-white transition-all duration-300 group bg-white"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image Section */}
              <div className="lg:col-span-5 relative group order-2 lg:order-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-neutral/10 rounded-2xl -z-10 bg-white"></div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-7 space-y-10 order-1 lg:order-2">
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-secondary fill-current" />
                  ))}
                </div>

                <Quote className="w-16 h-16 text-neutral/10 fill-current" />
                
                <h3 className="text-3xl md:text-5xl font-light text-neutral leading-tight">
                  "{testimonials[currentIndex].quote}"
                </h3>
                
                <p className="text-neutral/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                  {testimonials[currentIndex].text}
                </p>
                
                <div className="pt-8 border-t border-neutral/10 flex items-center gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-neutral">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-secondary font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-neutral/40 text-sm mt-1">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
