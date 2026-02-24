import React from 'react';
import { CarFront, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#09090b] border-t border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      {/* Subtle Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="w-full md:w-11/12 mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <CarFront className="text-blue-600" size={28} />
              <span className="text-2xl font-black tracking-tighter dark:text-white uppercase italic">
                Carlux
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Redefining the digital showroom experience. Premium vehicles, 
              transparent pricing, and world-class service.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 dark:text-white">Inventory</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Electric Vehicles</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Luxury Sedans</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sport SUVs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Certified Pre-Owned</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 dark:text-white">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Financing Options</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Test Drive Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 dark:text-white">Visit Us</h4>
            <div className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">
              <MapPin size={18} className="text-blue-600 shrink-0" />
              <span>Satkhira,<br /> 9440, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <Phone size={18} className="text-blue-600" />
              <span>+8801327694078</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <Mail size={18} className="text-blue-600" />
              <span>concierge@carlux.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} Carlux Premium Automotive Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase text-gray-400">System Status: Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;