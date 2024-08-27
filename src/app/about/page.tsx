// src/app/about/page.tsx

import React from 'react';
import Image from 'next/image';
import CareerTimeline from '../../components/CareerTimeline';
import TestimonialSlider from "../../components/TestimonialSlider";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Image */}
      <div className="relative h-96 mb-8">
        <Image
          // src="/images/bryan-cee-hero.jpg"
          src="https://place-hold.it/1600x900"
          alt="Bryan Cee performing on stage"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Biography Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Meet Bryan Cee</h1>
        <div className="prose lg:prose-xl">
          <p>
            Friends, I&apos;m Bryan Cee, and I&apos;m thrilled you&apos;re here to share in this musical journey of conscious encouragement. My path in music began in the quiet corners of my childhood home, where the melodies of hope and unity first whispered to my soul.
          </p>
          <p>
            From those early days of strumming an old guitar, to performing on stages across the globe, every step has been guided by a singular vision: to create music that bridges divides, heals hearts, and inspires positive change in our world.
          </p>
          <p>
            My musical style, often described as a soulful blend of folk and indie with hints of world music, is more than just a sound—it&apos;s a vessel for the message of conscious encouragement. Each song is crafted not just to be heard, but to be felt, to resonate with the shared experiences that connect us all.
          </p>
          <p>
            As we continue on this path together, I invite you to join me in exploring the transformative power of music. Let&apos;s create harmony, not just in our melodies, but in our lives and in our world.
          </p>
        </div>
      </section>

      {/* Career Highlights Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Shared Musical Journey</h2>
        <CareerTimeline />
      </section>

      {/* Conscious Encouragement Philosophy */}
      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">The Heart of Conscious Encouragement</h2>
        <div className="prose lg:prose-xl">
          <p>
            Conscious Encouragement is more than a philosophy—it&apos;s a way of life, a commitment to fostering growth, unity, and positive change through the universal language of music. At its core, it&apos;s about recognizing the power we all have to lift each other up and create ripples of positivity that extend far beyond ourselves.
          </p>
          <p>
            Through our music and our actions, we strive to:
          </p>
          <ul>
            <li>Cultivate awareness of our interconnectedness</li>
            <li>Inspire personal growth and self-reflection</li>
            <li>Encourage empathy and understanding across diverse perspectives</li>
            <li>Empower individuals to be agents of positive change in their communities</li>
          </ul>
          <p>
            Every note, every lyric, and every performance is an opportunity to embody these principles. Together, we&apos;re not just making music—we&apos;re creating a movement of heartfelt encouragement and conscious living.
          </p>
        </div>
      </section>

      {/* Testimonials and Press Quotes */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Echoes of Our Impact</h2>
        <TestimonialSlider />
      </section>
    </div>
  );
};

export default AboutPage;