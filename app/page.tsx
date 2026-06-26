import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import SocialProof from '@/components/SocialProof';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ScrollAnimator from '@/components/ScrollAnimator';

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollAnimator />
      <header role="banner">
        <NavBar />
      </header>
      <main id="main-content">
        <Hero />
        <Features />
        <Pricing />
        <SocialProof />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
