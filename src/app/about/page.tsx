// src/app/about/page.tsx

import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Bryan Cee</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/bryan-cee-profile.jpg"
            alt="Bryan Cee"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Biography</h2>
          <p className="mb-4">
            Bryan Cee is an international singer-songwriter known for his emotive vocals and introspective lyrics. 
            Born and raised in [Hometown], Bryan discovered his passion for music at an early age, learning to play 
            guitar and write songs by the time he was a teenager.
          </p>
          <p className="mb-4">
            With a unique blend of folk, indie, and soul influences, Bryan&apos;s music resonates with listeners 
            around the globe. His journey as a musician has taken him from intimate coffee shop gigs to 
            sold-out concert halls, always staying true to his authentic sound and heartfelt storytelling.
          </p>
        </div>
      </div>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Musical Journey</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>2010: Released debut EP &quot;Whispers in the Wind&quot;</li>
          <li>2012: First national tour, opening for established acts</li>
          <li>2015: Breakthrough album &quot;Echoes of Yesterday&quot; reaches Top 40 charts</li>
          <li>2018: International tour across Europe and Asia</li>
          <li>2020: Released critically acclaimed album &quot;Solitude&apos;s Embrace&quot;</li>
          <li>2023: Launched music education program for underprivileged youth</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Musical Influences</h2>
        <p className="mb-4">
          Bryan&apos;s unique sound is shaped by a diverse range of influences, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The poetic lyricism of Bob Dylan</li>
          <li>The soulful melodies of Sam Cooke</li>
          <li>The innovative songwriting of Joni Mitchell</li>
          <li>The raw emotion of Jeff Buckley</li>
          <li>The storytelling prowess of Johnny Cash</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Awards and Achievements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>2016 Indie Music Award for Best New Artist</li>
          <li>2018 Songwriters Hall of Fame Horizon Award</li>
          <li>2021 Grammy Nomination for Best Folk Album</li>
          <li>Over 500 million streams across all platforms</li>
          <li>Sold-out shows in 20+ countries</li>
        </ul>
      </section>

      <section className="my-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Bryan&apos;s Mission</h2>
        <blockquote className="text-lg italic">
          &quot;My goal is to create music that touches the soul, tells stories that matter, and brings people 
          together. Through my songs, I hope to inspire listeners to reflect, feel deeply, and find connection 
          in our shared human experience.&quot;
        </blockquote>
      </section>
    </div>
  );
};

export default AboutPage;