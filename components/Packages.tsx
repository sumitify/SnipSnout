import Link from 'next/link'

const packages = [
  {
    name: 'Bath',
    price: '₹1,199',
    badge: '',
    color: 'border-blue-200',
    services: ['Bath with shampoo & conditioner', 'Blow dry', 'Choose any 3 free services'],
    free: ['Nail Clipping', 'Ear Cleaning', 'Sanitary Cleaning', 'Mouth Spray', 'Underpaws Cleaning'],
  },
  {
    name: 'Hair Cutting',
    price: '₹1,299',
    badge: '',
    color: 'border-green-200',
    services: ['Full body haircut', 'Choose any 3 free services'],
    free: ['Nail Clipping', 'Ear Cleaning', 'Sanitary Cleaning', 'Mouth Spray', 'Underpaws Cleaning'],
  },
  {
    name: 'Basic Grooming',
    price: '₹1,500',
    badge: 'Most Popular',
    color: 'border-orange-400',
    services: ['Bath with shampoo & conditioner', 'Blow dry', 'Coat Brushout', 'Nail Clipping', 'Ear Cleaning', 'Sanitary Cleaning', 'Underpaws Cleaning', 'Basic face hair cutting', 'Coat conditioning with perfume'],
    free: [],
  },
  {
    name: 'Full Grooming',
    price: '₹2,149',
    badge: '',
    color: 'border-purple-200',
    services: ['Bath with shampoo & conditioner', 'Blow dry', 'Nail Clipping', 'Ear Cleaning', 'Sanitary Cleaning', 'Mouth Spray / Teeth Brush', 'Underpaws Cleaning', 'Full body haircut'],
    free: [],
  },
  {
    name: 'Tail Lux',
    price: '₹2,499',
    badge: 'Premium ✨',
    color: 'border-yellow-400',
    services: ['Bath with shampoo & conditioner', 'Full body haircut & Trimming', 'Hair Styling', 'Breed-Specific Haircut', 'Blow dry', 'Nail Clipping', 'Ear Cleaning', 'Brushing', 'Sanitary Cleaning', 'Mouth Spray', 'Underpaws Cleaning', 'Perfume Spritz', 'Teeth Brush', 'Paw Massage', 'Dematting', 'Body Massage (10 min)', 'Tick Remove by Hand'],
    free: [],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Grooming Packages</h2>
          <p className="text-gray-500 text-lg">Choose the perfect package for your furry friend</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`card border-2 ${pkg.color} p-6 relative`}>
              {pkg.badge && (
                <span className="absolute -top-3 left-6 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
              <div className="text-3xl font-extrabold text-orange-500 mb-4">{pkg.price}</div>
              <ul className="space-y-2 mb-4">
                {pkg.services.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 mt-0.5">✔</span> {s}
                  </li>
                ))}
              </ul>
              {pkg.free.length > 0 && (
                <div className="bg-orange-50 rounded-xl p-3 mb-4">
                  <p className="text-xs font-semibold text-orange-600 mb-2">Choose any 3 free:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.free.map((f) => (
                      <span key={f} className="bg-white border border-orange-200 text-orange-600 text-xs px-2 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              )}
              <Link href={`/book?package=${encodeURIComponent(pkg.name)}`} className="btn-primary w-full text-center block text-sm">
                Book {pkg.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
