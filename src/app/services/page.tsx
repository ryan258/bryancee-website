// src/app/services/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Services</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Live Performances</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/bryan-live-performance.jpg"
              alt="Bryan Cee performing live"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="mb-4">
              Bryan Cee offers captivating live performances for various events and venues. His versatile repertoire 
              and engaging stage presence make him an ideal choice for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Music festivals</li>
              <li>Corporate events</li>
              <li>Weddings and private parties</li>
              <li>Acoustic sets at intimate venues</li>
              <li>Concert halls and theaters</li>
            </ul>
            <p className="mb-4">
              Bryan can tailor his performance to suit your event&apos;s atmosphere, from soul-stirring ballads 
              to upbeat, energetic sets.
            </p>
            <h3 className="text-xl font-semibold mb-2">Sample Setlist</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Echoes of Yesterday</li>
              <li>Whispers in the Wind</li>
              <li>Solitude&apos;s Embrace</li>
              <li>[Add more popular songs]</li>
            </ul>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Book Bryan for Your Event
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Composition</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              With years of experience in songwriting and composition, Bryan offers his talents for various projects:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom song composition for films and TV shows</li>
              <li>Jingles and theme songs for brands and businesses</li>
              <li>Collaborative songwriting for other artists</li>
              <li>Music for theatrical productions</li>
            </ul>
            <p className="mb-4">
              Bryan&apos;s composition process involves close collaboration with clients to ensure the final product 
              aligns perfectly with their vision.
            </p>
            <h3 className="text-xl font-semibold mb-2">Past Projects</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Theme song for [TV Show Name]</li>
              <li>Soundtrack for independent film [Film Name]</li>
              <li>Collaboration with [Artist Name] on their hit single [Song Name]</li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/bryan-composing.jpg"
              alt="Bryan Cee composing"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Music Education</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="mb-4">
            Bryan is passionate about sharing his knowledge and experience with aspiring musicians. He offers:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>One-on-one songwriting mentorship</li>
            <li>Group workshops on lyric writing and composition</li>
            <li>Online courses covering various aspects of the music industry</li>
            <li>Guest lectures at music schools and universities</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Teaching Philosophy</h3>
          <p className="mb-4">
            Bryan believes in nurturing each student&apos;s unique voice and style. His teaching approach focuses on:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Developing strong foundational skills in music theory and composition</li>
            <li>Encouraging creativity and experimentation</li>
            <li>Providing insights into the professional music industry</li>
            <li>Tailoring lessons to each student&apos;s goals and skill level</li>
          </ul>
          <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
            Inquire About Lessons
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="italic bg-gray-100 p-6 rounded-lg">
            &quot;Bryan&apos;s performance was the highlight of our corporate event. His music created the perfect atmosphere 
            and left our guests in awe.&quot;
            <footer className="mt-2 font-semibold">- Jane Doe, Event Planner</footer>
          </blockquote>
          <blockquote className="italic bg-gray-100 p-6 rounded-lg">
            &quot;Working with Bryan on our film&apos;s soundtrack was an incredible experience. His compositions 
            beautifully captured the emotion of each scene.&quot;
            <footer className="mt-2 font-semibold">- John Smith, Film Director</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;