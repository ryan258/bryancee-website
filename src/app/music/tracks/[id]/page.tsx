// src/app/music/tracks/[id]/page.tsx

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), {
  ssr: false,
});

// Mock data - replace with actual data fetching logic
const tracks = [
  { 
    id: 1, 
    title: "Banana Boom", 
    artist: "Bryan Cee",
    album: "Echoes of Banana",
    albumId: 1,
    releaseDate: "2020-05-15", 
    duration: "3:45",
    audioSrc: "/audio/banana-boom.mp3",
    lyrics: `Verse 1:
Yellow curves in the morning light
Peeling back the layers of the night
Sweet aroma fills the air
Tropical vibes everywhere

Chorus:
Banana boom, feel the rhythm grow
Fruity melody, let it flow
Banana boom, in the jungle deep
Beats so strong, make your heart leap

Verse 2:
Smooth and creamy, nature's treat
Energy boost to move your feet
From tree to table, a journey untold
A simple fruit with a flavor bold

(Repeat Chorus)

Bridge:
In smoothies or on cereal
Versatile and imperial
Potassium-packed, a healthy delight
Fueling your day, from morning to night

(Repeat Chorus)

Outro:
Banana boom, let the flavors soar
A tropical anthem forevermore`,
    description: "\"Banana Boom\" is the opening track of Bryan Cee's 'Echoes of Banana' album. This upbeat, tropical-inspired song sets the tone for the entire album, blending catchy melodies with playful lyrics that celebrate the humble banana."
  },
  // Add other tracks here...
];

export async function generateStaticParams() {
  return tracks.map((track) => ({
    id: track.id.toString(),
  }));
}

const TrackDetailPage = ({ params }: { params: { id: string } }) => {
  const track = tracks.find((t) => t.id === parseInt(params.id));

  if (!track) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/music" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Music
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{track.title}</h1>
      <p className="text-xl text-gray-600 mb-4">by {track.artist}</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Track Info</h2>
          <p><strong>Album:</strong> <Link href={`/music/albums/${track.albumId}`} className="text-blue-600 hover:underline">{track.album}</Link></p>
          <p><strong>Release Date:</strong> {new Date(track.releaseDate).toLocaleDateString()}</p>
          <p><strong>Duration:</strong> {track.duration}</p>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Listen to Track</h2>
            <MusicPlayer tracks={[track]} />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lyrics</h2>
          <pre className="whitespace-pre-wrap font-sans">{track.lyrics}</pre>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">About the Track</h2>
        <p>{track.description}</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Get the Track</h2>
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

export default TrackDetailPage;