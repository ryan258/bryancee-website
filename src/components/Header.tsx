'use client';

// components/Header.js
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1>logo</h1>
        {/* <Link href="/">
          <a className="text-2xl font-bold">Bryan Cee</a>
        </Link> */}
        <nav className="hidden md:flex space-x-4">
          {/* <Link href="/"><a className="hover:text-yellow-500">Home</a></Link>*/}
          <Link href="/about"><span className="hover:text-yellow-500">About</span></Link>
          {/*<Link href="/music"><a className="hover:text-yellow-500">Music</a></Link>*/}
          <Link href="/services"><span className="hover:text-yellow-500">Services</span></Link>
          {/*<Link href="/media"><a className="hover:text-yellow-500">Media</a></Link>
          <Link href="/events"><a className="hover:text-yellow-500">Events</a></Link>
          <Link href="/contact"><a className="hover:text-yellow-500">Contact</a></Link> */}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <h1>menu</h1>
          {/* <Link href="/"><a className="block py-2 px-4 text-sm hover:bg-gray-800">Home</a></Link>
          <Link href="/about"><a className="block py-2 px-4 text-sm hover:bg-gray-800">About</a></Link>
          <Link href="/music"><a className="block py-2 px-4 text-sm hover:bg-gray-800">Music</a></Link>
          <Link href="/services"><a className="block py-2 px-4 text-sm hover:bg-gray-800">Services</a></Link>
          <Link href="/media"><a className="block py-2 px-4 text-sm hover:bg-gray-800">Media</a></Link>
          <Link href="/events"><a className="block py-2 px-4 text-sm hover:bg-gray-800">Events</a></Link>
          <Link href="/contact"><a className="block py-2 px-4 text-sm hover:bg-gray-800">Contact</a></Link> */}
        </div>
      )}
    </header>
  )
}