import Link from 'next/link'

export default function Hero() {
  return (
    <section className="gradient-bg pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🐾 At-Home Pet Grooming Delhi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Salon-Quality <span className="text-orange-500">Grooming</span><br />At Your Doorstep
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Professional groomers come to your home. Stress-free, hygienic, and personalised grooming for your dog or cat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/book" className="btn-primary text-center">
              Book Grooming Now
            </Link>
            <Link href="/#packages" className="btn-secondary text-center">
              View Packages
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 justify-center md:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-500">Happy Pets</div>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.9★</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-500">Expert Groomers</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 bg-orange-100 rounded-full flex items-center justify-center text-9xl shadow-xl">
            🐕
          </div>
        </div>
      </div>
    </section>
  )
}
