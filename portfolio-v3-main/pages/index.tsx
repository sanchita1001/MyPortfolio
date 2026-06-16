import React from 'react';
import Hero from '@/containers/home/hero';
import About from '@/containers/home/about';
import Education from '@/containers/home/education';
import Work from '@/containers/home/work';
import Contact from '@/containers/home/contact';


export default function Home() {
  return (
    <main className="max-w-[2200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Education />
      <Work />
      <Contact />
    </main>
  );
}
