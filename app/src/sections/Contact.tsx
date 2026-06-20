import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Contact() {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs text-[#C16A40] uppercase tracking-[0.3em] mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3D2517]">
            Visit Us Today
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C16A40]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C16A40]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#3D2517] uppercase tracking-wider mb-2">
                    Address
                  </h4>
                  <div className="text-sm text-[#3D2517]/70 leading-relaxed">
                    <p className="font-medium text-[#3D2517]">
                      The Old Town Cafe
                    </p>
                    <p>Shop No. 6</p>
                    <p>Vasant Karishma CHSL</p>
                    <p>60 Ft Road, Ambadi Road</p>
                    <p>Vasai West</p>
                    <p>Maharashtra - 401202</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C16A40]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C16A40]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#3D2517] uppercase tracking-wider mb-2">
                    Phone
                  </h4>
                  <a
                    href="tel:+917972277573"
                    className="text-sm text-[#3D2517]/70 hover:text-[#C16A40] transition-colors"
                  >
                    +91 79722 77573
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#3D2517] uppercase tracking-wider mb-2">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/917972277573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#3D2517]/70 hover:text-green-600 transition-colors"
                  >
                    +91 79722 77573
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C16A40]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C16A40]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#3D2517] uppercase tracking-wider mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:theoldtowncafe@gmail.com"
                    className="text-sm text-[#3D2517]/70 hover:text-[#C16A40] transition-colors"
                  >
                    theoldtowncafe@gmail.com
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C16A40]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C16A40]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#3D2517] uppercase tracking-wider mb-2">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-[#3D2517]/70">
                    Open Daily: 11:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[#3D2517]/10">
                <h4 className="text-sm font-semibold text-[#3D2517] uppercase tracking-wider mb-4">
                  Follow Us:
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/theoldtowncafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#C16A40]/10 flex items-center justify-center hover:bg-[#C16A40] group transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-[#C16A40] group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://facebook.com/theoldtowncafe.vasai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#C16A40]/10 flex items-center justify-center hover:bg-[#C16A40] group transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-[#C16A40] group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="h-full min-h-[400px] bg-[#EDE6DE] shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.207682757247!2d72.8109!3d19.3915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzI5LjQiTiA3MsKwNDgnMzkuMiJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Old Town Cafe Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
