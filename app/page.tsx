import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import SocialProof from '@/components/SocialProof';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <header role="banner">
        <NavBar />
      </header>
      <main id="main-content">
        <Hero />
        <Features />
        <Pricing />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
