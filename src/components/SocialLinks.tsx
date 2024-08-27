// src/components/SocialLinks.tsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, url: 'https://www.facebook.com/bryancee' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://www.twitter.com/bryancee' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/bryancee' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/bryancee' },
    { name: 'Spotify', icon: FaSpotify, url: 'https://open.spotify.com/artist/bryancee' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          aria-label={`Follow Bryan Cee on ${link.name}`}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;