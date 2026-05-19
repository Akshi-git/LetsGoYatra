import { motion } from 'motion/react';
import { ShieldCheck, CalendarCheck, Headphones, ThumbsUp, Wallet, Settings } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const WhyChooseUs = () => {
  const features = [
    { title: "Best Price Guarantee", desc: "Premium experiences at competitive pricing without compromising quality.", icon: <Wallet className="w-10 h-10 text-sunset" /> },
    { title: "Personalized Plans", desc: "Every journey is unique. We tailor each detail to your specific desires.", icon: <Settings className="w-10 h-10 text-sky" /> },
    { title: "24/7 Support", desc: "Our travel experts are always available to assist you worldwide.", icon: <Headphones className="w-10 h-10 text-sunset" /> },
    { title: "Trusted Experts", desc: "Decades of experience in crafting perfect travel itineraries.", icon: <CalendarCheck className="w-10 h-10 text-sky" /> },
    { title: "Secure Booking", desc: "State-of-the-art security for all your transactions and data.", icon: <ShieldCheck className="w-10 h-10 text-sunset" /> },
    { title: "Customized Packages", desc: "From flights to stays, control every aspect of your holiday.", icon: <ThumbsUp className="w-10 h-10 text-sky" /> }
  ];

  return (
    <section className="py-24 bg-[#081f3b] relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunset/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeading 
          subtitle="The Yatra Edge" 
          title="Why Travel With Us?" 
          dark 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-10 rounded-[40px] border border-white/5 hover:border-sunset/50 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-20 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "10K+", label: "Happy Travelers" },
            { val: "500+", label: "Destinations" },
            { val: "15+", label: "Years Experience" },
            { val: "4.9", label: "Customer Rating" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-display text-sunset mb-2">{stat.val}</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
