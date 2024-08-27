// src/app/music/page.tsx

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import AlbumCard from '@/components/AlbumCard';
import { albums, getLatestAlbum } from '@/lib/albumData';
import { Track } from '@/types';

const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), {
  ssr: false,
});

const MusicPage = () => {
  const latestAlbum = getLatestAlbum();
  const topTracks: Track[] = albums.flatMap(album => album.tracks.slice(0, 2)).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Musical Journey of Conscious Encouragement</h1>

      {/* Latest Release Feature */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Latest Release: {latestAlbum.title}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={latestAlbum.coverImage}
              alt={`${latestAlbum.title} album cover`}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">{latestAlbum.description}</p>
            <p className="text-lg mb-6">{latestAlbum.behindTheScenes}</p>
            <Link href={`/music/albums/${latestAlbum.id}`} className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
              Experience {latestAlbum.title}
            </Link>
          </div>
        </div>
      </section>

      {/* Top Tracks Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Melodies of Inspiration</h2>
        <p className="text-lg mb-4">
          These songs represent the essence of our journey together. Each one carries a message of hope, unity, and the transformative power of conscious living. Let these melodies be your companions on the path of personal growth and collective harmony.
        </p>
        <MusicPlayer tracks={topTracks} />
      </section>

      {/* Discography Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Musical Legacy</h2>
        <p className="text-lg mb-8">
          Every album in our discography is a chapter in our ongoing story of conscious encouragement. Explore these collections of melodies and lyrics that have touched hearts and inspired positive change across the globe.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              title={album.title}
              coverImage={album.coverImage}
              releaseDate={album.releaseDate}
              description={album.description}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Join Our Harmonic Movement</h2>
        <p className="text-xl mb-6">
          Music has the power to uplift, unite, and inspire. By listening and sharing these melodies of conscious encouragement, you become part of a global community dedicated to positive change. Together, let&apos;s create a world that resonates with empathy, understanding, and love.
        </p>
        <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300">
          Connect with Our Musical Family
        </Link>
      </section>
    </div>
  );
};

export default MusicPage;