// src/app/media/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data - replace with actual data from your CMS or database
const photos = [
  { id: 1, src: "/images/bryan-performance-1.jpg", alt: "Bryan Cee performing at the Global Harmony Festival" },
  { id: 2, src: "/images/bryan-studio-1.jpg", alt: "Bryan Cee in the recording studio, crafting melodies of unity" },
  { id: 3, src: "/images/bryan-backstage-1.jpg", alt: "Bryan Cee sharing a moment of connection with his band before a show" },
  { id: 4, src: "/images/bryan-nature-1.jpg", alt: "Bryan Cee finding inspiration in nature for his conscious music" },
  { id: 5, src: "/images/bryan-workshop-1.jpg", alt: "Bryan Cee leading a musical mindfulness workshop" },
  { id: 6, src: "/images/bryan-collab-1.jpg", alt: "Bryan Cee collaborating with diverse artists for a unity concert" },
];

const videos = [
  { id: 1, title: "Echoes of Unity - Official Music Video", thumbnail: "/images/video-thumbnail-1.jpg", url: "https://www.youtube.com/watch?v=example1" },
  { id: 2, title: "Live at Central Park - A Journey of Conscious Encouragement", thumbnail: "/images/video-thumbnail-2.jpg", url: "https://www.youtube.com/watch?v=example2" },
  { id: 3, title: "Behind the Harmony - The Making of 'Bridges of Melody'", thumbnail: "/images/video-thumbnail-3.jpg", url: "https://www.youtube.com/watch?v=example3" },
  { id: 4, title: "Bryan Cee: Music as a Tool for Global Understanding", thumbnail: "/images/video-thumbnail-4.jpg", url: "https://www.youtube.com/watch?v=example4" },
];

const pressArticles = [
  { id: 1, title: "Bryan Cee's 'Echoes of Unity' Breaks Barriers and Charts", publication: "Rolling Stone", date: "2024-05-15", url: "https://example.com/article1" },
  { id: 2, title: "The Conscious Encouragement Movement: Bryan Cee's Musical Mission", publication: "NPR Music", date: "2024-03-22", url: "https://example.com/article2" },
  { id: 3, title: "Bryan Cee Announces 'Harmony in Motion' World Tour", publication: "Billboard", date: "2024-01-10", url: "https://example.com/article3" },
];

const MediaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Shared Journey: A Visual and Auditory Experience</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Moments of Unity Captured</h2>
        <p className="text-lg mb-6">
          Friends, each image here is a testament to the power of music to bring us together. From intimate studio sessions to grand stage performances, these snapshots capture the essence of our shared journey towards harmony and understanding. Let these visuals inspire you to see the beauty in our diversity and the strength in our unity.
        </p>
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
            Explore More Visual Memories
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Melodies in Motion: Our Video Gallery</h2>
        <p className="text-lg mb-6">
          These videos are windows into our world of conscious encouragement. Each one tells a story of connection, growth, and the transformative power of music. Whether it&apos;s a music video, a live performance, or a behind-the-scenes glimpse, I invite you to immerse yourself in these audiovisual experiences and feel the rhythm of our shared heartbeat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                  Experience the Journey
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/media/videos" className="text-blue-600 hover:underline">
            Dive Deeper into Our Visual Stories
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Echoes in the Media: Our Shared Impact</h2>
        <p className="text-lg mb-6">
          The ripples of our musical journey have touched hearts and minds across the globe. These press features are not just about me, but about the power of our collective voice and the impact of conscious encouragement. Each article is a reflection of the change we&apos;re creating together through music and mindfulness.
        </p>
        <div className="space-y-6">
          {pressArticles.map((article) => (
            <div key={article.id} className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {article.title}
                </a>
              </h3>
              <p className="text-gray-600">
                {article.publication} - {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/media/press" className="text-blue-600 hover:underline">
            Explore More Media Reflections
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Spread the Harmony: Press Resources</h2>
        <p className="mb-4">
          For those who wish to join us in sharing the message of conscious encouragement, I&apos;ve prepared a press kit that encapsulates our journey and mission. It&apos;s a resource that I hope will help amplify our collective voice for positive change.
        </p>
        <p className="mb-4">
          This kit includes high-resolution photos, my biography, and press releases that tell the story of our musical movement. Whether you&apos;re a journalist, a fellow artist, or simply someone passionate about spreading harmony, these resources are here to support our shared vision.
        </p>
        <p className="font-semibold mb-4">
          To access the press kit or for any media inquiries, please reach out to:
        </p>
        <p className="font-semibold">
          Media Relations: media@bryancee.com
        </p>
        <Link href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Connect for Press and Collaborations
        </Link>
      </section>
    </div>
  );
};

export default MediaPage;