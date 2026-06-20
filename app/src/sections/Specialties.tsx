import { useEffect, useRef, useState } from "react";

const specialties = [
  {
    name: "Paneer Tikka Pizza",
    description: "Tandoori-spiced paneer on a cheesy, golden crust",
    price: "From \u20B9320",
    image: "/images/menu-3.jpg",
  },
  {
    name: "Peri Peri Fries",
    description: "Crispy fries tossed in fiery peri peri spice",
    price: "\u20B9100",
    image: "/images/fries.jpg",
  },
  {
    name: "Schezwan Paneer Pizza",
    description: "Indo-Chinese fusion with a cheesy twist",
    price: "From \u20B9340",
    image: "/images/menu-3.jpg",
  },
  {
    name: "Oreo Frappe",
    description: "Rich, creamy Oreo blended with chocolate",
    price: "\u20B9250",
    image: "/images/oreo-frappe.jpg",
  },
  {
    name: "Brownie Bliss",
    description: "Warm brownie meets cold ice cream perfection",
    price: "\u20B9250",
    image: "/images/menu-1.jpg",
  },
];

export default function Specialties() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#EDE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs text-[#C16A40] uppercase tracking-[0.3em] mb-3">
            Our Specialties
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3D2517]">
            Fan Favorites
          </h2>
        </div>

        {/* Specialties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specialties.map((item, index) => (
            <div
              key={item.name}
              className={`group bg-[#F5F0EB] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-serif font-semibold text-[#3D2517]">
                    {item.name}
                  </h3>
                  <span className="text-[#C16A40] font-semibold text-sm whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-[#3D2517]/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
