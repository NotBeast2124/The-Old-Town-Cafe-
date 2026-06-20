import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Join", href: "#join" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F0EB]/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/logo.png"
              alt="The Old Town Cafe"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover group-hover:scale-105 transition-transform"
            />
            <span className="font-serif text-lg lg:text-xl font-semibold text-[#3D2517] hidden sm:block">
              The Old Town Cafe
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-[#3D2517]/80 hover:text-[#C16A40] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/917972277573"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C16A40] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#A8552F] transition-colors"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#3D2517]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F5F0EB]/98 backdrop-blur-md border-t border-[#3D2517]/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-[#3D2517] hover:text-[#C16A40] py-2 text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/917972277573"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#C16A40] text-white px-5 py-3 text-sm font-medium hover:bg-[#A8552F] transition-colors mt-3"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
