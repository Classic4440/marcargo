import { MessageCircle, Search, Package, Home, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contact & Describe",
    description:
      "Reach out via WhatsApp or our contact form. Tell us what you want to import, the quantity, and your destination in Uganda.",
    detail: "We respond within 2 hours during business days.",
  },
  {
    number: "02",
    icon: Search,
    title: "Get a Quote",
    description:
      "We calculate the best freight option (sea, air, or road), handle all customs duty estimates, and send you a transparent all-in quote.",
    detail: "No hidden fees. You see the full landed cost.",
  },
  {
    number: "03",
    icon: Package,
    title: "We Handle Everything",
    description:
      "Once you confirm and pay, we coordinate pickup from the supplier, pack and consolidate your cargo, handle export & import customs.",
    detail: "Real-time WhatsApp updates at every milestone.",
  },
  {
    number: "04",
    icon: Home,
    title: "Delivered to Your Door",
    description:
      "Your goods arrive at your specified address in Uganda — cleared, insured, and on schedule. We only close the job when you're happy.",
    detail: "Delivery available across all major Ugandan cities.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden bg-navy-950"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=50"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-navy-950/95" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
          <div className="section-label justify-center mb-4">
            <span className="w-6 h-px bg-amber-400" />
            The Process
            <span className="w-6 h-px bg-amber-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It{" "}
            <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Four simple steps from enquiry to delivery — we manage the complexity so you
            don't have to.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-amber-500/60 via-amber-400/40 to-amber-500/60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map(({ number, icon: Icon, title, description, detail }, idx) => (
              <div
                key={title}
                className="relative flex flex-col items-center text-center animate-fadeInUp"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Mobile: vertical line */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[5rem] left-[calc(50%-0.5px)] w-px h-[calc(100%-2rem)] bg-gradient-to-b from-amber-500/50 to-amber-500/10" />
                )}

                {/* Number circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <span className="font-display text-xl font-bold text-navy-950">
                      {number}
                    </span>
                  </div>
                  {/* Icon badge */}
                  <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full glass-card flex items-center justify-center border border-amber-500/30">
                    <Icon size={13} className="text-amber-400" strokeWidth={2} />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card p-6 w-full group hover:border-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {description}
                  </p>
                  <div className="flex items-start gap-2 pt-3 border-t border-white/8">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <p className="text-emerald-400 text-xs">{detail}</p>
                  </div>
                </div>

                {/* Arrow (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-[3.25rem] z-20">
                    <ArrowRight size={14} className="text-amber-500/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp">
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold text-base py-4 px-10"
          >
            Start Your Shipment
            <ArrowRight size={20} />
          </button>
          <p className="text-slate-500 text-sm mt-4">
            Free consultation · No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
