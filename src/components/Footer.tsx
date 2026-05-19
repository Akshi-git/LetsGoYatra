import { PlaneTakeoff, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-sunset rounded-lg">
                <PlaneTakeoff className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-accent tracking-tighter">LETS GO <span className="text-sunset">YATRA</span></span>
            </div>
            <p className="text-white/40 leading-relaxed max-w-xs">
              Redefining luxury travel with curated experiences that stay with you forever. Your gateway to the world's most breathtaking destinations.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-sunset transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Destinations', 'Tour Packages', 'Honeymoon', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-sunset transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Trip Categories</h4>
            <ul className="space-y-3">
              {['Domestic Tours', 'International Tours', 'Family Packages', 'Adventure Trips', 'Corporate Tours'].map(cat => (
                <li key={cat}>
                  <a href="#" className="text-white/40 hover:text-sunset transition-colors">{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="text-white/40">Subscribe to get the latest travel deals and inspiration in your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 pr-14 focus:outline-none focus:border-sunset"
              />
              <button className="absolute right-2 top-2 p-3 bg-sunset rounded-xl hover:scale-105 active:scale-95 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center text-center space-y-4 md:space-y-0">
          <p className="text-white/20 text-sm">
            © 2026 Lets Go Yatra. All rights reserved. Designed with passion for travelers.
          </p>
          <div className="flex space-x-8 text-sm text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
