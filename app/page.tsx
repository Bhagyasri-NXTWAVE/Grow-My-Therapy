import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OurOffice from "./components/OurOffice";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <OurOffice />
      <CallToAction />
      <Footer />
    </main>
  );
}