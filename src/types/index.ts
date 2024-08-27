// src/types/index.ts

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  audioSrc: string;
  lyrics: string;
}

export interface StreamingLink {
  platform: string;
  url: string;
  color: string;
}

export interface Album {
  id: string;
  title: string;
  coverImage: string;
  releaseDate: string;
  description: string;
  behindTheScenes: string;
  tracks: Track[];
  streamingLinks: StreamingLink[];
}