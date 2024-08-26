// src/components/AlbumCard.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AlbumCardProps {
  id: number;
  title: string;
  coverImage: string;
  releaseDate: string;
  tracks: string[];
}

const AlbumCard: React.FC<AlbumCardProps> = ({ id, title, coverImage, releaseDate, tracks }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative aspect-square">
        <Image
          src={coverImage}
          alt={`${title} album cover`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300 hover:opacity-75"
          priority={id === 1}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">Released: {new Date(releaseDate).toLocaleDateString()}</p>
        <ul className="list-disc pl-5 mb-4">
          {tracks.slice(0, 3).map((track, index) => (
            <li key={index} className="text-sm text-gray-700">{track}</li>
          ))}
          {tracks.length > 3 && (
            <li className="text-sm text-gray-500 italic">+ {tracks.length - 3} more tracks</li>
          )}
        </ul>
        <Link href={`/music/albums/${id}`} className="text-blue-600 hover:underline text-sm">
          View Album Details
        </Link>
      </div>
    </div>
  );
};

export default AlbumCard;