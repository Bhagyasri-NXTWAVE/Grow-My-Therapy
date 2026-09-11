export default function Footer() {
  return (
    <footer className="bg-white py-12 px-8 border-t border-gray-200 text-sm text-gray-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-serif text-gray-900 mb-4">Dr. Maya Reynolds, PsyD</h3>
          <p>Licensed Clinical Psychologist</p>
          <p>Santa Monica, CA</p>
        </div>
        
        {/* Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-gray-900 uppercase tracking-widest mb-2">Navigate</h4>
          <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-gray-900 uppercase tracking-widest mb-2">Contact</h4>
          <p>123th Street 45 W</p>
          <p>Santa Monica, CA 90401</p>
          <a href="mailto:hello@drmayareynolds.com" className="hover:text-gray-900 transition-colors">
            hello@drmayareynolds.com
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Dr. Maya Reynolds. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}