// src/lib/albumData.ts

import { Album } from '@/types';

export const albums: Album[] = [
  {
    id: '1',
    title: "Blue Bird Delux",
    coverImage: "/images/album-covers/blue-bird-delux.jpg",
    releaseDate: "2024-05-15",
    description: "Blue Bird Delux is a soaring journey through the skies of consciousness, inviting listeners to spread their wings and embrace the freedom of self-discovery.",
    behindTheScenes: "The inspiration for Blue Bird Delux came during a transformative hiking trip in the Andes. Surrounded by the majesty of nature and the endless blue sky, I felt a profound connection to the world around me and the limitless potential within each of us.",
    tracks: [
      {
        id: '1',
        title: "Skyward Dreams",
        artist: "Bryan Cee",
        album: "Blue Bird Delux",
        duration: "3:45",
        audioSrc: "/audio/skyward-dreams.mp3",
        lyrics: `Verse 1:
Azure horizons call my name
Winds of change, they fan the flame
Spread these wings, embrace the new
Soaring high in skies of blue

Chorus:
Blue bird rising, hear my song
Echoes of hope, where we belong
In this vastness, we are free
Conscious flight, for you and me

Verse 2:
Clouds of doubt, left far behind
Clear-eyed vision, peace of mind
Every updraft lifts us higher
Fueling dreams and hearts' desire

(Repeat Chorus)

Bridge:
From mountain peaks to valley floors
We'll find the strength to open doors
To understanding, love, and light
Embracing day, transcending night

(Repeat Chorus)

Outro:
Blue bird soaring, spirits high
Painting freedom across the sky`
      },
      // Add more tracks here, following the same structure
    ],
    streamingLinks: [
      { platform: 'Spotify', url: '#', color: 'bg-green-500' },
      { platform: 'Apple Music', url: '#', color: 'bg-red-500' },
      { platform: 'Amazon Music', url: '#', color: 'bg-blue-500' },
      { platform: 'YouTube Music', url: '#', color: 'bg-purple-500' },
    ]
  },
  // Add more albums here, following the same structure
];

export const getAlbumById = (id: string): Album | undefined => {
  return albums.find(album => album.id === id);
};

export const getLatestAlbum = (): Album => {
  return albums.reduce((latest, current) => {
    return new Date(current.releaseDate) > new Date(latest.releaseDate) ? current : latest;
  });
};