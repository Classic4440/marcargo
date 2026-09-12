import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
const LOGO_URL = "https://cdn-ai.onspace.ai/onspace/files/c6czrJC53opq5voqoKJFUM/pasted-image-1789214012264-0.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md border-b border-white/8 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={LOGO_URL}
              alt="M.A.R Cargo Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-none">
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-white">M.A.R</span>
                <span className="text-amber-400 ml-1">CARGO</span>
              </span>
              <p className="text-slate-500 text-[10px] tracking-widest uppercase font-medium">
                Services
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-gold text-sm py-2.5 px-5"
            >
              Get a Quote
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl glass-card text-slate-300 hover:text-amber-400 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-950/95 backdrop-blur-md border-b border-white/10 px-4 pb-6 pt-2">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-all duration-200 px-4 py-3 rounded-xl text-left font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-gold mt-2 justify-center"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
