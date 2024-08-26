// src/app/media/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data - replace with actual data from your CMS or database
const photos = [
  { id: 1, src: "/images/bryan-performance-1.jpg", alt: "Bryan Cee performing at Madison Square Garden" },
  { id: 2, src: "/images/bryan-studio-1.jpg", alt: "Bryan Cee in the recording studio" },
  { id: 3, src: "/images/bryan-backstage-1.jpg", alt: "Bryan Cee backstage with his band" },
  // Add more photos as needed
];

const videos = [
  { id: 1, title: "Echoes of Yesterday - Official Music Video", thumbnail: "/images/video-thumbnail-1.jpg", url: "https://www.youtube.com/watch?v=example1" },
  { id: 2, title: "Live at Central Park - Full Concert", thumbnail: "/images/video-thumbnail-2.jpg", url: "https://www.youtube.com/watch?v=example2" },
  { id: 3, title: "Behind the Scenes - Making of 'Solitude's Embrace'", thumbnail: "/images/video-thumbnail-3.jpg", url: "https://www.youtube.com/watch?v=example3" },
  // Add more videos as needed
];

const pressArticles = [
  { id: 1, title: "Bryan Cee's 'Echoes of Yesterday' Tops Charts", publication: "Rolling Stone", date: "2023-05-15", url: "https://example.com/article1" },
  { id: 2, title: "Interview: Bryan Cee on His Musical Journey", publication: "NPR Music", date: "2023-03-22", url: "https://example.com/article2" },
  { id: 3, title: "Bryan Cee Announces World Tour", publication: "Billboard", date: "2023-01-10", url: "https://example.com/article3" },
  // Add more press articles as needed
];

const MediaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Media</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative h-64">
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/media/photos" className="text-blue-600 hover:underline">
            View All Photos
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-75" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/media/videos" className="text-blue-600 hover:underline">
            View All Videos
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Press</h2>
        <div className="space-y-6">
          {pressArticles.map((article) => (
            <div key={article.id} className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {article.title}
                </a>
              </h3>
              <p className="text-gray-600">
                {article.publication} - {article.date}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/media/press" className="text-blue-600 hover:underline">
            View All Press Coverage
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Press Kit</h2>
        <p className="mb-4">
          For media inquiries and to access Bryan Cee&apos;s press kit, including high-resolution photos and official bio, please contact:
        </p>
        <p className="font-semibold">
          Media Relations: media@bryancee.com
        </p>
        <Link href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Contact for Press Inquiries
        </Link>
      </section>
    </div>
  );
};

export default MediaPage;