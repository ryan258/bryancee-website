// src/components/EventCard.tsx

import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location }) => {
  return (
    <div className="event-card">
      {/* TODO: Implement event card layout */}
    </div>
  );
};

export default EventCard;