import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
const LOGO_URL = "https://cdn-ai.onspace.ai/onspace/files/c6czrJC53opq5voqoKJFUM/pasted-image-1789214012264-0.png";

const WHATSAPP_NUMBER = "256700000000";

const quickLinks = [
  { label: "Our Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Source Markets", href: "#markets" },
  { label: "Get a Quote", href: "#contact" },
];

const markets = [
  { flag: "🇨🇳", name: "China" },
  { flag: "🇦🇪", name: "Dubai / UAE" },
  { flag: "🇹🇷", name: "Turkey" },
  { flag: "🇰🇪", name: "Kenya" },
  { flag: "🇺🇬", name: "Uganda (Delivery)" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-white/8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 mb-5 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={LOGO_URL}
                alt="M.A.R Cargo Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="leading-none">
                <span className="font-display text-2xl font-bold tracking-tight">
                  <span className="text-white">M.A.R</span>
                  <span className="text-amber-400 ml-1.5">CARGO</span>
                </span>
                <p className="text-slate-500 text-[10px] tracking-widest uppercase font-medium mt-0.5">
                  Services · Uganda
                </p>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Uganda's trusted freight forwarding partner. We connect your business to world markets —
              China, Dubai, Turkey, and Kenya — with speed, care, and complete transparency.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello M.A.R Cargo! I'd like more information."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5 px-4"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-amber-400"
                    />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5">
              Source Markets
            </h4>
            <ul className="flex flex-col gap-3">
              {markets.map(({ flag, name }) => (
                <li
                  key={name}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200"
                >
                  <span className="text-base leading-none">{flag}</span>
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Phone,
                  label: "+256 700 000 000",
                  href: "tel:+256700000000",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Us",
                  href: `https://wa.me/${WHATSAPP_NUMBER}`,
                },
                {
                  icon: Mail,
                  label: "info@marcargo.ug",
                  href: "mailto:info@marcargo.ug",
                },
                {
                  icon: MapPin,
                  label: "Kampala, Uganda",
                  href: "#",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/40 transition-colors duration-200">
                    <Icon size={14} className="text-amber-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} M.A.R Cargo Services. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-600 text-xs">
            <span>🇺🇬</span>
            <span>Proudly Ugandan · Globally Connected</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
