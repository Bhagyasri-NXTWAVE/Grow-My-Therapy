export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-8 py-16 gap-12">
      {/* Left Side: Image (Using a placeholder for now to match the layout!) */}
      {/* Left Side: Image with Premium Styling */}
      <div className="w-full lg:w-1/2 relative p-4">
        <div className="absolute -z-10 top-0 left-0 w-[90%] h-[90%] bg-gray-100 rounded-sm"></div>
        <img
          src="https://res.cloudinary.com/diddtgqwf/image/upload/v1789119665/Dr._Maya_Reynolds_qykd67.png" /* Make sure to use your actual file name! */
          alt="Dr. Maya Reynolds"
          className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg"
        />
      </div>

      {/* Right Side: Text & SEO-Optimized Copy */}
      <div className="w-full lg:w-1/2 space-y-6">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Online & In-Person Therapy in Santa Monica, CA
        </p>
        
        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
  Find relief from anxiety, trauma, and{" "}
  <span className="italic text-[#86B3B3]">
  burnout.
</span>
</h1>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          Therapy for high-achieving adults who feel overwhelmed on the inside while looking "functional" on the outside. Let's work together to help you slow down, heal, and build true resilience.
        </p>
        
        <div className="pt-4">
          <a href="#contact" className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300">
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}