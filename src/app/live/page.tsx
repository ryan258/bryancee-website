// src/app/live/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline';

// Mock data for upcoming performances
const upcomingPerformances = [
  {
    id: 1,
    title: "Harmony in Motion Tour - Los Angeles",
    date: "2024-09-15",
    time: "20:00",
    venue: "Echoes Auditorium",
    city: "Los Angeles, CA",
    ticketLink: "https://ticketmaster.com/bryancee-los-angeles",
  },
  {
    id: 2,
    title: "Conscious Rhythms Festival",
    date: "2024-10-01",
    time: "18:30",
    venue: "Unity Park",
    city: "Austin, TX",
    ticketLink: "https://ticketmaster.com/bryancee-austin",
  },
  {
    id: 3,
    title: "Acoustic Awakening - Intimate Evening",
    date: "2024-10-15",
    time: "19:00",
    venue: "Serenity Hall",
    city: "New York, NY",
    ticketLink: "https://ticketmaster.com/bryancee-new-york",
  },
];

// Mock data for past performances
const pastPerformances = [
  {
    id: 1,
    title: "Global Harmony Gala",
    date: "2023-12-31",
    venue: "Symphony Center",
    city: "Chicago, IL",
    image: "/images/past-performances/chicago-2023.jpg",
  },
  {
    id: 2,
    title: "Echoes of Unity World Tour - London",
    date: "2023-11-15",
    venue: "Royal Albert Hall",
    city: "London, UK",
    image: "/images/past-performances/london-2023.jpg",
  },
  {
    id: 3,
    title: "Conscious Vibes Festival",
    date: "2023-07-04",
    venue: "Freedom Park",
    city: "Atlanta, GA",
    image: "/images/past-performances/atlanta-2023.jpg",
  },
];

const LivePerformancesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Live Performances: Our Journey of Harmony</h1>

      {/* Upcoming Performances Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Performances: Join Our Harmonic Gathering</h2>
        <p className="text-lg mb-8">
          Friends, I&apos;m thrilled to invite you to our upcoming live experiences. Each performance is more than just a concert—it&apos;s a shared journey of conscious encouragement, where we come together to create a symphony of positive change. Let&apos;s unite our voices, hearts, and spirits in these transformative musical moments.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingPerformances.map((performance) => (
            <div key={performance.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{performance.title}</h3>
                <div className="flex items-center mb-2 text-gray-600">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{new Date(performance.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {performance.time}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>{performance.venue}, {performance.city}</span>
                </div>
                <a 
                  href={performance.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  <TicketIcon className="h-5 w-5 mr-2" />
                  Reserve Your Spot
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Performances Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Past Performances: Echoes of Our Shared Journey</h2>
        <p className="text-lg mb-8">
          Every performance is a chapter in our ongoing story of conscious encouragement. Here, we celebrate the moments we&apos;ve shared, the connections we&apos;ve made, and the positive energy we&apos;ve created together. These memories fuel our journey forward, inspiring us to continue spreading harmony and hope through music.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pastPerformances.map((performance) => (
            <div key={performance.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={performance.image}
                  alt={`${performance.title} at ${performance.venue}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{performance.title}</h3>
                <p className="text-gray-600 mb-2">{new Date(performance.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-gray-700">{performance.venue}, {performance.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Information Section */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Bring the Harmony to Your Event</h2>
        <p className="text-lg mb-6">
          Music has the power to transform spaces, hearts, and minds. If you&apos;re looking to create a truly special experience that resonates with conscious encouragement, I&apos;d be honored to be part of your event. Whether it&apos;s an intimate gathering, a corporate function, or a large-scale festival, together we can craft a performance that aligns with your vision and uplifts your audience.
        </p>
        <p className="text-lg mb-8">
          Let&apos;s collaborate to bring a message of unity, hope, and positive change to your community. Every event is an opportunity to spread more light in the world, and I&apos;m excited to explore how we can make that happen together.
        </p>
        <Link href="/contact" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
          Start the Conversation
        </Link>
      </section>
    </div>
  );
};

export default LivePerformancesPage;