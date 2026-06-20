import { useState, useEffect, useRef } from "react";
import { menuCategories } from "../data/menuData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("pizzas");
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const currentCategory = menuCategories.find((c) => c.id === activeCategory);

  return (
    <section id="menu" ref={sectionRef} className="py-20 md:py-28 bg-[#1a1410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs text-[#C16A40] uppercase tracking-[0.3em] mb-3">
            Our Menu
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#F5F0EB] mb-4">
            Something for Every Craving
          </h2>
          <p className="text-sm text-[#F5F0EB]/50">
            100% Pure Vegetarian | Prices Inclusive of GST | Fresh 100% Real
            Dairy Paneer
          </p>
        </div>

        {/* Category Tabs - Scrollable */}
        <div
          className={`mb-10 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex overflow-x-auto pb-3 gap-2 scrollbar-hide">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#C16A40] text-white"
                    : "bg-[#F5F0EB]/10 text-[#F5F0EB]/70 hover:bg-[#F5F0EB]/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div
          className={`transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentCategory && (
            <div className="bg-[#F5F0EB]/5 backdrop-blur-sm p-6 md:p-10">
              {/* Pizza size headers */}
              {currentCategory.id === "pizzas" && (
                <div className="flex justify-end gap-8 md:gap-16 mb-6 pb-4 border-b border-[#F5F0EB]/10">
                  <span className="text-xs text-[#F5F0EB]/50 uppercase tracking-wider w-16 text-center">
                    7&quot;
                  </span>
                  <span className="text-xs text-[#F5F0EB]/50 uppercase tracking-wider w-16 text-center">
                    9&quot;
                  </span>
                  <span className="text-xs text-[#F5F0EB]/50 uppercase tracking-wider w-16 text-center">
                    12&quot;
                  </span>
                </div>
              )}

              <div className="space-y-4">
                {currentCategory.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-3 border-b border-[#F5F0EB]/10 last:border-0 animate-fadeIn"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-1">
                      <h4 className="text-[#F5F0EB] font-medium text-sm md:text-base">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-[#F5F0EB]/40 text-xs mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Pizza sizes */}
                    {item.sizes ? (
                      <div className="flex gap-8 md:gap-16">
                        {item.sizes.map((s) => (
                          <span
                            key={s.size}
                            className="text-[#C16A40] font-semibold text-sm w-16 text-center"
                          >
                            &#x20B9;{s.price}/-
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-[#C16A40] font-semibold text-sm whitespace-nowrap">
                        &#x20B9;{item.price}/-
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* GST Note */}
        <div className="mt-8 text-center space-y-1">
          <p className="text-xs text-[#F5F0EB]/40">
            **All Given Prices Are Inclusive of GST**
          </p>
          <p className="text-xs text-[#F5F0EB]/40">
            **All our paneer dishes are prepared using fresh, 100% real dairy
            paneer**
          </p>
        </div>

        {/* WhatsApp Order Button */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/917972277573"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C16A40] text-white px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#A8552F] transition-all duration-300 hover:shadow-lg"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
