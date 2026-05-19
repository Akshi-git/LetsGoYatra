import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { destinations } from '../data/travelData';
import SectionHeading from '../components/SectionHeading';

const PopularDestinations = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          subtitle="World of Wonders" 
          title="Trending Global Escapes" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer shadow-xl"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-sunset text-white px-3 py-1 rounded-full text-xs font-bold">
                    {dest.duration}
                  </span>
                  <div className="flex items-center text-white space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold">{dest.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-display text-white">{dest.name}</h3>
                
                <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Starting From</p>
                    <p className="text-2xl font-bold text-white">{dest.price}</p>
                  </div>
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
