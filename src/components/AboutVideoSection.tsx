import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2C4A] leading-tight">
                REDEFINING YOUR STANDARD OF <br className="hidden md:block" />
                LIVING
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              <p>
                Skyroot Real Estate was founded in 2009 with the aim to enhance aspects of life for
                people by providing powerful brands, reliable products and a wide range of
                services. It ventured into the real estate sector in 2015 with its "dream team"
                dedicated to merge value and innovation in the evolving real estate sector of
                Bangladesh. Through considerable focus on design, structural dimension, and
                feasibility in the sense of space and resource conservation; as well as
                environmental soundness; we deliver you optimum support in residential and
                commercial accommodation.
              </p>
              <p>
                Conjoining the expertise of different fields to develop and bring in the
                quintessence of contemporary lifestyle, we provide distinguished services and
                strictly maintain project handover deadlines. We assure you to be your most
                reliable developer in Dhaka in terms of integrity and credibility.
              </p>
            </div>

            <button className="px-10 py-3 border border-emerald-600 text-gray-800 font-bold hover:bg-emerald-600 hover:text-white transition-all duration-300 rounded-sm text-sm">
              Learn More
            </button>
          </motion.div>

          {/* Right Video Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video w-full group"
          >
            {!isPlaying ? (
              <div className="relative w-full h-full cursor-pointer overflow-hidden" onClick={() => setIsPlaying(true)}>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
                  alt="Skyroot Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2">
                    The Biggest Developer
                  </h3>
                  <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md mb-6">
                    in Bashundhara R/A
                  </p>
                  
                  {/* Play Button */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600/30 rounded-full animate-ping"></div>
                    <button 
                      className="relative w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-red-700"
                      aria-label="Play Video"
                    >
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/tY_CyFmMDFE?autoplay=1&rel=0"
                title="Skyroot Real Estate Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
