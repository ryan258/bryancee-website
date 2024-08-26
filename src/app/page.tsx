// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'
import Layout from '../components/Layout'
import MusicPlayer from '../components/MusicPlayer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bryan Cee - International Musician & Composer</title>
        <meta name="description" content="Bryan Cee is an international singer, songwriter, musician, and composer blending classical expertise with Caribbean vibrancy." />
      </Head>

      <main className="text-gray-800">
        <section className="relative h-screen">
          <Image
            src="/images/bryan-hero.jpg"
            alt="Bryan Cee performing"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4">Bryan Cee</h1>
              <p className="text-2xl mb-8">Bridging Classical Elegance and Caribbean Rhythm</p>
              {/* <Link href="/contact">
                <a className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-400 transition duration-300">Book Now</a>
              </Link> */}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Featured Music</h2>
            <MusicPlayer />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h2>
            {/* Add EventCard component here */}
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Create Music Together</h2>
            <p className="text-xl mb-8">Whether you need a composer, performer, or music educator, I'm here to bring your vision to life.</p>
            {/* <Link href="/services">
              <a className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300">Explore Services</a>
            </Link> */}
          </div>
        </section>
      </main>
    </Layout>
  )
}