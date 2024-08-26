// src/app/music/page.tsx

import React from 'react';
import Link from 'next/link';
import AlbumCard from '@/components/AlbumCard';
// import MusicPlayer from '@/components/MusicPlayer';

// Mock data - replace with actual data from your backend or CMS
const albums = [
  { 
    id: 1, 
    title: "Echoes of Yesterday", 
    coverImage: "/images/album-covers/echoes-of-yesterday.jpg", 
    releaseDate: "2020-05-15", 
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"]
  },
  { 
    id: 2, 
    title: "Solitude's Embrace", 
    coverImage: "/images/album-covers/solitudes-embrace.jpg", 
    releaseDate: "2018-11-20", 
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4"]
  },
  { 
    id: 3, 
    title: "Whispers in the Wind", 
    coverImage: "/images/album-covers/whispers-in-the-wind.jpg", 
    releaseDate: "2015-03-10", 
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6"]
  },
];

const featuredTracks = [
  { id: 1, title: "Echoes of Yesterday", album: "Echoes of Yesterday", duration: "3:45" },
  { id: 2, title: "Solitude's Embrace", album: "Solitude's Embrace", duration: "4:12" },
  { id: 3, title: "Whispers in the Wind", album: "Whispers in the Wind", duration: "3:58" },
];

const MusicPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Bryan Cee&apos;s Music</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Tracks</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          {/* <MusicPlayer tracks={featuredTracks} /> */}
          <p className="text-gray-600">Music player component to be implemented</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Albums</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              title={album.title}
              coverImage={album.coverImage}
              releaseDate={album.releaseDate}
              tracks={album.tracks}
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Listen on Streaming Platforms</h2>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Spotify</a>
          <a href="#" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Apple Music</a>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Amazon Music</a>
          <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">YouTube Music</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Behind the Music</h2>
        <p className="mb-4">
          Bryan Cee&apos;s music is a journey through the landscapes of human emotion, blending poetic lyrics with 
          soul-stirring melodies. Each album represents a chapter in Bryan&apos;s artistic evolution, from the raw 
          acoustic sounds of his early work to the more produced, expansive soundscapes of his recent releases.
        </p>
        <Link href="/about" className="text-blue-600 hover:underline">
          Learn more about Bryan&apos;s musical journey
        </Link>
      </section>
    </div>
  );
};

export default MusicPage;