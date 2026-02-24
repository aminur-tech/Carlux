import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react"; // Using lucide for cleaner icons

const ProductCard = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const nextImage = (e) => {
    e.preventDefault();
    setDirection(1);
    setCurrentImg((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setDirection(-1);
    setCurrentImg((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="group relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      
      {/* Image Carousel Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImg}
            src={product.images[currentImg]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation Arrows - Visible on Hover */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button 
            onClick={prevImage}
            className="p-2 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md text-gray-800 dark:text-white shadow-lg hover:bg-white transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="p-2 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md text-gray-800 dark:text-white shadow-lg hover:bg-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {product.images.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition-all ${idx === currentImg ? "bg-white w-4" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              {product.brand}
            </p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
              {product.title}
            </h3>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold">{product.rating}</span>
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <span className={`text-[10px] font-bold uppercase ${product.stock > 0 ? "text-emerald-500" : "text-rose-500"}`}>
              {product.stock > 0 ? "● In Stock" : "○ Out of Stock"}
            </span>
          </div>
        </div>

        {/* Action Button with Gradient */}
        <Link
          to={`/product/${product.id}`}
          className="relative mt-6 group/btn overflow-hidden block w-full text-center py-3 rounded-xl font-bold text-white transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-105" />
          <span className="relative z-10">View Details</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;