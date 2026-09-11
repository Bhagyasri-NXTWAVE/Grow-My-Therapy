"use client"; // Tells Next.js this component handles user interaction
import { useState } from "react";

export default function CallToAction() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#e8eceb] py-24 px-8">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight italic">
            Ready to find your footing again<span className="italic text-[#86B3B3]">
  ?
</span>
          </h2>
          <p className="text-lg text-gray-700">
            Take the first step toward feeling more grounded. Fill out the form, and my office will reach out within 24 hours to schedule your initial consultation.
          </p>
        </div>

        {/* Right Side: Booking Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-sm shadow-md border border-gray-100">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <h3 className="text-2xl font-serif text-gray-900">Request Received</h3>
              <p className="text-gray-600">
                Thank you! Dr. Maya Reynolds' office will review your request and contact you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-900 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-600">Full Name</label>
                  <input required type="text" className="border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900 bg-transparent" placeholder="Jane Doe" />
                </div>
                
                {/* Phone Number */}
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-600">Phone Number</label>
                  <input required type="tel" className="border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900 bg-transparent" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Age */}
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-600">Age</label>
                  <input required type="number" className="border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900 bg-transparent" placeholder="e.g. 32" />
                </div>

                {/* Service Requested */}
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-600">Primary Focus</label>
                  <select className="border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900 bg-transparent text-gray-700">
                    <option>Anxiety & Panic</option>
                    <option>Trauma & EMDR</option>
                    <option>Burnout & Perfectionism</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="w-full bg-gray-900 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300">
                  Request Appointment
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}