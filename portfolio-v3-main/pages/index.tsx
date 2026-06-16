import React from 'react';
import Hero from '@/containers/home/hero';
import Work from '@/containers/home/work';
import Contact from '@/containers/home/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Contact />
    </main>
  );
}
