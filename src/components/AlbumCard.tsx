// src/components/AlbumCard.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AlbumCardProps {
  id: string;
  title: string;
  coverImage: string;
  releaseDate: string;
  description: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ id, title, coverImage, releaseDate, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative aspect-square">
        <Image
          src={coverImage}
          alt={`${title} album cover`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">Released: {new Date(releaseDate).toLocaleDateString()}</p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>
        <Link href={`/music/albums/${id}`} className="text-blue-600 hover:underline text-sm">
          Explore Album
        </Link>
      </div>
    </div>
  );
};

export default AlbumCard;