export default function Services() {
  return (
    <section className="max-w-7xl mx-auto w-full px-8 py-16" id="services">
      {/* Section Heading */}
      <div className="mb-12">
  <h2 className="text-4xl font-serif text-gray-800">
    How i can <span className="italic text-[#86B3B3]">
   help.
</span>
  </h2>
</div>
      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Service 1: Anxiety */}
        <div className="flex flex-col">
          <img 
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Person looking thoughtful by the ocean" 
            className="w-full h-64 object-cover rounded-sm mb-6"
          />
          <h3 className="text-2xl font-serif text-gray-900 mb-3">Anxiety <span className="italic text-[#86B3B3]">
  &
</span> Panic</h3>
          <p className="text-gray-600 leading-relaxed">
            For those feeling stuck in overthinking, struggling with constant worry, or bracing for something to go wrong. We work together to understand the emotional and physiological sides of your anxiety.
          </p>
        </div>

        {/* Service 2: Trauma & EMDR */}
        <div className="flex flex-col">
          <img 
            src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Calm nature scene" 
            className="w-full h-64 object-cover rounded-sm mb-6"
          />
          <h3 className="text-2xl font-serif text-gray-900 mb-3">Trauma <span className="italic text-[#86B3B3]">
  &
</span> EMDR</h3>
          <p className="text-gray-600 leading-relaxed">
            Carefully paced therapy for single-incident trauma or complex, long-standing patterns. The emphasis is on safety, stabilization, and helping you feel more regulated in your daily life.
          </p>
        </div>

        {/* Service 3: Burnout */}
        <div className="flex flex-col">
          <img 
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Notebook and coffee on a desk" 
            className="w-full h-64 object-cover rounded-sm mb-6"
          />
          <h3 className="text-2xl font-serif text-gray-900 mb-3">Burnout <span className="italic text-[#86B3B3]">
  &
</span> Perfectionism</h3>
          <p className="text-gray-600 leading-relaxed">
            Supporting entrepreneurs, creatives, and professionals who feel exhausted and disconnected after years of pushing through stress. Let's build more sustainable ways of living and working.
          </p>
        </div>

      </div>
    </section>
  );
}