import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  const posts = [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400",
    "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=400"
  ];

  return (
    <section className="py-24 bg-white border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-12">
          <div className="p-3 bg-pink-500 rounded-2xl text-white">
            <Instagram className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy">Follow Our Journey</h3>
            <p className="text-navy/40 text-sm font-semibold tracking-widest uppercase">@LetsGoYatraOfficial</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <img src={post} className="w-full h-full object-cover" alt="Instagram Post" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                 <Instagram className="text-white w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
