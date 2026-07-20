'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import About from '@/components/about';
import Domains from '@/components/domains';
import Benefits from '@/components/benefits';
import AWSServices from '@/components/aws-services';
import Timeline from '@/components/timeline';
import Leadership from '@/components/leadership';
import Gallery from '@/components/gallery';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import JoinCommunity from '@/components/join-community';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Stats />
      <div id="about">
        <About />
      </div>
      <div id="domains">
        <Domains />
      </div>
      <Benefits />
      <AWSServices />
      <div id="events">
        <Timeline />
      </div>
      <div id="leadership">
        <Leadership />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <JoinCommunity />
      </div>
      <Footer />
    </main>
  );
}
