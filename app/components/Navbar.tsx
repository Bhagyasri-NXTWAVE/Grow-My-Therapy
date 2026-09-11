export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      {/* Logo Area */}
      <div className="text-3xl font-serif text-gray-800">
        Dr. Maya Reynolds
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-gray-600">
        <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
        <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
        <a href="#office" className="hover:text-gray-900 transition-colors">Our Office</a>
        
        {/* Oval Contact Button */}
        <a 
          href="#contact" 
          className="border border-gray-400 px-10 py-2 rounded-full text-gray-800 hover:border-gray-900 hover:text-gray-900 transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}