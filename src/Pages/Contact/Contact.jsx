import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { a } from 'framer-motion/client';
import { toast } from 'react-toastify';

const Contact = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! Our team will get back to you shortly")
  };

  const contactInfo = [
    { icon: <Phone size={20} />, label: "Call Us", detail: "+8801327694078", sub: "Mon-Fri, 9am - 6pm" },
    { icon: <Mail size={20} />, label: "Email", detail: "concierge@carlux.com", sub: "24/7 Support" },
    { icon: <MapPin size={20} />, label: "Visit", detail: "Satkhira", sub: "khula, Bangladesh" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Header Section */}
      <section className="pt-20 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Connect with <span className="text-blue-600">Carlux.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Whether you're looking for a test drive or a technical consultation, our concierge team is here to assist.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 pb-20">
        
        {/* Left: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
              <textarea rows="5" placeholder="Tell us what you're looking for..." className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Info Panels */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-5 space-y-8"
        >
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl border border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.label}</h4>
                    <p className="text-lg font-bold">{item.detail}</p>
                    <p className="text-sm text-gray-500">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Hours Panel */}
          <div className="p-8 rounded-[2rem] bg-blue-600 text-white relative overflow-hidden">
            <MessageSquare className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock size={20} /> Showroom Hours
            </h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 8:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday</span><span>10:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>Appointment Only</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;