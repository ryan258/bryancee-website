'use client';
// src/components/TestimonialSlider.tsx


import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    quote: "Bryan Cee's music is a beacon of hope in these tumultuous times. His commitment to conscious encouragement shines through every note.",
    author: "Rolling Stone Magazine"
  },
  {
    quote: "More than a musician, Bryan Cee is a catalyst for positive change. His concerts are transformative experiences that leave you feeling connected and inspired.",
    author: "The Guardian"
  },
  {
    quote: "In a world that often feels divided, Bryan Cee's music reminds us of our shared humanity. It's a soulful call to unity that resonates deeply.",
    author: "NPR Music"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-white p-8 rounded-lg shadow-md">
      <blockquote className="text-xl italic mb-4">
        &quot;{testimonials[currentIndex].quote}&quot;
      </blockquote>
      <p className="text-right font-semibold">- {testimonials[currentIndex].author}</p>
      <button
        onClick={prevTestimonial}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default TestimonialSlider;