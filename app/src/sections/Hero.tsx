import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add("fade-in");
    }
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.querySelector("#menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="/images/hero.jpg"
          alt="The Old Town Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div
          ref={contentRef}
          className="bg-[#F5F0EB]/95 backdrop-blur-sm p-8 md:p-12 max-w-lg w-full text-center shadow-2xl"
          style={{ opacity: 0 }}
        >
          <img
            src="/images/logo.png"
            alt="The Old Town Cafe Logo"
            className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 object-contain"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3D2517] mb-4">
            The Old Town Cafe
          </h1>
          <div className="w-16 h-0.5 bg-[#C16A40] mx-auto mb-4" />
          <p className="text-xs md:text-sm text-[#3D2517]/70 uppercase tracking-[0.25em] mb-8">
            100% Pure Vegetarian | Est. July 2025 | Vasai, Mumbai
          </p>
          <button
            onClick={scrollToMenu}
            className="bg-[#C16A40] text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#A8552F] transition-all duration-300 hover:shadow-lg"
          >
            Explore Our Menu
          </button>
          <p className="mt-6 text-xs text-[#3D2517]/50 tracking-widest uppercase">
            www.theoldtowncafe.in
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/80" />
      </div>
    </section>
  );
}
