import { useEffect, useRef, useState } from "react";
import { Gift, Star, Cake, Bell } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Earn Loyalty Points",
    description:
      "Collect points with every order and redeem them for free dishes and drinks.",
  },
  {
    icon: Gift,
    title: "Exclusive Offers",
    description:
      "Be the first to know about seasonal specials, combo deals, and flash discounts.",
  },
  {
    icon: Cake,
    title: "Birthday Surprises",
    description:
      "Get a special birthday treat from us — because your day deserves something sweet!",
  },
  {
    icon: Bell,
    title: "Menu Updates",
    description:
      "Get notified whenever we add exciting new items to our menu.",
  },
];

export default function Loyalty() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="/images/logo.png"
              alt="The Old Town Cafe Logo"
              className="w-16 h-16 mb-6 object-contain"
            />
            <p className="text-xs text-[#C16A40] uppercase tracking-[0.3em] mb-3">
              Loyalty Rewards
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3D2517] mb-4">
              Earn 10 Points for Every &#x20B9;100
            </h2>
            <p className="text-[#3D2517]/70 leading-relaxed mb-8">
              Visit often, earn every time. Join our loyalty program and turn
              every meal into rewards. Redeem points for free sides, drinks, and
              meal upgrades. The more you visit, the more you earn!
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex items-start gap-3 p-4 bg-[#EDE6DE] transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <benefit.icon className="w-5 h-5 text-[#C16A40] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#3D2517] mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-[#3D2517]/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#join"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#join")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block mt-8 bg-[#C16A40] text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#A8552F] transition-all duration-300"
            >
              Join the Family
            </a>
          </div>

          {/* Right Content - Promotional Card */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src="/images/gallery-lamp.jpg"
                alt="The Old Town Cafe Ambiance"
                className="w-full h-[400px] md:h-[500px] object-cover shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-[#F5F0EB]/95 backdrop-blur-sm p-6 text-center">
                  <p className="text-xs text-[#C16A40] uppercase tracking-[0.3em] mb-2">
                    Your Next Visit Earns
                  </p>
                  <p className="text-4xl md:text-5xl font-serif font-bold text-[#3D2517]">
                    Double Points
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
