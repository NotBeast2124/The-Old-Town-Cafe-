import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, label, delay }: StatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="text-4xl md:text-5xl font-serif font-bold text-[#C16A40] mb-2">
        {value}
      </div>
      <div className="text-sm text-[#3D2517]/70 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Story() {
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
    <section id="story" ref={sectionRef} className="py-20 md:py-28 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs text-[#C16A40] uppercase tracking-[0.3em] mb-3">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3D2517]">
            Where Every Meal is a Memory
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="The Old Town Cafe - Food is Forever"
                className="w-full h-[400px] md:h-[500px] object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C16A40]/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C16A40]/10 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-[#3D2517]/80 leading-relaxed mb-6">
              Nestled in the heart of Vasai, The Old Town Cafe is more than just
              a place to eat — it&apos;s a space where good food, warm
              conversations, and lasting memories come together. Since July
              2025, we&apos;ve been serving 100% pure vegetarian delights crafted
              with love and the freshest ingredients.
            </p>
            <p className="text-[#3D2517]/80 leading-relaxed mb-8">
              From our signature pizzas to soul-warming beverages, every dish
              tells a story of flavor, quality, and passion. Whether you&apos;re
              here for a quick bite, a leisurely meal with friends, or a quiet
              corner with a book — you&apos;re always family at The Old Town
              Cafe.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#3D2517]/10">
              <AnimatedStat value="4+" label="Years of Serving" delay={0} />
              <AnimatedStat value="100%" label="Pure Vegetarian" delay={200} />
              <AnimatedStat
                value="1000+"
                label="Happy Customers"
                delay={400}
              />
            </div>

            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#menu")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block mt-8 bg-[#C16A40] text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#A8552F] transition-all duration-300"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
