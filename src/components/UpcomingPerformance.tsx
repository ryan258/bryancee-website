// src/components/UpcomingPerformance.tsx

import React from 'react';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline';

interface Performance {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  ticketLink: string;
}

const mockUpcomingPerformance: Performance = {
  id: '1',
  title: "Harmony in Motion Tour",
  date: "2024-09-15",
  time: "20:00",
  venue: "Unity Concert Hall",
  city: "Los Angeles, CA",
  ticketLink: "https://ticketmaster.com/bryancee-harmony-in-motion",
};

const UpcomingPerformance: React.FC = () => {
  const { title, date, time, venue, city, ticketLink } = mockUpcomingPerformance;
  const formattedDate = new Date(date).toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="flex items-center mb-2">
        <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
        <span>{formattedDate} at {time}</span>
      </div>
      <div className="flex items-center mb-4">
        <MapPinIcon className="h-5 w-5 mr-2 text-blue-600" />
        <span>{venue}, {city}</span>
      </div>
      <p className="mb-4">
        Join us for an evening of conscious encouragement and musical harmony. Let&apos;s create a space of unity and positive energy together.
      </p>
      <div className="flex justify-between items-center">
        <Link href="/events" className="text-blue-600 hover:underline">
          View All Upcoming Events
        </Link>
        <a 
          href={ticketLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          <TicketIcon className="h-5 w-5 mr-2" />
          Get Tickets
        </a>
      </div>
    </div>
  );
};

export default UpcomingPerformance;