import { useEffect, useRef, useState } from "react";
import { Leaf, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Pure Vegetarian",
    description:
      "Every dish on our menu is crafted without any non-veg ingredients. We use fresh, 100% real dairy paneer in all our paneer preparations.",
  },
  {
    icon: Sparkles,
    title: "Fresh & Quality Ingredients",
    description:
      "From farm-fresh vegetables to premium cheeses and hand-picked spices, we never compromise on what goes into your food.",
  },
  {
    icon: Heart,
    title: "Cozy Cafe Ambiance",
    description:
      "Warm brick walls, curated art, soft lighting, and comfortable seating — The Old Town Cafe is your home away from home.",
  },
];

export default function WhyDifferent() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3D2517]">
            Why We&apos;re Different
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center p-8 bg-[#EDE6DE] transition-all duration-700 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-[#C16A40]/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-[#C16A40]" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#3D2517] mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-[#3D2517]/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
