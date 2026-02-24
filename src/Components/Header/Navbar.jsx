import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Rocket } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || !("theme" in localStorage)
  );
  const location = useLocation();

  // Handle Theme Switching
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Inventory", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const activeStyles = "text-blue-600 dark:text-blue-400 font-bold";
  const inactiveStyles = "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400";

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="md:w-11/12 mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Rocket className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
              Carlux<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? activeStyles : inactiveStyles
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-all active:scale-95"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="p-2 text-gray-900 dark:text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100 dark:border-zinc-900" />
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-500/20">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;