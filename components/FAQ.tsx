'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Which areas in Delhi do you serve?', a: 'We currently serve South Delhi, North Delhi, East Delhi, West Delhi, Noida, and Gurgaon. Enter your pincode on the booking page to check availability.' },
  { q: 'How long does a grooming session take?', a: 'Bath takes 45-60 mins, Basic Grooming 60-90 mins, Full Grooming 90-120 mins, and Tail Lux Premium can take up to 2.5 hours depending on breed and coat condition.' },
  { q: 'Are the grooming products safe for my pet?', a: 'Yes! We use only vet-approved, pet-safe shampoos, conditioners, and grooming products. We can also use your preferred products if you provide them.' },
  { q: 'Can I stay with my pet during grooming?', a: 'Absolutely! One of the best parts of at-home grooming is that you can watch the entire session. Many pets feel more comfortable with their owner nearby.' },
  { q: 'What if my pet is aggressive or anxious?', a: 'Please mention this in the pet notes during booking. Our groomers are trained to handle nervous pets with extra patience and care.' },
  { q: 'How do I pay?', a: 'We accept UPI, credit/debit cards, and net banking. Payment can be made online at the time of booking or cash after the session.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="py-20 px-4 gradient-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-lg">Everything you need to know about SnipSnout</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900">{f.q}</span>
                <span className="text-orange-500 text-xl flex-shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
