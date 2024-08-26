// src/components/EventCard.tsx

import React from 'react';
import { CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  ticketLink?: string;
}

const EventCard: React.FC<EventCardProps> = ({ id, title, date, time, location, venue, ticketLink }) => {
  const eventDate = new Date(date);
  const formattedDate = eventDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center mb-2 text-gray-600">
          <CalendarIcon className="h-5 w-5 mr-2" />
          <span>{formattedDate} at {time}</span>
        </div>
        <div className="flex items-center mb-4 text-gray-600">
          <MapPinIcon className="h-5 w-5 mr-2" />
          <span>{venue}, {location}</span>
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/events/${id}`} className="text-blue-600 hover:underline text-sm">
            Event Details
          </Link>
          {ticketLink && (
            <a 
              href={ticketLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              <TicketIcon className="h-5 w-5 mr-2" />
              Buy Tickets
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;