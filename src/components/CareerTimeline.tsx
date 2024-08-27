// src/components/CareerTimeline.tsx

import React from 'react';

const timelineEvents = [
  {
    year: 2010,
    title: "First EP Release",
    description: "Released 'Whispers of Hope', marking the beginning of our conscious encouragement journey."
  },
  {
    year: 2013,
    title: "Debut Album",
    description: "'Echoes of Unity' touched hearts across 20 countries, spreading our message of harmony."
  },
  {
    year: 2015,
    title: "World Tour",
    description: "The 'Bridges of Melody' tour connected souls in 30 cities across 5 continents."
  },
  {
    year: 2018,
    title: "Conscious Music Award",
    description: "Honored with the Global Harmony Award for contributions to peace through music."
  },
  {
    year: 2020,
    title: "Virtual Unity Concert",
    description: "Brought together 1 million viewers online for a message of hope during challenging times."
  },
  {
    year: 2023,
    title: "Latest Album Release",
    description: "'Resonance of Love' debuted at #1, a testament to our growing community of conscious listeners."
  }
];

const CareerTimeline: React.FC = () => {
  return (
    <div className="relative">
      {timelineEvents.map((event, index) => (
        <div key={index} className="mb-8 flex justify-between items-center">
          <div className="w-1/3 text-right pr-8">
            <h3 className="text-xl font-semibold">{event.year}</h3>
          </div>
          <div className="w-2/3 border-l-4 border-blue-500 pl-4 py-4">
            <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerTimeline;