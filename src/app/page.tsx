// src/app/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MusicPlayer from '../components/MusicPlayer';
import SocialFeed from '../components/SocialFeed';
import NewsletterSignup from '../components/NewsletterSignup';
import UpcomingPerformance from '../components/UpcomingPerformance';

const HomePage = () => {
  // Mock data for the featured album and tracks
  const featuredAlbum = {
    title: "Blue Bird Deluxe",
    coverImage: "https://place-hold.it/500x500",
    releaseDate: "2024-05-15",
  };

  const featuredTracks = [
    { 
      id: 1, 
      title: "Ducky the Bird", 
      artist: "Bryan Cee",
      album: "Blue Bird Deluxe", 
      audioSrc: "/audio/so.mp3"
    },
    // Add more tracks as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Harmonize Your Soul, Amplify Your Spirit</h1>
        <p className="text-xl mb-8">Join me on a musical journey of conscious encouragement and personal growth.</p>
        <Link href="/music" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Experience the Music
        </Link>
      </section>

      {/* Featured Album Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Latest Release: {featuredAlbum.title}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={featuredAlbum.coverImage}
              alt={featuredAlbum.title}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Friends, &ldquo;Blue Bird Deluxe&rdquo; is more than just an album; it&quot;s an invitation to join me on a musical journey of self-discovery and positive change. Each track is a stepping stone towards a more harmonious world, both within ourselves and in our communities.
            </p>
            <p className="text-lg mb-6">
              Released on {new Date(featuredAlbum.releaseDate).toLocaleDateString()}, this album represents our shared commitment to fostering unity and personal growth through the universal language of music.
            </p>
            <Link href={`/music/albums/${featuredAlbum.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 hover:underline">
              Explore Our Musical Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Music Player Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Experience the Harmony</h2>
        <MusicPlayer tracks={featuredTracks} />
      </section>

      {/* Mission Statement Section */}
      <section className="mb-16 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Our Shared Path of Conscious Encouragement</h2>
        <p className="text-lg mb-4">
          Together, we embark on a journey of conscious encouragement through the transformative power of music. I believe that every note has the potential to bridge divides, foster understanding, and uplift our collective spirit.
        </p>
        <p className="text-lg">
          Through our shared experiences and the harmony we create, we have the opportunity to nurture personal growth, build meaningful connections, and inspire positive change in our world. Your presence here is a testament to the unity we can achieve through music. Thank you for being an integral part of this musical odyssey.
        </p>
      </section>

      {/* Upcoming Performance Highlight */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Join Us in Concert</h2>
        <UpcomingPerformance />
      </section>

      {/* Social Media Feed */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Connect with Our Musical Community</h2>
        <SocialFeed />
      </section>

      {/* Newsletter Signup */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Continue Our Journey Together</h2>
        <p className="text-xl mb-8">Stay connected and be the first to receive conscious encouragement through exclusive content, new releases, and upcoming events.</p>
        <NewsletterSignup />
      </section>
    </div>
  );
};

export default HomePage;