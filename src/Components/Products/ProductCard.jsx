import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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
        <div className="group relative h-full flex flex-col rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            {/* Fixed Height Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
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

                {/* Navigation (Keep your buttons and indicators here) */}
            </div>

            {/* Content Area - Flex Grow ensures buttons align at the bottom */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2 gap-2">
                    <div className="flex-1 min-w-0"> {/* min-w-0 prevents flex items from overflowing */}
                        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1 truncate">
                            {product.brand}
                        </p>
                        {/* line-clamp-1 ensures the title never takes more than one line, keeping cards even */}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight line-clamp-1">
                            {product.title}
                        </h3>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-bold">{product.rating}</span>
                    </div>
                </div>

                <div className="mt-4 flex flex-col grow justify-end">
                    <div className="flex flex-col mb-4">
                        <span className="text-2xl font-black text-gray-900 dark:text-white">
                            ${product.price.toLocaleString()}
                        </span>
                        <span className={`text-[10px] font-bold uppercase ${product.stock > 0 ? "text-emerald-500" : "text-rose-500"}`}>
                            {product.stock > 0 ? "● In Stock" : "○ Out of Stock"}
                        </span>
                    </div>

                    <Link
                        to={`/product/${product.id}`}
                        className="relative group/btn overflow-hidden block w-full text-center py-3 rounded-xl font-bold text-white transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-105" />
                        <span className="relative z-10">View Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;