import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import AlbumCard from '@/components/AlbumCard';

const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), {
  ssr: false,
});

const albums = [
  { 
    id: 1, 
    title: "Echoes of Banana", 
    coverImage: "/images/album-covers/bb.jpeg", 
    releaseDate: "2020-05-15", 
    tracks: ["Banana Boom", "Tropical Nights", "Fruity Melody", "Peeling Away", "Yellow Sunset"]
  },
  { 
    id: 2, 
    title: "Midnight Melodies", 
    coverImage: "/images/album-covers/mm.jpeg", 
    releaseDate: "2018-11-20", 
    tracks: ["Midnight Melody", "Starry Skies", "Lullaby Lane", "Dreamer's Waltz"]
  },
  { 
    id: 3, 
    title: "Solitude's Embrace", 
    coverImage: "/images/album-covers/so.jpeg", 
    releaseDate: "2015-03-10", 
    tracks: ["Solitude's Embrace", "Quiet Reflections", "Peaceful Path", "Inner Calm", "Tranquil Waters", "Serene Sunset"]
  },
];

const featuredTracks = [
  { 
    id: 1, 
    title: "Banana Boom", 
    artist: "Bryan Cee",
    album: "Echoes of Banana", 
    audioSrc: "/audio/bb.mp3"
  },
  { 
    id: 2, 
    title: "Midnight Melodies", 
    artist: "Bryan Cee",
    album: "Midnight Melodies", 
    audioSrc: "/audio/mm.mp3"
  },
  { 
    id: 3, 
    title: "Solitude's Embrace", 
    artist: "Bryan Cee",
    album: "Solitude's Embrace", 
    audioSrc: "/audio/so.mp3"
  },
];

const MusicPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Bryan Cee&apos;s Music</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Tracks</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <MusicPlayer tracks={featuredTracks} />
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