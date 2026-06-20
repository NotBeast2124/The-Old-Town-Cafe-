import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "/images/hero.jpg",
    alt: "The Old Town Cafe - Wall Art & Decor",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-lamp.jpg",
    alt: "Warm Ambient Lighting",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/about.jpg",
    alt: "Food is Forever - Cafe Decor",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
            Our Space
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3D2517]">
            Step Inside The Old Town Cafe
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`${image.span} group relative overflow-hidden cursor-pointer shadow-md`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    minHeight: image.span.includes("row-span-2")
                      ? "400px"
                      : "200px",
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Additional smaller images from menu pages */}
          <div
            className={`col-span-2 md:col-span-1 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative overflow-hidden group cursor-pointer shadow-md">
                <img
                  src="/images/oreo-frappe.jpg"
                  alt="Oreo Frappe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: "95px" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="relative overflow-hidden group cursor-pointer shadow-md">
                <img
                  src="/images/fries.jpg"
                  alt="French Fries"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: "95px" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}
