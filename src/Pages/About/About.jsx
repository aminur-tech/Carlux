import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Zap, Award, Globe, BadgeCheck } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Premium Vehicles", value: "500+", icon: <Zap className="text-blue-500" /> },
    { label: "Happy Clients", value: "12k+", icon: <Users className="text-purple-500" /> },
    { label: "Global Locations", value: "24", icon: <Globe className="text-indigo-500" /> },
    { label: "Awards Won", value: "15", icon: <Award className="text-emerald-500" /> },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            {...fadeIn}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Since 1998
          </motion.span>
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]"
          >
            Driving the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400">
              Luxury Mobility.
            </span>
          </motion.h1>
          <motion.p 
            {...fadeIn}
            className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            Carlux isn't just a dealership; it's a curated experience for the most 
            discerning drivers. We bridge the gap between classic craftsmanship and 
            electric innovation.
          </motion.p>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 text-center shadow-sm"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-800">
            <img 
              src="/image.png" 
              alt="Showroom" 
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>
          
          <motion.div {...fadeIn} className="space-y-8">
            <h2 className="text-4xl font-black tracking-tight">The Carlux Gold Standard</h2>
            <div className="space-y-6">
              {[
                { title: "Rigorous Inspection", desc: "Every vehicle undergoes a 250-point technical certification.", icon: <BadgeCheck className="text-blue-500 shrink-0" /> },
                { title: "Direct Logistics", desc: "Door-to-door delivery service across 12 countries.", icon: <ShieldCheck className="text-blue-500 shrink-0" /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
                  {item.icon}
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;