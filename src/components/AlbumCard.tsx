// src/components/AlbumCard.tsx

import React from 'react';

interface AlbumCardProps {
  title: string;
  coverImage: string;
  releaseDate: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, coverImage, releaseDate }) => {
  return (
    <div className="album-card">
      {/* TODO: Implement album card layout */}
    </div>
  );
};

export default AlbumCard;