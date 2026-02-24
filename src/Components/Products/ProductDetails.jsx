import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Star, ShieldCheck, Truck, RotateCcw, Box } from "lucide-react";
import Loader from "../Loader/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <p className="text-center py-20 text-white">Product not found</p>;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-white pb-20"
    >
      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition"
        >
          <ChevronLeft size={18} /> Back to Inventory
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        
        {/* Left: Media Gallery */}
        <div className="space-y-6">
          <motion.div 
            layoutId="main-img"
            className="aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImg}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={product.images[selectedImg]}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImg(idx)}
                className={`relative flex-shrink-0 w-24 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImg === idx ? "border-blue-600 scale-95" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
              {product.brand} • {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tight">
              {product.title}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center text-yellow-500">
                <Star size={20} fill="currentColor" />
                <span className="ml-1 text-lg font-bold">{product.rating}</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 text-sm font-medium">{product.reviews.length} Verified Reviews</span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">
              ${product.price.toLocaleString()}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-emerald-500 font-semibold text-sm mt-1">
                Save {product.discountPercentage}% today
              </p>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 flex items-center gap-3">
              <ShieldCheck className="text-blue-500" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold">Warranty</p>
                <p className="text-sm font-medium">{product.warrantyInformation}</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 flex items-center gap-3">
              <Truck className="text-purple-500" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold">Shipping</p>
                <p className="text-sm font-medium">{product.shippingInformation}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button className="flex-1 relative group overflow-hidden bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold transition-all active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Contact Dealer</span>
            </button>
            <button className="flex-1 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-8 py-4 rounded-2xl font-bold transition-all">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold mb-8">Specifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl border border-gray-200 dark:border-zinc-800">
          <div>
            <p className="text-gray-500 text-sm mb-1">SKU</p>
            <p className="font-mono font-medium">{product.sku}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Weight</p>
            <p className="font-medium">{product.weight} kg</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Dimensions</p>
            <p className="font-medium">{product.dimensions.width} x {product.dimensions.height} m</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Return Policy</p>
            <p className="font-medium">{product.returnPolicy}</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Community Feedback</h2>
          <button className="text-blue-500 font-semibold hover:underline">Write a review</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {product.reviews.map((review, idx) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={idx} 
              className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} stroke={i < review.rating ? "none" : "currentColor"} />
                ))}
              </div>
              <p className="italic text-gray-700 dark:text-gray-300 mb-4">"{review.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                  {review.reviewerName.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">{review.reviewerName}</p>
                  <p className="text-[10px] text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetails;