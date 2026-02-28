import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Office"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">Get In Touch</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto font-medium">
            Let's build your future together. Reach out to our dedicated team for expert real estate guidance.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-neutral mb-4">Send us a Message</h2>
              <p className="text-base-content/60">
                Have a specific project in mind or just want to say hello? Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors appearance-none">
                    <option>Sales Inquiry</option>
                    <option>Investment Opportunity</option>
                    <option>General Support</option>
                    <option>Careers</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral uppercase tracking-widest">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us more about your interest..."
                  className="w-full bg-white border border-base-content/10 rounded-xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-secondary text-white py-5 rounded-xl font-black text-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-secondary/20">
                Submit Request <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-base-100 p-8 rounded-2xl space-y-4 border border-base-content/5">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-secondary" />
                </div>
                <h3 className="font-bold text-lg text-neutral">Call Us</h3>
                <p className="text-base-content/60 text-sm">Mon-Fri from 9am to 6pm.</p>
                <a href="tel:+8801818100503" className="block text-secondary font-bold hover:underline">+88 01818-100 503</a>
              </div>
              <div className="bg-base-100 p-8 rounded-2xl space-y-4 border border-base-content/5">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-secondary" />
                </div>
                <h3 className="font-bold text-lg text-neutral">Email Us</h3>
                <p className="text-base-content/60 text-sm">Our team is here to help.</p>
                <a href="mailto:info@skyrootre.com" className="block text-secondary font-bold hover:underline">info@skyrootre.com</a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-neutral">Our Offices</h3>
              
              <div className="group bg-white p-6 rounded-2xl border border-base-content/5 hover:border-secondary/30 transition-all shadow-sm flex gap-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=200&q=80" alt="Office" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral group-hover:text-secondary transition-colors">Aftab Nagar Branch</h4>
                  <p className="text-base-content/60 text-sm mt-1">Sector 1, Road 4, House 12, Aftab Nagar, Dhaka - 1212, Bangladesh</p>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-2xl border border-base-content/5 hover:border-secondary/30 transition-all shadow-sm flex gap-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=200&q=80" alt="Office" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral group-hover:text-secondary transition-colors">Mohammadpur Branch</h4>
                  <p className="text-base-content/60 text-sm mt-1">Block C, Zakir Hossain Road, Mohammadpur, Dhaka - 1207, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[300px] rounded-3xl overflow-hidden border border-base-content/5 group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80" 
                alt="Map"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral/60 to-transparent flex items-end p-8">
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="text-secondary" />
                  <span className="font-bold uppercase tracking-widest text-sm">Dhaka Headquarters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
