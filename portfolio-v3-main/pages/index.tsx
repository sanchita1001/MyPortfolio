import React from 'react';
import Hero from '@/containers/home/hero';
import Work from '@/containers/home/work';
import Contact from '@/containers/home/contact';
import AboutHero from '../containers/about/hero';


export default function Home() {
  return (
    <main>
      <Hero />
      <AboutHero/>
      <Work />
      <Contact />
    </main>
  );
}
