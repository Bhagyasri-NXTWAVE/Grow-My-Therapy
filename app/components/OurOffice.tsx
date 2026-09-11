export default function OurOffice() {
  return (
    <section id="office" className="bg-white py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Elevated Typography */}
        <div className="w-full lg:w-5/12 space-y-8 z-10">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              The Practice
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              A calm space for <span className="italic text-[#86B3B3]">
  healing.
</span>
            </h2>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            My Santa Monica office is a quiet, private space designed to feel calm and grounding. With natural light and a comfortable, uncluttered environment, clients often share that the space itself helps them feel more at ease the moment they arrive.
          </p>
          
          <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col space-y-4">
            <div>
              <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-1">
                Location
              </h3>
              <p className="text-gray-600">123th Street 45 W, Santa Monica, CA 90401</p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-1">
                Availability
              </h3>
              <p className="text-gray-600">In-person & secure telehealth across California</p>
            </div>
          </div>
        </div>

        {/* Right Side: Staggered Masonry Image Gallery with Hover Effects */}
        <div className="w-full lg:w-7/12 relative">
          <div className="grid grid-cols-2 gap-6 items-center">
            {/* Image 1: Shifted up */}
            <div className="transform -translate-y-8 transition-transform duration-500 hover:-translate-y-10">
              <img 
                src="https://res.cloudinary.com/diddtgqwf/image/upload/v1789119521/office1_hprftf.jpg" 
                alt="Therapy office interior" 
                className="w-full h-[400px] object-cover rounded-sm shadow-xl"
              />
            </div>
            
            {/* Image 2: Shifted down */}
            <div className="transform translate-y-8 transition-transform duration-500 hover:translate-y-6">
              <img 
                src="https://res.cloudinary.com/diddtgqwf/image/upload/v1789119588/office2_ul0woh.jpg" 
                alt="Comfortable therapy seating" 
                className="w-full h-[450px] object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
          
          {/* Decorative background element to show advanced styling */}
          <div className="absolute -z-10 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#faf9f6] rounded-full blur-3xl opacity-50"></div>
        </div>

      </div>
    </section>
  );
}