import { ArrowRight, MessageCircle, Globe, Plane, Ship, Truck, Shield, Clock, Award } from "lucide-react";

const stats = [
  { icon: Shield, value: "100%", label: "Insured Cargo" },
  { icon: Clock, value: "7–21", label: "Days Delivery" },
  { icon: Award, value: "500+", label: "Happy Clients" },
];

const WHATSAPP_NUMBER = "256700000000";

function buildWhatsAppUrl(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
          alt="Cargo ship at sea"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/60 to-navy-950/95" />
        {/* Ambient colour glows */}
        <div className="absolute inset-0 glow-gold pointer-events-none" />
        <div className="absolute inset-0 glow-navy pointer-events-none" />
      </div>

      {/* ── Floating animated logistics icons ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[8%] animate-float opacity-10">
          <Globe size={72} className="text-amber-400" strokeWidth={1} />
        </div>
        <div
          className="absolute top-[20%] right-[10%] animate-floatAlt opacity-10"
          style={{ animationDelay: "1.5s" }}
        >
          <Plane size={64} className="text-amber-300" strokeWidth={1} />
        </div>
        <div
          className="absolute bottom-[28%] left-[5%] animate-floatSlow opacity-10"
          style={{ animationDelay: "3s" }}
        >
          <Ship size={80} className="text-blue-400" strokeWidth={1} />
        </div>
        <div
          className="absolute bottom-[20%] right-[7%] animate-float opacity-10"
          style={{ animationDelay: "2s" }}
        >
          <Truck size={60} className="text-amber-400" strokeWidth={1} />
        </div>
        <div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-floatAlt opacity-5"
          style={{ animationDelay: "4s" }}
        >
          <Globe size={320} className="text-white" strokeWidth={0.3} />
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Section label */}
          <div className="section-label animate-fadeInUp mb-6">
            <span className="w-8 h-px bg-amber-400 block" />
            Premium Freight Forwarding · Uganda
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fadeInUp delay-100">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              From World Markets
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              to{" "}
              <span className="text-gradient-gold">Uganda.</span>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-xl mb-10 animate-fadeInUp delay-200">
            We handle every kilometre — from factory floors in{" "}
            <span className="text-slate-100 font-medium">China, Dubai, Turkey & Kenya</span>{" "}
            straight to your door in Uganda. Fast, insured, and stress-free.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-300">
            <button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold text-base py-4 px-8"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </button>
            <a
              href={buildWhatsAppUrl(
                "Hello M.A.R Cargo! I'd like to get a shipping quote."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base py-4 px-8"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-14 animate-fadeInUp delay-500">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 glass-card px-5 py-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Icon size={18} className="text-amber-400" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">{value}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent z-10 pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-amber-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
