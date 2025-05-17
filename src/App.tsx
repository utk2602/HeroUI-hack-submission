import React from 'react';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Features } from './components/features';
import { About } from './components/about';
import { Integrations } from './components/integrations';
import { VideoSection } from './components/video-section';
import { BeamSection } from './components/beam-section';
import { Testimonials } from './components/testimonials';
import { Pricing } from './components/pricing';
import { Changelog } from './components/changelog';
import { FounderSection } from './components/founder-section';
import { Cta } from './components/cta';
import { Footer } from './components/footer';
import { CustomCursor } from './components/custom-cursor';

function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Features />
        <About />
        <BeamSection />
        <Integrations />
        <Testimonials />
        <Pricing />
        <Changelog />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;