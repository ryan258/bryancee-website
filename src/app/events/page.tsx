// src/app/events/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data - replace with actual data from your CMS or database
const upcomingEvents = [
  { id: 1, date: "2024-09-15", venue: "Madison Square Garden", city: "New York, NY", ticketLink: "https://ticketmaster.com/event1" },
  { id: 2, date: "2024-09-22", venue: "The Hollywood Bowl", city: "Los Angeles, CA", ticketLink: "https://ticketmaster.com/event2" },
  { id: 3, date: "2024-10-05", venue: "Red Rocks Amphitheatre", city: "Morrison, CO", ticketLink: "https://ticketmaster.com/event3" },
  // Add more upcoming events as needed
];

const pastEvents = [
  { id: 1, date: "2023-12-31", venue: "Times Square", city: "New York, NY", image: "/images/past-event-1.jpg" },
  { id: 2, date: "2023-11-15", venue: "O2 Arena", city: "London, UK", image: "/images/past-event-2.jpg" },
  { id: 3, date: "2023-10-01", venue: "Sydney Opera House", city: "Sydney, Australia", image: "/images/past-event-3.jpg" },
  // Add more past events as needed
];

const EventsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Events</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Performances</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border-b">Date</th>
                <th className="p-4 border-b">Venue</th>
                <th className="p-4 border-b">City</th>
                <th className="p-4 border-b">Tickets</th>
              </tr>
            </thead>
            <tbody>
              {upcomingEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="p-4 border-b">{new Date(event.date).toLocaleDateString()}</td>
                  <td className="p-4 border-b">{event.venue}</td>
                  <td className="p-4 border-b">{event.city}</td>
                  <td className="p-4 border-b">
                    <a href={event.ticketLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                      Buy Tickets
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Past Performances</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={`Bryan Cee at ${event.venue}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold">{new Date(event.date).toLocaleDateString()}</p>
                <h3 className="text-xl font-bold mb-2">{event.venue}</h3>
                <p className="text-gray-600">{event.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Book Bryan for Your Event</h2>
        <p className="mb-4">
          Interested in having Bryan Cee perform at your venue or private event? Get in touch with our booking team for availability and rates.
        </p>
        <Link href="/contact" className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
          Contact for Bookings
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Event Calendar</h2>
        <p className="mb-4">
          Stay up-to-date with all of Bryan&apos;s performances by subscribing to his event calendar:
        </p>
        <div className="flex space-x-4">
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Add to Google Calendar
          </a>
          <a href="#" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
            Add to iCal
          </a>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;