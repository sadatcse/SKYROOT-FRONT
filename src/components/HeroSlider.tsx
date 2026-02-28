import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Skyroot Signature",
    title: "Serenity in the",
    highlight: "Sky",
    titleEnd: "",
    description: "Experience luxury living with our signature rooftop amenities, blending lush greenery with panoramic views of Dhaka."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599595078742-b6f121983e37?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Structural Integrity",
    title: "Built to",
    highlight: "Last",
    titleEnd: "",
    description: "Inspired by the enduring strength of ancient architecture, our foundations are engineered to withstand the test of time."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Modern Living",
    title: "Interior",
    highlight: "Elegance",
    titleEnd: "",
    description: "Spacious, light-filled interiors designed for contemporary family living, featuring premium finishes and smart home integration."
  }
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-neutral">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src={slides[current].image}
            alt="Hero Background"
            className="w-full h-full object-cover brightness-50"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 7, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white/80 font-bold uppercase tracking-widest mb-4">
              {slides[current].subtitle}
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              {slides[current].title} <span className="text-secondary">{slides[current].highlight}</span> {slides[current].titleEnd}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              {slides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-4">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-secondary w-8" : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
