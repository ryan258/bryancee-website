// src/app/music/albums/[id]/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), {
  ssr: false,
});

// Mock data - replace with actual data fetching logic
const albums = [
  { 
    id: 1, 
    title: "Echoes of Banana", 
    coverImage: "/images/album-covers/bb.jpeg", 
    releaseDate: "2020-05-15", 
    description: "A tropical journey through sound, exploring the whimsical world of our favorite yellow fruit.",
    tracks: [
      { id: 1, title: "Banana Boom", duration: "3:45", audioSrc: "/audio/banana-boom.mp3" },
      { id: 2, title: "Tropical Nights", duration: "4:12", audioSrc: "/audio/tropical-nights.mp3" },
      { id: 3, title: "Fruity Melody", duration: "3:56", audioSrc: "/audio/fruity-melody.mp3" },
      { id: 4, title: "Peeling Away", duration: "4:30", audioSrc: "/audio/peeling-away.mp3" },
      { id: 5, title: "Yellow Sunset", duration: "5:03", audioSrc: "/audio/yellow-sunset.mp3" }
    ]
  },
  // Add other albums here...
];

export async function generateStaticParams() {
  return albums.map((album) => ({
    id: album.id.toString(),
  }));
}

const AlbumDetailPage = ({ params }: { params: { id: string } }) => {
  const album = albums.find((a) => a.id === parseInt(params.id));

  if (!album) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/music" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Music
      </Link>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Image
            src={album.coverImage}
            alt={`${album.title} album cover`}
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{album.title}</h1>
          <p className="text-gray-600 mb-4">Released: {new Date(album.releaseDate).toLocaleDateString()}</p>
          <p className="mb-6">{album.description}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Tracks</h2>
          <ul className="space-y-4">
            {album.tracks.map((track) => (
              <li key={track.id} className="flex items-center justify-between">
                <span>{track.title}</span>
                <span className="text-gray-600">{track.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Listen to Album Preview</h2>
        <MusicPlayer tracks={album.tracks.map(track => ({ ...track, artist: "Bryan Cee", album: album.title }))} />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Get the Album</h2>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Spotify</a>
          <a href="#" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Apple Music</a>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Amazon Music</a>
          <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">YouTube Music</a>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailPage;