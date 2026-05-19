import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/travelData';
import SectionHeading from '../components/SectionHeading';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          subtitle="Guest Stories" 
          title="What Our Travelers Say" 
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-sand/10 rounded-[36px] border border-sand shadow-sm relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sunset opacity-10 group-hover:opacity-20 transition-opacity" />
              
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? 'text-sunset fill-sunset'
                        : 'text-navy/10'
                    }`} 
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-navy/80 text-base italic leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* User */}
              <div className="flex items-center space-x-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />

                <div>
                  <h4 className="font-bold text-navy leading-none">
                    {t.name}
                  </h4>

                  <p className="text-sky text-sm font-medium mt-1">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Mini Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 bg-gray-700 rounded-[40px] p-10 md:p-14 text-center text-white relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-display mb-4">
              Inspired by these stories?
            </h3>

            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
              Your next unforgettable journey begins with Lets Go Yatra.
              Experience premium travel, curated adventures, and memories
              designed just for you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;