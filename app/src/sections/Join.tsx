import { useState, useEffect, useRef } from "react";
import { Star, Gift, Cake, Bell, Check } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Earn Loyalty Points",
    description: "Collect points with every order and redeem them for free dishes and drinks.",
  },
  {
    icon: Gift,
    title: "Exclusive Offers",
    description: "Be the first to know about seasonal specials, combo deals, and flash discounts.",
  },
  {
    icon: Cake,
    title: "Birthday Surprises",
    description: "Get a special birthday treat from us — because your day deserves something sweet!",
  },
  {
    icon: Bell,
    title: "Menu Updates",
    description: "Get notified whenever we add exciting new items to our menu.",
  },
];

export default function Join() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    birthdate: "",
    favorite: "Everything!",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="join" ref={sectionRef} className="py-20 md:py-28 bg-[#1a1410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Benefits */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0EB] mb-4">
              Register With Us
            </h2>
            <p className="text-[#F5F0EB]/60 mb-10">
              Become a part of The Old Town Cafe family and unlock a world of
              delicious rewards!
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-10 h-10 bg-[#C16A40]/20 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-[#C16A40]" />
                  </div>
                  <div>
                    <h4 className="text-[#F5F0EB] font-medium mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-[#F5F0EB]/50">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-[#F5F0EB] p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#3D2517] mb-2">
                    Welcome to the Family!
                  </h3>
                  <p className="text-sm text-[#3D2517]/60">
                    You&apos;ve successfully registered with The Old Town Cafe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#3D2517] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[#3D2517]/15 text-[#3D2517] text-sm focus:outline-none focus:border-[#C16A40] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3D2517] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[#3D2517]/15 text-[#3D2517] text-sm focus:outline-none focus:border-[#C16A40] transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3D2517] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[#3D2517]/15 text-[#3D2517] text-sm focus:outline-none focus:border-[#C16A40] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3D2517] mb-1.5">
                      Birthdate (for birthday surprise!)
                    </label>
                    <input
                      type="date"
                      value={formData.birthdate}
                      onChange={(e) =>
                        setFormData({ ...formData, birthdate: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[#3D2517]/15 text-[#3D2517] text-sm focus:outline-none focus:border-[#C16A40] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3D2517] mb-1.5">
                      What do you love most?
                    </label>
                    <select
                      value={formData.favorite}
                      onChange={(e) =>
                        setFormData({ ...formData, favorite: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[#3D2517]/15 text-[#3D2517] text-sm focus:outline-none focus:border-[#C16A40] transition-colors"
                    >
                      <option>Pizza</option>
                      <option>Burgers</option>
                      <option>Sandwiches</option>
                      <option>Beverages</option>
                      <option>Everything!</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C16A40] text-white py-3.5 text-sm font-medium uppercase tracking-wider hover:bg-[#A8552F] transition-all duration-300"
                  >
                    Join the Family
                  </button>

                  <p className="text-xs text-[#3D2517]/40 text-center">
                    Your information is safe with us. We never share your
                    details with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
