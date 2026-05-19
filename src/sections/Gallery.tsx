import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", size: "col-span-2 row-span-2", title: "Maldives Dreams" },
    { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-1", title: "Alpine Peaks" },
    { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-2", title: "Luxury Resorts" },
    { src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800", size: "col-span-1 row-span-1", title: "Tropical Bali" },
    { src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800", size: "col-span-2 row-span-1", title: "Santorini Sunsets" },
  ];

  return (
    <section className="py-24 bg-sand/10">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          subtitle="Visual Inspirations" 
          title="Captured Moments" 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${img.size} relative group overflow-hidden rounded-[32px] cursor-pointer`}
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={img.title}
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <p className="text-white font-display text-2xl tracking-wide">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
