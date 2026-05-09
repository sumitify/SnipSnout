import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-orange-400 mb-3">SnipSnout 🐾</div>
            <p className="text-gray-400 text-sm">Professional at-home pet grooming service in Delhi. Trained groomers, pet-safe products, doorstep convenience.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Packages</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/book?package=Bath" className="hover:text-orange-400">Bath ₹1,199</Link></li>
              <li><Link href="/book?package=Hair+Cutting" className="hover:text-orange-400">Hair Cutting ₹1,299</Link></li>
              <li><Link href="/book?package=Basic+Grooming" className="hover:text-orange-400">Basic Grooming ₹1,500</Link></li>
              <li><Link href="/book?package=Full+Grooming" className="hover:text-orange-400">Full Grooming ₹2,149</Link></li>
              <li><Link href="/book?package=Tail+Lux" className="hover:text-orange-400">Tail Lux ₹2,499</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#how-it-works" className="hover:text-orange-400">How It Works</Link></li>
              <li><Link href="/#faq" className="hover:text-orange-400">FAQ</Link></li>
              <li><Link href="/book" className="hover:text-orange-400">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +91 98765 43210</li>
              <li>📧 hello@snipsnout.com</li>
              <li>📍 Delhi NCR</li>
              <li className="pt-2">
                <Link href="/book" className="btn-primary text-sm inline-block">Book Grooming</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; 2025 SnipSnout. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Made with ❤️ for pet lovers in Delhi</p>
        </div>
      </div>
    </footer>
  )
}
