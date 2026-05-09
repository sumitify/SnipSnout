const steps = [
  { step: '1', icon: '📱', title: 'Book Online', desc: 'Choose your package, enter pet details, and pick a convenient time slot in under 2 minutes.' },
  { step: '2', icon: '👨‍💼', title: 'Groomer Arrives', desc: 'Our trained groomer comes to your doorstep with all professional tools and pet-safe products.' },
  { step: '3', icon: '✂️', title: 'Grooming Done', desc: 'Your pet gets a full grooming session at home. You can stay and watch the whole time.' },
  { step: '4', icon: '⭐', title: 'Rate & Rebook', desc: 'Rate your experience, share feedback, and easily rebook for next time in one tap.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-500 text-lg">Grooming at home in 4 simple steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="card p-6 text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {s.step}
              </div>
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
