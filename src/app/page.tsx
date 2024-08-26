// src/app/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import MusicPlayer from '@/components/MusicPlayer';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero section */}
      <section className="hero py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/bryan-cee-hero.jpg"
              alt="Bryan Cee"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h1 className="text-4xl font-bold mb-4">Bryan Cee</h1>
            <p className="text-xl mb-6">Blending soulful melodies with poetic storytelling</p>
            <Link href="/music" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Explore My Music
            </Link>
          </div>
        </div>
      </section>

      {/* Featured content section */}
      <section className="featured-content py-12">
        <h2 className="text-3xl font-semibold mb-6">Latest Release</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-medium mb-2">New Single: &quot;Echoes of Yesterday&quot;</h3>
          <p className="mb-4">Experience Bryan&apos;s latest musical journey, available now on all major platforms.</p>
          <Link href="/music" className="text-blue-600 hover:underline">
            Listen Now
          </Link>
        </div>
      </section>

      {/* Brief bio section */}
      <section className="brief-bio py-12">
        <h2 className="text-3xl font-semibold mb-4">About Bryan Cee</h2>
        <p className="text-lg">
          Bryan Cee is an international singer-songwriter known for his emotive vocals and introspective lyrics. 
          With a blend of folk, indie, and soul influences, Bryan&apos;s music resonates with listeners around the globe.
        </p>
        <Link href="/about" className="inline-block mt-4 text-blue-600 hover:underline">
          Learn More
        </Link>
      </section>

      {/* Music player widget */}
      <section className="music-player py-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Track</h2>
        {/* <MusicPlayer trackUrl="/music/featured-track.mp3" trackTitle="Echoes of Yesterday" /> */}
      </section>

      {/* Newsletter signup */}
      <section className="newsletter-signup py-12 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Stay Connected</h2>
        <p className="mb-4">Subscribe to my newsletter for exclusive content and updates.</p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg flex-grow"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;