import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../sections/Hero";
import Story from "../sections/Story";
import Specialties from "../sections/Specialties";
import Menu from "../sections/Menu";
import WhyDifferent from "../sections/WhyDifferent";
import Gallery from "../sections/Gallery";
import Loyalty from "../sections/Loyalty";
import Join from "../sections/Join";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0EB]">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Specialties />
        <Menu />
        <WhyDifferent />
        <Gallery />
        <Loyalty />
        <Join />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
