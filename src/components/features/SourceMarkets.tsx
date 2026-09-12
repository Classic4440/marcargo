import { ArrowRight, MapPin, TrendingDown, Clock, Package } from "lucide-react";

const markets = [
  {
    flag: "🇨🇳",
    country: "China",
    city: "Guangzhou · Yiwu · Shenzhen",
    description:
      "Electronics, textiles, machinery, consumer goods, and wholesale merchandise at factory prices.",
    highlights: ["Lowest unit costs", "Wholesale minimum orders", "Air & sea options"],
    color: "from-red-900/30 to-transparent",
    transit: "21–35 days sea · 7–10 days air",
  },
  {
    flag: "🇦🇪",
    country: "Dubai",
    city: "Jebel Ali · Deira · Dubai",
    description:
      "Electronics, luxury goods, construction materials, and re-exports from the Middle East hub.",
    highlights: ["Tax-free sourcing", "Premium brands", "Express available"],
    color: "from-yellow-900/30 to-transparent",
    transit: "10–18 days sea · 3–5 days air",
  },
  {
    flag: "🇹🇷",
    country: "Turkey",
    city: "Istanbul · Bursa · Izmir",
    description:
      "Textiles, garments, leather goods, furniture, steel, and construction materials.",
    highlights: ["Quality garments", "Competitive pricing", "MOQ flexible"],
    color: "from-red-900/30 to-transparent",
    transit: "14–21 days sea · 5–7 days air",
  },
  {
    flag: "🇰🇪",
    country: "Kenya",
    city: "Nairobi · Mombasa",
    description:
      "Cross-border trade goods, agricultural products, consumer items, and re-exports via Mombasa port.",
    highlights: ["Fastest transit", "Road & rail options", "Daily departures"],
    color: "from-green-900/30 to-transparent",
    transit: "2–5 days road · 1–2 days express",
  },
];

export default function SourceMarkets() {
  return (
    <section id="markets" className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
          <div className="section-label justify-center mb-4">
            <span className="w-6 h-px bg-amber-400 block" />
            Source Markets
            <span className="w-6 h-px bg-amber-400 block" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            We Ship From{" "}
            <span className="text-gradient-gold">4 Global Hubs</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our network spans the world's top trading markets, all routing directly to{" "}
            <span className="text-amber-400 font-medium">🇺🇬 Uganda</span>.
          </p>
        </div>

        {/* Market cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {markets.map((market, idx) => (
            <div
              key={market.country}
              className="relative glass-card p-6 overflow-hidden group hover:scale-[1.02] hover:border-amber-500/50 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Large background flag */}
              <div
                className="absolute bottom-3 right-3 text-[7rem] leading-none opacity-[0.05] select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-300"
                aria-hidden="true"
              >
                {market.flag}
              </div>

              {/* Gradient tint */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${market.color} pointer-events-none rounded-2xl`}
              />

              {/* Content */}
              <div className="relative">
                {/* Flag + country */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl leading-none">{market.flag}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {market.country}
                    </h3>
                    <p className="text-slate-500 text-xs mt-0.5 flex items-center gap-1">
                      <MapPin size={10} strokeWidth={1.5} />
                      {market.city}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {market.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-col gap-1.5 mb-4">
                  {market.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Transit time */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/8">
                  <Clock size={13} className="text-amber-400 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-slate-400 text-xs">{market.transit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Uganda destination callout */}
        <div className="glass-card p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-6 animate-fadeInUp">
          <div className="flex items-center gap-4 flex-1">
            <span className="text-5xl">🇺🇬</span>
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                All Routes Land in Uganda
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Kampala, Jinja, Mbale, Mbarara & all major towns — door-to-door delivery available.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl">
              <Package size={15} className="text-amber-400" strokeWidth={1.5} />
              <span className="text-sm text-slate-300">Door-to-Door</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl">
              <TrendingDown size={15} className="text-emerald-400" strokeWidth={1.5} />
              <span className="text-sm text-slate-300">Best Rates</span>
            </div>
          </div>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold whitespace-nowrap"
          >
            Ship Now
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
