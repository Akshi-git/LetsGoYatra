import { motion } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  Globe2,
  Compass,
  CloudSun,
  Wallet,
  MapPinned,
  Plane,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-sky-400" />,
    title: "Smart Personalization",
    desc: "AI curates trips based on your interests, pace, and preferences.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-orange-400" />,
    title: "Budget Optimization",
    desc: "Get luxury experiences perfectly balanced with your budget.",
  },
  {
    icon: <CloudSun className="w-6 h-6 text-cyan-300" />,
    title: "Weather-Aware Plans",
    desc: "Dynamic recommendations based on live destination weather.",
  },
  {
    icon: <MapPinned className="w-6 h-6 text-pink-400" />,
    title: "Hidden Gems Discovery",
    desc: "Explore exclusive local experiences beyond tourist spots.",
  },
];

const itinerary = [
  {
    time: "09:00 AM",
    activity: "Luxury Breakfast at Paris Café",
  },
  {
    time: "11:30 AM",
    activity: "Private Louvre Guided Tour",
  },
  {
    time: "02:00 PM",
    activity: "Seine Riverside Lunch",
  },
  {
    time: "06:00 PM",
    activity: "Sunset Eiffel Dinner Cruise",
  },
];

const stats = [
  { number: "15K+", label: "Trips Planned" },
  { number: "120+", label: "Destinations" },
  { number: "98%", label: "Happy Travelers" },
];

const AITripPlannerUI = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#07111F]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-sky-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-orange-500/20 blur-[140px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Floating Plane */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-24 right-24 hidden lg:block"
        >
          <Plane className="w-12 h-12 text-white/10 rotate-12" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-xs tracking-[3px] uppercase font-semibold text-white">
                AI Powered Travel
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Your Dream
                <br />
                Vacation,
                <br />
                <span className="text-orange-400 italic">
                  Designed by AI
                </span>
              </h2>

              <p className="text-white/65 text-lg leading-relaxed max-w-xl">
                Personalized itineraries, hidden gems, smart budgeting,
                weather-aware planning, and seamless travel experiences —
                powered by next-generation artificial intelligence.
              </p>
            </div>

            {/* AI Typing Animation */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-medium">
                  AI Travel Assistant
                </span>
              </div>

              <div className="space-y-3 text-white/70">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ✨ Analyzing your travel preferences...
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  🌍 Finding hidden gems in Paris...
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  💎 Optimizing your luxury experience...
                </motion.p>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 2 }}
                  className="h-full bg-gradient-to-r from-sky-400 to-orange-400 rounded-full"
                />
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-4">
              {stats.map((item, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-bold text-white">
                    {item.number}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative overflow-hidden px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 text-black font-bold text-lg shadow-[0_0_40px_rgba(255,140,66,0.4)]"
            >
              Build My AI Journey
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative z-20 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop"
                    alt="Paris"
                    className="w-14 h-14 rounded-2xl object-cover"
                  />

                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Paris Luxury Escape
                    </h3>
                    <p className="text-white/40 text-xs uppercase tracking-widest">
                      AI Optimized Journey
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/20 text-sky-300 text-xs font-bold">
                  LIVE AI
                </div>
              </div>

              {/* Weather + Budget */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <CloudSun className="w-6 h-6 text-yellow-300" />
                    <div>
                      <p className="text-white font-semibold">24°C</p>
                      <p className="text-white/50 text-xs">Perfect Weather</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="text-white font-semibold">$2,450</p>
                      <p className="text-white/50 text-xs">
                        Optimized Budget
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4 mt-8">
                {itinerary.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.2,
                    }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4"
                  >
                    <div className="w-14 text-xs font-bold text-orange-400">
                      {step.time}
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-sm">
                        {step.activity}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <button className="w-full mt-8 py-5 rounded-2xl bg-white text-[#07111F] font-bold text-lg hover:scale-[1.02] transition-all">
                Generate My Itinerary
              </button>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -top-10 -right-6 bg-gradient-to-br from-sky-400 to-cyan-400 p-5 rounded-3xl shadow-2xl z-30 hidden md:block"
            >
              <Compass className="w-10 h-10 text-white" />
            </motion.div>

            {/* Floating Rating
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />

                <div>
                  <h4 className="text-white font-bold">4.9/5</h4>
                  <p className="text-white/50 text-xs">
                    Traveler Rating
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AITripPlannerUI;