import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Download } from 'lucide-react';
import { projects } from '../constants';
import { cn } from '../lib/utils';

export const Projects = () => {
  const [filter, setFilter] = React.useState<'All' | 'Upcoming' | 'Ongoing' | 'Completed'>('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.status === filter);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-neutral py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Our Portfolio</h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Discover Skyroot's commitment to architectural excellence and sustainable urban development through our diverse range of world-class residential and commercial projects.
          </p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-base-content/5 pb-8">
          <div className="flex flex-wrap gap-4">
            {['All', 'Upcoming', 'Ongoing', 'Completed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  filter === f 
                    ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                    : "bg-base-content/5 text-base-content/60 hover:bg-base-content/10"
                )}
              >
                {f === 'All' ? 'All Projects' : f}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-neutral hover:text-secondary transition-colors">
            <Download className="w-4 h-4" /> Download Brochure
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative aspect-[3/4] overflow-hidden bg-neutral cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Status Badge */}
              <div className="absolute top-6 left-6">
                <span className={cn(
                  "bg-[#1a1a1a] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest",
                  project.status === 'Completed' ? "bg-neutral" : 
                  project.status === 'Upcoming' ? "bg-neutral" : "bg-secondary"
                )}>
                  {project.status === 'Completed' ? 'HANDED OVER' : 
                   project.status === 'Upcoming' ? 'SOLD OUT' : 
                   project.status}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-black text-white uppercase leading-none mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-8">
                  {project.location}
                </p>
                
                <div className="inline-block border border-white/30 px-8 py-3 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:bg-white hover:text-neutral transition-colors duration-300">
                  Explore
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="bg-base-100 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-20 space-y-8">
            <div className="space-y-2">
              <div className="text-secondary text-xs font-bold uppercase tracking-[0.2em]">Ongoing Flagship</div>
              <h2 className="text-4xl font-black text-neutral">Skyroot Horizon</h2>
            </div>
            <p className="text-base-content/70 leading-relaxed">
              Experience the pinnacle of luxury living in our most ambitious project yet. Skyroot Horizon brings ultra-luxury apartments with panoramic views of the Gulshan Lake and smart home integration.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-secondary" />
                <span className="font-bold text-neutral">Gulshan 2, Dhaka</span>
              </div>
              <div className="text-base-content/40">Est. Completion: 2026</div>
            </div>
            <button className="bg-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20">
              Explore Exclusive Access
            </button>
          </div>
          <div className="h-full min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80" 
              alt="Skyroot Horizon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
