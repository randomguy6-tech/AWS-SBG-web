'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Domains from '@/components/domains';
import Benefits from '@/components/benefits';
import Leadership from '@/components/leadership';
import Gallery from '@/components/gallery';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <div id="home" className="scroll-mt-20">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-20">
        <About />
      </div>
      <div id="domains" className="scroll-mt-20">
        <Domains />
      </div>
      <Benefits />
      <div id="leadership" className="scroll-mt-20">
        <Leadership />
      </div>
      <div id="gallery" className="scroll-mt-20">
        <Gallery />
      </div>
      <div id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </div>
      <div id="faq" className="scroll-mt-20">
        <FAQ />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Footer />
      </div>
    </main>
  );
}
