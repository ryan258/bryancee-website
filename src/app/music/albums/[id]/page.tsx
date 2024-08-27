// src/app/music/albums/[id]/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import ExpandableSection from '@/components/ExpandableSection';
import { getAlbumById } from '@/lib/api';

const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), {
  ssr: false,
});

export async function generateStaticParams() {
  // In a real application, you'd fetch all album IDs here
  // For now, we'll return a mock list
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

const AlbumDetailPage = async ({ params }: { params: { id: string } }) => {
  const album = await getAlbumById(params.id);

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
          
          <h2 className="text-2xl font-semibold mb-4">Behind the Scenes</h2>
          <p className="mb-6">{album.behindTheScenes}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Tracks</h2>
          <MusicPlayer tracks={album.tracks.map(track => ({ ...track, artist: "Bryan Cee", album: album.title }))} />
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Lyrics</h3>
            {album.tracks.map((track) => (
              <ExpandableSection key={track.id} title={track.title}>
                <pre className="whitespace-pre-wrap font-sans">{track.lyrics}</pre>
              </ExpandableSection>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Listen on Your Favorite Platform</h2>
        <div className="flex flex-wrap gap-4">
          {album.streamingLinks.map((link, index) => (
            <a key={index} href={link.url} className={`text-white px-4 py-2 rounded hover:bg-opacity-80 transition duration-300 ${link.color}`}>
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailPage;