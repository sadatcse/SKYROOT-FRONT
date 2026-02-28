import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from '../assets/logo.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-content/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={Logo} alt="Skyroot Real Estate" className="h-20 w-auto transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-secondary",
                location.pathname === link.path ? "text-secondary" : "text-neutral"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-secondary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
            Get a Quote
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-neutral"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-base-100 border-b border-base-content/5 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-bold transition-colors",
                location.pathname === link.path ? "text-secondary" : "text-neutral"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-secondary text-white py-4 rounded-lg font-bold">
            Get a Quote
          </button>
        </motion.div>
      )}
    </header>
  );
};
