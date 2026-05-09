const reviews = [
  { name: 'Priya S.', pet: 'Golden Retriever', rating: 5, text: 'Amazing experience! The groomer was so gentle with Bruno. He came back looking and smelling great. Will definitely book again!' },
  { name: 'Rahul M.', pet: 'Persian Cat', rating: 5, text: 'Booked the Tail Lux package for my cat. The groomer was professional and patient. My cat actually seemed to enjoy it for once!' },
  { name: 'Ananya K.', pet: 'Labrador', rating: 5, text: 'Super convenient! No stress of taking the dog to a salon. The groomer arrived on time and did a fantastic job. Highly recommend!' },
  { name: 'Vikram P.', pet: 'Shih Tzu', rating: 5, text: 'The Basic Grooming package is perfect value. My Shih Tzu looks so fresh and clean. The groomer really knows breed-specific cuts.' },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">What Pet Parents Say</h2>
          <p className="text-gray-500 text-lg">Trusted by 500+ happy pets across Delhi</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <div className="font-bold text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.pet} parent</div>
                </div>
                <div className="ml-auto text-yellow-400 text-lg">
                  {'\u2605'.repeat(r.rating)}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
