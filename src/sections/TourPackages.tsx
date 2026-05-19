import { motion } from 'motion/react';
import { Star, Clock, Hotel, Plane, Heart, Car, MapPin } from 'lucide-react';
import { tourPackages } from '../data/travelData';
import SectionHeading from '../components/SectionHeading';

const TourPackages = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'plane': return <Plane className="w-4 h-4" />;
      case 'hotel': return <Hotel className="w-4 h-4" />;
      case 'heart': return <Heart className="w-4 h-4" />;
      case 'car': return <Car className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <section id="packages" className="py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          subtitle="Exclusive Collections" 
          title="Handpicked Tour Packages" 
        />

        <div className="space-y-16">
          {tourPackages.map((category, catIndex) => (
            <div key={category.category}>
              <h3 className="text-2xl font-display text-navy mb-8 pl-4 border-l-4 border-sunset">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-sky/5 rounded-2xl group-hover:bg-sunset/10 transition-colors">
                        <Hotel className="text-sky group-hover:text-sunset w-8 h-8 transition-colors" />
                      </div>
                      <div className="flex items-center text-sunset">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm font-bold">{pkg.rating}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-navy mb-2">{pkg.title}</h4>
                    <div className="flex items-center text-navy/40 text-sm mb-6 space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-sky" />
                        {pkg.days}
                      </div>
                      <div className="flex space-x-2 text-sky/60">
                        {pkg.icons.map((icon, i) => (
                          <span key={i}>{getIcon(icon)}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-navy/5">
                      <div>
                        <p className="text-xs text-navy/40 font-bold uppercase tracking-widest">Package Starst At</p>
                        <p className="text-2xl font-bold text-navy">{pkg.price}</p>
                      </div>
                      <button className="bg-navy hover:bg-sunset text-white px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-sunset/20">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
