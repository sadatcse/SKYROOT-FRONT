import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects, featuredProjects } from '../constants';
import { Link } from 'react-router-dom';

export const FeaturedProjects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <div className="px-6 lg:px-10 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 w-full">
          <div className="space-y-4 max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C4A] leading-tight">
              BESPOKE ENCLAVES WITH FINESSE <br className="hidden md:block" />
              IN ARCHITECTURE AND DESIGN
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0B2C4A] hover:text-white hover:border-[#0B2C4A] transition-all duration-300 group"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0B2C4A] hover:text-white hover:border-[#0B2C4A] transition-all duration-300 group"
              aria-label="Next project"
            >
              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-6 lg:px-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] relative group h-[600px] rounded-sm overflow-hidden snap-center flex-shrink-0"
            >
              <div className="absolute inset-0 bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-wide">{project.title}</h3>
                <p className="text-white/80 text-sm mb-6 uppercase tracking-wider">{project.location}</p>
                
                <div className="space-y-6">
                  <p className="text-white/70 text-sm line-clamp-2 max-w-sm">
                    {project.description}
                  </p>
                  <Link 
                    to={`/projects`} 
                    className="inline-block px-8 py-3 border border-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
