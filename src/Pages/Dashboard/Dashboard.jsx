import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, CarFront, ChevronDown, ChevronUp } from "lucide-react";
import ProductCard from "../../Components/Products/ProductCard";
import SkeletonCard from "../../Components/Loader/SkeletonCard";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [loading, setLoading] = useState(true);

    // State for "Show More" logic
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/vehicle")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // SEARCH + SORT Logic (Unchanged and Fully Functional)
    const filteredProducts = useMemo(() => {
        let updated = [...products];

        if (searchTerm) {
            updated = updated.filter((p) =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortOption === "low") {
            updated.sort((a, b) => a.price - b.price);
        } else if (sortOption === "high") {
            updated.sort((a, b) => b.price - a.price);
        }

        // Reset pagination to 4 whenever the user searches or sorts 
        // to ensure they see the most relevant results first.
        return updated;
    }, [products, searchTerm, sortOption]);

    // Derived list for the actual UI
    const displayedProducts = filteredProducts.slice(0, visibleCount);

    const toggleShow = () => {
        if (visibleCount > 4) {
            setVisibleCount(4);
            // Optional: Smooth scroll back to top of grid
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setVisibleCount(filteredProducts.length);
        }
    };




    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#09090b] transition-colors duration-300">
            <div className="w-full md:w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Header */}
                <header className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <CarFront className="text-blue-600 dark:text-blue-400" size={32} />
                        <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white uppercase italic">
                            Carlux <span className="text-blue-600">Inventory</span>
                        </h1>
                    </div>
                </header>

                {/* SEARCH AND SORT BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <div className="relative w-full md:w-1/2 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search make or model..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setVisibleCount(4); // Reset view on search
                            }}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm"
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative w-full">
                            <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            <select
                                className="w-full md:w-56 pl-12 pr-10 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white appearance-none focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer font-medium"
                                value={sortOption}
                                onChange={(e) => {
                                    setSortOption(e.target.value);
                                    setVisibleCount(4); // Reset view on sort
                                }}
                            >
                                <option value="">Sort by Price</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {loading ? (
                        // Show 8 skeletons while loading
                        [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
                    ) : (
                        <AnimatePresence mode="popLayout">
                            {displayedProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    )}
                </div>

                {/* SHOW MORE / LESS BUTTON */}
                {filteredProducts.length > 4 && (
                    <div className="mt-16 flex flex-col items-center gap-4">
                        <p className="text-sm text-gray-500 font-medium">
                            Showing {displayedProducts.length} of {filteredProducts.length} vehicles
                        </p>
                        <button
                            onClick={toggleShow}
                            className="group relative flex items-center gap-2 px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/10"
                        >
                            {visibleCount > 4 ? (
                                <>Show Less <ChevronUp size={20} /></>
                            ) : (
                                <>Show More <ChevronDown size={20} /></>
                            )}
                        </button>
                    </div>
                )}

                {/* EMPTY STATE */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No vehicles found. Try a different search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;