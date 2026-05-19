import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading 
              subtitle="Get In Touch" 
              title="Let's Start Your Journey" 
            />
            
            <p className="text-navy/60 text-lg mb-12 -mt-8 leading-relaxed max-w-md">
              Our travel specialists in Himayat Nagar are ready to help you plan the perfect escape. Visit or call us today.
            </p>

            <div className="space-y-8">
              {[
                { icon: <MapPin className="text-sky" />, label: "Our Office", val: "302, Premium Heights, Himayat Nagar, Hyderabad, TS 500029" },
                { icon: <Phone className="text-sky" />, label: "Call Us", val: "+91 98765 43210" },
                { icon: <Mail className="text-sky" />, label: "Email Us", val: "hello@letsgoyatra.com" }
              ].map((item, i) => (
                <div key={i} className="flex space-x-6 p-6 rounded-3xl bg-sand/20 border border-sand/50">
                  <div className="p-4 bg-white rounded-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy/40 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-navy font-semibold text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button key={i} className="p-4 bg-navy text-white rounded-2xl hover:bg-sunset transition-colors shadow-lg">
                  <Icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 bg-navy rounded-[48px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sunset/20 blur-3xl rounded-full" />
            <h3 className="text-3xl font-display text-white mb-8">Quick Inquiry</h3>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset transition-all"
                    placeholder="+91"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-2">Destination Idea</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset transition-all"
                  placeholder="Tell us where you want to go..."
                />
              </div>
              <button className="w-full bg-sunset hover:bg-sunset/90 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-sunset/20 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>SEND INQUIRY</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button
      <a 
        href="#" 
        className="fixed bottom-10 right-10 z-50 p-5 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-navy font-bold px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          Chat with Expert
        </span>
      </a> */}
    </section>
  );
};

export default Contact;
