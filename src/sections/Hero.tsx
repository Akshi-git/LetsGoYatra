import { motion } from 'motion/react';
import { Search, MapPin, Calendar, Users, IndianRupee } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <section className="relative min-h-screen pt-36 md:pt-40 overflow-hidden"></section>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Island"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center lg:text-left mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            {/*<span className="h-px w-12 bg-sunset"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sunset">Premium Travel Experts in Hyderabad</span>*/}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display text-white mb-6 leading-[0.9] drop-shadow-2xl">
            Explore The World <br />
            <span className="text-white opacity-80 italic font-light">With Elegance.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 font-sans tracking-wide">
            Bespoke journeys, unforgettable memories, and luxury travel experiences crafted for the discerning explorer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="px-8 py-4 bg-sunset text-white rounded-xl font-bold shadow-2xl shadow-sunset/30 hover:scale-105 transition-all">
              Explore Packages
            </button>
            <div className="flex items-center gap-3 px-4 py-2 glass rounded-xl">
              <div className="flex -space-x-2">
                {[1,2,3].map(n => (
                  <div key={n} className="w-8 h-8 rounded-full bg-gray-400 border-2 border-navy" />
                ))}
              </div>
              <span className="text-xs text-white/80">10k+ Happy Travelers</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:flex justify-center relative"
        >
          {/* Featured Destination Card */}
          <div className="w-[420px] h-[520px] bg-navy-dark rounded-[40px] relative overflow-hidden card-shadow border border-white/10 group">
             <img src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Switzerland" />
             <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent z-10" />
             <div className="absolute bottom-10 left-10 z-20">
               <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/20">Switzerland</div>
               <h3 className="text-3xl font-bold font-display text-white italic">Alpine Luxury Lodge</h3>
               <p className="text-white/60 text-sm mt-1">8 Days • Starting from ₹1,20,000</p>
             </div>
             <div className="absolute top-6 right-6 z-20 glass w-12 h-12 rounded-full flex items-center justify-center text-sunset">
               ★
             </div>
          </div>

          {/* Floating Tracker */}
          {/* <div className="absolute bottom-12 -left-12 z-30 glass p-5 rounded-3xl w-[220px] shadow-2xl">
            <div className="flex justify-between items-center mb-4">
               <span className="text-[10px] font-bold uppercase text-white/50">Current Status</span>
               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold font-display italic">Bali, ID</div>
            <div className="text-xs text-white/60 mt-1 mb-4">Clear Skies • 28°C</div>
            <div className="h-1 w-full bg-white/10 rounded-full">
              <div className="h-1 w-3/4 bg-sunset rounded-full"></div>
            </div>
            <div className="text-[10px] mt-2 text-right opacity-50 uppercase tracking-widest font-bold">Live Flight Status</div>
          </div> */}
        </motion.div>
      </div>

      {/* Hero Bottom - Fixed Search Bar Style
      <div className="absolute bottom-12 left-0 w-full px-4 md:px-8 z-40 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto glass p-2 rounded-[28px] border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-5 gap-2">
            <div className="px-8 py-3 glass bg-navy-dark border-none rounded-2xl">
              <label className="text-[10px] uppercase font-bold text-white/40 block mb-1 tracking-tighter">Destination</label>
              <span className="text-sm font-medium text-white/80">Where to?</span>
            </div>
            <div className="px-8 py-3 glass bg-navy-dark border-none rounded-2xl">
              <label className="text-[10px] uppercase font-bold text-white/40 block mb-1 tracking-tighter">Check-in</label>
              <span className="text-sm font-medium text-white/80">Add Dates</span>
            </div>
            <div className="px-8 py-3 glass bg-navy-dark border-none rounded-2xl">
              <label className="text-[10px] uppercase font-bold text-white/40 block mb-1 tracking-tighter">Budget</label>
              <span className="text-sm font-medium text-white/80">Luxury Edition</span>
            </div>
            <div className="px-8 py-3 glass bg-navy-dark border-none rounded-2xl">
              <label className="text-[10px] uppercase font-bold text-white/40 block mb-1 tracking-tighter">Travelers</label>
              <span className="text-sm font-medium text-white/80">2 Adults</span>
            </div>
            <button className="bg-sunset text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-sunset/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Search className="w-5 h-5" />
              <span>SEARCH TRIPS</span>
            </button>
          </div>
        </motion.div>
      </div> */}

      {/* Floating Elements Animation */}
      { /*<motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden lg:block absolute bottom-20 left-20 z-10 glass p-6 rounded-2xl shadow-xl border border-white/20"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-sky rounded-full flex items-center justify-center">
            <Users className="text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-lg">10k+</p>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold leading-tight">Elite Travelers</p>
          </div>
        </div>
      </motion.div>*/ }
    </section>
  );
};

export default Hero;
