import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Globe } from 'lucide-react';
import Logo from '../assets/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-neutral text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Skyroot Real Estate" className="h-20 w-auto brightness-0 invert" />
            </div>
            <p className="text-base-100/60 text-sm leading-relaxed">
              A premier corporate real estate developer dedicated to structural excellence and urban innovation. Setting the benchmark for over 15 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-base-100/60 text-sm">
              <li><Link to="/projects" className="hover:text-white transition-colors">Completed Projects</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Upcoming Ventures</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Architectural Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Legal Documents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-base-100/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>House 123, Road 45, Gulshan, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@skyroot-realestate.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-base-100/60 text-sm mb-4">Subscribe to get the latest updates and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-secondary"
              />
              <button className="bg-secondary p-2 rounded-lg hover:bg-secondary/90 transition-colors">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base-100/60 text-xs">
            © 2024 Skyroot Real Estate. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-base-100/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
