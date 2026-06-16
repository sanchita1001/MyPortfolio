import React from 'react';
import Hero from '@/containers/home/hero';
import About from '@/containers/home/about';
import Education from '@/containers/home/education';
import Work from '@/containers/home/work';
import Contact from '@/containers/home/contact';
import Achievement from '../containers/about/acheivement';


export default function Home() {
  return (
    <main className="max-w-[2200px] mx-auto w-full px-5 sm:px-10 lg:px-20 flex flex-col gap-32 md:gap-48 py-10">
      <Hero />
      <About />
      <Education />
      <Work />
      <Achievement/>
      <Contact />
    </main>
  );
}
