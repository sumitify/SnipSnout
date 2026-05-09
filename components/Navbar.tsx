'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-500">SnipSnout 🐾</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#packages" className="text-gray-600 hover:text-orange-500 transition">Packages</Link>
          <Link href="/#how-it-works" className="text-gray-600 hover:text-orange-500 transition">How It Works</Link>
          <Link href="/#faq" className="text-gray-600 hover:text-orange-500 transition">FAQ</Link>
          <Link href="/book" className="btn-primary text-sm">Book Now</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4">
          <Link href="/#packages" className="text-gray-600" onClick={() => setOpen(false)}>Packages</Link>
          <Link href="/#how-it-works" className="text-gray-600" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/#faq" className="text-gray-600" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/book" className="btn-primary text-center text-sm" onClick={() => setOpen(false)}>Book Now</Link>
        </div>
      )}
    </nav>
  )
}
