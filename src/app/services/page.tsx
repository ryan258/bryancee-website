// src/app/services/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { CalendarIcon, MicrophoneIcon, UsersIcon } from '@heroicons/react/24/outline';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Harmonizing Hearts, Inspiring Change</h1>
      
      <section className="mb-16">
        <p className="text-xl mb-8">
          Friends, welcome to our shared journey of conscious encouragement. Here, we explore the various ways we can create positive ripples in the world through the transformative power of music and mindful connection. Each service offered is an invitation to join hands in crafting a more harmonious, understanding, and empowered global community.
        </p>
      </section>

      {/* Collaborations Service */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-semibold mb-4">Musical Collaborations: Weaving Threads of Unity</h2>
            <p className="mb-4">
              In the spirit of conscious encouragement, I open my heart and creative space to fellow artists who share our vision of a more connected world. These collaborations are more than just musical projects – they&apos;re bridges between cultures, generations, and perspectives.
            </p>
            <p className="mb-4">
              Together, we&apos;ll explore new sonic landscapes, blend diverse influences, and create music that resonates with the shared hopes and dreams of our global family. Whether you&apos;re a seasoned professional or an emerging talent with a powerful message, I&apos;m excited to combine our unique voices in service of our collective growth.
            </p>
            <h3 className="text-xl font-semibold mb-2">What to Expect:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Open-hearted creative sessions focused on mutual inspiration</li>
              <li>Exploration of themes that align with conscious encouragement</li>
              <li>Professional recording and production support</li>
              <li>Opportunities for live performances and music video creation</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/collaboration.jpg"
              alt="Bryan Cee collaborating with other musicians"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Collaboration Spotlight: &quot;Echoes of Unity&quot;</h3>
          <p className="mb-4">
            In our recent collaboration with the talented Maya Sun, we created &quot;Echoes of Unity,&quot; a song that blends Eastern and Western musical traditions. This project not only resulted in a beautiful piece of music but also fostered a deep cultural exchange and mutual understanding between our artistic communities.
          </p>
          <blockquote className="italic border-l-4 border-blue-500 pl-4 py-2 mb-4">
            &quot;Working with Bryan was a transformative experience. His approach to music as a tool for conscious encouragement opened new dimensions in my own artistry. Together, we created something truly special that continues to inspire our listeners.&quot; - Maya Sun
          </blockquote>
        </div>
      </section>

      {/* Workshops Service */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-semibold mb-4">Empowering Workshops: Nurturing Your Inner Harmony</h2>
            <p className="mb-4">
              These workshops are sacred spaces where we come together to unlock the transformative power of music and self-expression. Whether you&apos;re a budding musician, a seasoned creator, or someone seeking to tap into your innate creativity, these sessions are designed to nurture your unique voice and empower you to share your gift with the world.
            </p>
            <p className="mb-4">
              Through a blend of practical skills, mindfulness techniques, and heart-centered exercises, we&apos;ll explore how music can be a powerful tool for personal growth, healing, and social change.
            </p>
            <h3 className="text-xl font-semibold mb-2">Workshop Offerings:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Songwriting for the Soul: Expressing Your Authentic Voice</li>
              <li>The Rhythm of Mindfulness: Merging Music and Meditation</li>
              <li>Harmonic Healing: Using Sound for Personal and Collective Wellbeing</li>
              <li>Conscious Performance: Connecting Deeply with Your Audience</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/workshop.jpg"
              alt="Bryan Cee leading a music workshop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Workshop Success Story: Sarah&apos;s Journey</h3>
          <p className="mb-4">
            Sarah joined our &quot;Songwriting for the Soul&quot; workshop feeling disconnected from her creativity. Through our guided exercises and supportive community, she rediscovered her passion for music and wrote a deeply personal song about her journey of self-acceptance.
          </p>
          <blockquote className="italic border-l-4 border-blue-500 pl-4 py-2 mb-4">
            &quot;Bryan&apos;s workshop was a turning point in my life. I came in feeling stuck and left with a renewed sense of purpose. The tools and insights I gained have not only improved my songwriting but have also helped me navigate life&apos;s challenges with more grace and authenticity.&quot; - Sarah, Workshop Participant
          </blockquote>
        </div>
      </section>

      {/* Speaking Engagements Service */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-semibold mb-4">Inspirational Speaking: Amplifying the Message of Conscious Encouragement</h2>
            <p className="mb-4">
              In these speaking engagements, we expand the reach of our musical message, using the power of words to inspire, uplift, and catalyze positive change. These talks are not mere presentations, but interactive experiences that blend storytelling, live music, and audience participation to create a truly immersive journey of conscious encouragement.
            </p>
            <p className="mb-4">
              Whether addressing a corporate team, a school assembly, or a spiritual retreat, our goal is to leave every participant with practical tools for personal growth and a renewed sense of their potential to create positive change in the world.
            </p>
            <h3 className="text-xl font-semibold mb-2">Speaking Topics Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>The Harmony of Purpose: Aligning Your Life with Your Highest Calling</li>
              <li>Conscious Creativity: Unleashing Your Innovative Potential</li>
              <li>Building Bridges Through Music: Fostering Unity in Diverse Communities</li>
              <li>The Rhythm of Resilience: Navigating Change with Grace and Courage</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/speaking.jpg"
              alt="Bryan Cee speaking at an event"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Impact Story: Tech Company Transformation</h3>
          <p className="mb-4">
            We were invited to speak at InnovateTech&apos;s annual conference on the theme of &quot;Conscious Creativity.&quot; Through our interactive session, which included live music and group exercises, we helped the team reconnect with their innovative spirit and sense of purpose.
          </p>
          <blockquote className="italic border-l-4 border-blue-500 pl-4 py-2 mb-4">
            &quot;Bryan&apos;s presentation was unlike anything we&apos;ve experienced before. His unique blend of music and motivational speaking created a profound shift in our team&apos;s energy and outlook. Months later, we&apos;re still seeing the positive effects in our company culture and creative output.&quot; - Alex Chen, CEO of InnovateTech
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Let&apos;s Create Harmony Together</h2>
        <p className="text-xl mb-6">
          Whether you&apos;re interested in a musical collaboration, seeking personal growth through our workshops, or looking to inspire your organization, I&apos;m excited to explore how we can work together to spread the message of conscious encouragement.
        </p>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Start the Conversation
        </Link>
      </section>

      {/* Testimonials */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Voices of Transformation</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              &quot;Bryan&apos;s workshop on &apos;The Rhythm of Mindfulness&apos; was a game-changer for our wellness retreat. Participants left with practical tools to integrate music into their daily mindfulness practice. The ripple effects have been amazing to witness.&quot;
            </p>
            <p className="font-semibold">- Dr. Laura Simmons, Wellness Retreat Organizer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              &quot;Collaborating with Bryan on our charity single was an incredible experience. His commitment to conscious encouragement elevated the project, helping us raise awareness and funds for our cause in ways we never imagined possible.&quot;
            </p>
            <p className="font-semibold">- Mark Thompson, Charity Foundation Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;