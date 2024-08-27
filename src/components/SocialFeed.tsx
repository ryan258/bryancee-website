// src/components/SocialFeed.tsx

import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

interface SocialPost {
  id: string;
  platform: 'twitter' | 'instagram' | 'facebook';
  content: string;
  date: string;
  likes: number;
}

const mockSocialPosts: SocialPost[] = [
  {
    id: '1',
    platform: 'twitter',
    content: "Just finished rehearsing for our upcoming 'Harmony in Motion' tour. Can't wait to share this journey of conscious encouragement with all of you! #ConsciousEncouragement #HarmonyInMotion",
    date: '2024-08-25',
    likes: 245,
  },
  {
    id: '2',
    platform: 'instagram',
    content: "Behind the scenes at our latest music video shoot. Every frame is a step towards spreading more love and positivity. 🎵❤️ #EchoesOfEncouragement",
    date: '2024-08-23',
    likes: 1089,
  },
  {
    id: '3',
    platform: 'facebook',
    content: "Grateful for another sold-out show last night. Your energy and openness to our message of unity through music is truly inspiring. Together, we're creating a more harmonious world. 🌍🎶",
    date: '2024-08-20',
    likes: 567,
  },
];

const SocialFeed: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockSocialPosts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            {post.platform === 'twitter' && <FaTwitter className="text-blue-400 mr-2" />}
            {post.platform === 'instagram' && <FaInstagram className="text-pink-500 mr-2" />}
            {post.platform === 'facebook' && <FaFacebook className="text-blue-600 mr-2" />}
            <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <p className="text-gray-800 mb-2">{post.content}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>❤️ {post.likes} likes</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialFeed;