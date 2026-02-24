import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { ChevronLeft, Home, Gauge, Fuel } from 'lucide-react';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-white dark:bg-[#09090b] text-slate-900 dark:text-white transition-colors duration-500 px-6 overflow-hidden">
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Animated Icon Group */}
        <div className="relative inline-block mb-8">
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, 0],
              filter: ["drop-shadow(0 0 0px #dc262600)", "drop-shadow(0 0 20px #dc262666)", "drop-shadow(0 0 0px #dc262600)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-20 flex justify-center"
          >
            <div className="p-6 rounded-[2rem] bg-red-600 text-white shadow-2xl shadow-red-500/30">
              <Gauge size={40} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* 404 Ghost Text */}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black tracking-tighter opacity-[0.05] dark:opacity-[0.1] select-none italic text-red-600">
            404
          </h1>
        </div>

        {/* Message */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic">
            Engine <span className="text-red-600">Stalled.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            The road you're looking for has been closed. Let's redirect your route back to the main track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button 
            onClick={() => navigate(-1)}
            className="group w-full sm:w-auto px-10 py-4 rounded-2xl border border-gray-200 dark:border-zinc-800 font-bold flex items-center justify-center gap-2 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 hover:border-red-200 transition-all active:scale-95"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Previous Gear
          </button>

          <button 
            onClick={() => navigate('/')}
            className="group w-full sm:w-auto px-10 py-4 rounded-2xl bg-red-600 text-white font-bold flex items-center justify-center gap-2 shadow-2xl shadow-red-500/20 hover:bg-red-700 transition-all active:scale-95"
          >
            <Home size={18} />
            Showroom Home
          </button>
        </div>

        {/* Bottom Status */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-zinc-900/50">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            <Fuel size={14} className="text-red-600" />
            System Status: <span className="text-red-600">Redirecting...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;