import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=600" 
                alt="Travel Team" 
                className="w-full h-80 object-cover rounded-[32px] shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600" 
                alt="Scenic" 
                className="w-full h-64 object-cover rounded-[32px] shadow-2xl"
              />
            </div>
            <div className="pt-12 space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600" 
                alt="Island" 
                className="w-full h-64 object-cover rounded-[32px] shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=600" 
                alt="Resort" 
                className="w-full h-80 object-cover rounded-[32px] shadow-2xl"
              />
            </div>
            {/* Decal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass bg-sunset p-8 rounded-full border-4 border-white shadow-2xl text-white text-center">
              <p className="text-4xl font-display font-bold">15+</p>
              <p className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">Years of Trust</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <SectionHeading 
              subtitle="Our Journey" 
              title="A Passion For Unforgettable Journeys" 
            />
            
            <div className="space-y-6 text-navy/70 leading-relaxed text-lg -mt-8">
              <p>
                Founded in the heart of Hyderabad, <span className="text-navy font-bold">Lets Go Yatra</span> was born from a simple belief: travel should be more than just a change of scenery; it should be a transformation of the soul.
              </p>
              <p>
                We specialize in crafting meticulously designed travel experiences that blend comfort, adventure, and authenticity. From the snow-capped mountains of Kashmir to the pristine beaches of Maldives, we bring you closer to the world's wonders.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {[
                { title: "Affordable Luxury", desc: "Premium stays and travel without the premium price tag." },
                { title: "Local Expertise", desc: "Knowledgeable guides and insider access to hidden gems." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-sand/20 rounded-3xl">
                  <h4 className="text-navy font-bold mb-2">{item.title}</h4>
                  <p className="text-navy/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center space-x-3 text-sunset font-bold group border-b-2 border-sunset/20 pb-2 hover:border-sunset transition-all">
              <span>LEARN MORE ABOUT US</span>
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
