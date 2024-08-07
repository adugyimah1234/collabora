// src/pages/Home.tsx
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CTA />
    </div>
  );
};

export default Home;
