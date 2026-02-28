import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Users, BadgeCheck, Star, ChevronDown } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Skyroot Azure Heights",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote: "Skyroot didn't just build us an office; they built a space where our company culture could thrive. The attention to structural detail is evident in every corner."
  },
  {
    id: 2,
    name: "Sarah Newman",
    role: "Skyroot Green Valley",
    initials: "SN",
    quote: "The process was transparent from day one. I was nervous about investing in pre-construction, but their regular updates and adherence to timelines built my trust."
  },
  {
    id: 3,
    name: "Tanvir Hossain",
    role: "Skyroot Metropolis",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote: "Outstanding architectural vision. The way they utilized natural light in our apartment complex is simply brilliant. Truly rising to the sky!"
  },
  {
    id: 4,
    name: "Anisul Karim",
    role: "Commercial Partner",
    initials: "AK",
    quote: "We have worked with several developers in the past, but Skyroot's professionalism is unmatched. Their legal documentation is spotless."
  },
  {
    id: 5,
    name: "Mrs. Farhana Islam",
    role: "Skyroot Haven",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote: "My family loves the community vibe at Skyroot Haven. Safe, secure, and beautifully maintained. It's the best investment we've made."
  },
  {
    id: 6,
    name: "Mahmudur Rahman",
    role: "Skyroot Pinnacle",
    initials: "MR",
    quote: "From the initial booking to the handover of the keys, the journey was seamless. The post-handover support team is also very responsive."
  }
];

export const ClientTestimonials = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-white">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-center items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Testimonials</span>
          </nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-neutral mb-4 tracking-tight"
          >
            Trust Built Over Generations
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light"
          >
            Rooted In Trust. Rising To The Sky.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Building2, number: "50+", label: "Projects Delivered" },
            { icon: Users, number: "1.2k+", label: "Satisfied Clients" },
            { icon: BadgeCheck, number: "15+", label: "Years of Excellence" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-secondary">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-neutral mb-4">What Our Partners Say</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hear from the families and businesses who found their place with Skyroot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.slice(0, visibleCount).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4 mt-auto">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                      {testimonial.initials}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-neutral text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-gray-500 hover:text-secondary font-medium transition-colors">
              Load More Reviews
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a237e] relative overflow-hidden">
        {/* Decorative geometric lines */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full border-t border-white/20 transform -skew-y-6 origin-top-left"></div>
            <div className="absolute top-1/2 left-0 w-full h-full border-t border-white/20 transform skew-y-6 origin-bottom-right"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join the hundreds of satisfied families and businesses who have chosen Skyroot for their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
            >
              Contact Us
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
