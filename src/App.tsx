/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import PopularDestinations from './sections/PopularDestinations';
import TourPackages from './sections/TourPackages';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import AboutUs from './sections/AboutUs';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import AITripPlannerUI from './sections/AITripPlannerUI';
import Gallery from './sections/Gallery';
import InstagramFeed from './sections/InstagramFeed';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PopularDestinations />
        <WhyChooseUs />
        <TourPackages />
        {/* <AITripPlannerUI /> */}
        <Gallery />
        <AboutUs />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <div className="h-16 border-t border-white/5 bg-[#081f3b] flex items-center justify-between px-10 text-[11px] font-medium tracking-wider text-white/40 uppercase hidden md:flex">
        <div className="flex gap-8">
          <span>24/7 Concierge Support</span>
          <span>Verified Luxury Resorts</span>
          <span>Secure Global Payments</span>
        </div>
        <div className="flex gap-8">
          <span>Office: Himayat Nagar, Hyderabad</span>
          <span className="text-white">WhatsApp: +91 99000 00000</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
