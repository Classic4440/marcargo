import {
  Ship,
  Plane,
  Package,
  ShieldCheck,
  Warehouse,
  FileText,
  Truck,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Cost-effective full container (FCL) and groupage (LCL) shipping from China, Dubai, and Turkey. Best for bulk and heavy cargo.",
    badge: "Most Popular",
    badgeColor: "bg-amber-500/20 text-amber-400",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Express air cargo for time-sensitive shipments. We work with major carriers to guarantee priority handling and speed.",
    badge: "Fastest",
    badgeColor: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: Truck,
    title: "Road Freight",
    description:
      "Direct cross-border trucking from Kenya to Uganda. Daily departures from Nairobi and Mombasa for all cargo sizes.",
    badge: "From Kenya",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
  },
  {
    icon: Package,
    title: "Door-to-Door Delivery",
    description:
      "We pick up from the supplier and deliver straight to your address in Uganda — no agents, no middlemen, no hassle.",
  },
  {
    icon: FileText,
    title: "Customs Clearance",
    description:
      "Our licensed clearing agents handle all import documentation, duties, taxes, and regulatory compliance in Uganda.",
  },
  {
    icon: ShieldCheck,
    title: "Cargo Insurance",
    description:
      "Full marine and transit insurance available for all shipments. We protect your goods from origin to delivery.",
  },
  {
    icon: Warehouse,
    title: "Consolidation & Storage",
    description:
      "We consolidate small orders from multiple suppliers into a single shipment, reducing your per-unit freight costs.",
  },
  {
    icon: BarChart3,
    title: "Shipment Tracking",
    description:
      "Real-time tracking updates via WhatsApp and our tracking portal. Always know where your cargo is.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Dedicated account managers available around the clock via WhatsApp, call, or email. Your shipment is always our priority.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #080d1a 0%, #0a1020 50%, #080d1a 100%)",
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=60"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[400px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
          <div className="section-label justify-center mb-4">
            <span className="w-6 h-px bg-amber-400" />
            What We Do
            <span className="w-6 h-px bg-amber-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            End-to-End{" "}
            <span className="text-gradient-gold">Freight Services</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Everything you need to import goods safely and efficiently — from a single parcel to a
            full container.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, badge, badgeColor }, idx) => (
            <div
              key={title}
              className="glass-card p-6 group hover:scale-[1.02] hover:border-amber-500/40 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${(idx % 3) * 100}ms` }}
            >
              {/* Icon + badge row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center group-hover:bg-amber-500/25 transition-colors duration-300">
                  <Icon size={22} className="text-amber-400" strokeWidth={1.5} />
                </div>
                {badge && (
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${badgeColor}`}
                  >
                    {badge}
                  </span>
                )}
              </div>

              {/* Text */}
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

              {/* Hover line accent */}
              <div className="mt-4 h-px bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
