import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  PlaneTakeoff,
  ArrowUpRight,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* NAVBAR CONTAINER */}
        <div
          className={`relative flex items-center justify-between rounded-2xl border transition-all duration-500 ${
            isScrolled
              ? "bg-[#07111F]/80 border-white/10 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] px-5 py-3"
              : "bg-white/5 border-white/10 backdrop-blur-xl px-5 py-3"
          }`}
        >
          {/* Glow Layer */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/5 to-orange-500/5 pointer-events-none" />

          {/* LOGO */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            className="relative z-10 flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-[0_0_30px_rgba(255,140,66,0.35)]">
              <PlaneTakeoff className="w-5 h-5 text-white" />
            </div>

            <div className="leading-none">
              <h1 className="text-white font-semibold text-lg tracking-tight">
                LETS GO
              </h1>

              <span className="text-orange-400 italic text-sm font-light tracking-wide">
                yatra
              </span>
            </div>
          </motion.a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -2 }}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-orange-400 transition-all duration-300 hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Badge */}
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm backdrop-blur-xl">
              Premium Travel Agency
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold shadow-[0_0_30px_rgba(255,140,66,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Plan Trip
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>

              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="relative z-10 lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="lg:hidden mt-4 bg-[#07111F]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 border-b border-white/5 text-white/80 hover:text-orange-400 transition-colors text-lg font-medium"
                  >
                    {link.name}
                  </a>
                ))}

                <button className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold shadow-lg">
                  Plan Your Journey
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;