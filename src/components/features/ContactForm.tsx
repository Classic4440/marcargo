import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin, CheckCircle, X } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "256700000000";

// ─── Multi-select options ────────────────────────────────────────────────────

const SOURCE_COUNTRIES = [
  { flag: "🇨🇳", name: "China" },
  { flag: "🇦🇪", name: "Dubai / UAE" },
  { flag: "🇹🇷", name: "Turkey" },
  { flag: "🇰🇪", name: "Kenya" },
  { flag: "🌍", name: "Other" },
];

const CARGO_CATEGORIES = [
  "Electronics & Tech",
  "Clothing & Textiles",
  "Machinery & Equipment",
  "Food & Beverages",
  "Cosmetics & Beauty",
  "Furniture & Home Goods",
  "Construction Materials",
  "Vehicle Parts & Accessories",
  "Medical Supplies",
  "General Merchandise",
  "Other",
];

const SHIPPING_METHODS = [
  "Sea Freight (Cheapest)",
  "Air Freight (Fastest)",
  "Road (Kenya only)",
  "Not Sure — Advise Me",
];

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  phone: string;
  email: string;
  selectedCountries: string[];
  otherCountry: string;
  selectedCargo: string[];
  otherCargo: string;
  weight: string;
  shipping: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  selectedCountries: [],
  otherCountry: "",
  selectedCargo: [],
  otherCargo: "",
  weight: "",
  shipping: "",
  message: "",
};

// ─── Multi-select chip component ─────────────────────────────────────────────

interface MultiSelectProps {
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (vals: string[]) => void;
}

function MultiSelectChips({ label, required, options, selected, onChange }: MultiSelectProps) {
  const toggle = (val: string) => {
    if (selected.includes(val)) {
      onChange(selected.filter((v) => v !== val));
    } else {
      onChange([...selected, val]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-300 text-sm font-medium">
        {label} {required && <span className="text-amber-500">*</span>}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map(({ value, label: optLabel }) => {
          const active = selected.includes(value);
          return (
            <button
              key={value}
              type="button"
              onClick={() => toggle(value)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                active
                  ? "bg-amber-500/20 border-amber-500/60 text-amber-300"
                  : "bg-white/5 border-white/15 text-slate-400 hover:border-white/30 hover:text-slate-200"
              }`}
            >
              {active && <X size={12} className="text-amber-400" />}
              {optLabel}
            </button>
          );
        })}
      </div>
      {selected.length > 0 && (
        <p className="text-xs text-slate-500">
          {selected.length} selected — click to deselect
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    const countries = form.selectedCountries
      .map((c) => {
        if (c === "Other") return `Other: ${form.otherCountry || "N/A"}`;
        const found = SOURCE_COUNTRIES.find((s) => s.name === c);
        return found ? `${found.flag} ${found.name}` : c;
      })
      .join(", ");

    const cargo = form.selectedCargo
      .map((c) => {
        if (c === "Other") return `Other: ${form.otherCargo || "N/A"}`;
        return c;
      })
      .join(", ");

    const lines = [
      `Hello M.A.R Cargo Services! I'd like a shipping quote.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Importing From:* ${countries}`,
      `*Cargo Types:* ${cargo}`,
      form.weight ? `*Estimated Weight/Volume:* ${form.weight}` : null,
      form.shipping ? `*Preferred Shipping:* ${form.shipping}` : null,
      form.message ? `*Additional Notes:* ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return lines;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || form.selectedCountries.length === 0 || form.selectedCargo.length === 0) {
      toast.error("Please fill in your name, phone, and select at least one country and cargo type.");
      return;
    }

    if (form.selectedCountries.includes("Other") && !form.otherCountry.trim()) {
      toast.error('Please specify the "Other" country.');
      return;
    }

    if (form.selectedCargo.includes("Other") && !form.otherCargo.trim()) {
      toast.error('Please specify the "Other" cargo type.');
      return;
    }

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsAppMessage()
    )}`;

    setSubmitted(true);
    toast.success("Redirecting to WhatsApp…");

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 800);
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-24 lg:py-32 bg-navy-950">
        <div className="max-w-xl mx-auto px-4 text-center animate-fadeInUp">
          <div className="glass-card p-12 flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle size={40} className="text-emerald-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              Quote Request Sent!
            </h2>
            <p className="text-slate-400 leading-relaxed">
              You're being redirected to WhatsApp with your pre-filled message. Our team will
              respond within 2 hours.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-outline">
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  const countryChipOptions = SOURCE_COUNTRIES.map((c) => ({
    value: c.name,
    label: `${c.flag} ${c.name}`,
  }));

  const cargoChipOptions = CARGO_CATEGORIES.map((c) => ({ value: c, label: c }));

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080d1a 0%, #070c18 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
          <div className="section-label justify-center mb-4">
            <span className="w-6 h-px bg-amber-400" />
            Get a Quote
            <span className="w-6 h-px bg-amber-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Your{" "}
            <span className="text-gradient-gold">Shipment Today</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Fill in the form below and we'll send you a competitive all-in quote via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="flex flex-col gap-5 animate-slideInLeft">
            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-bold text-white mb-5">
                Contact Us Directly
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Phone,
                    label: "Call / WhatsApp",
                    value: "+256 700 000 000",
                    href: "tel:+256700000000",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "Quick reply guaranteed",
                    href: `https://wa.me/${WHATSAPP_NUMBER}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@marcargo.ug",
                    href: "mailto:info@marcargo.ug",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Kampala, Uganda",
                    href: "#",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/25 transition-colors duration-200">
                      <Icon size={18} className="text-amber-400" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      <p className="text-slate-200 text-sm font-medium group-hover:text-amber-400 transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div className="glass-card p-5">
              <h4 className="text-slate-200 font-semibold text-sm mb-3">Business Hours</h4>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Mon – Fri</span>
                  <span className="text-slate-200">8:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Saturday</span>
                  <span className="text-slate-200">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sunday</span>
                  <span className="text-amber-400">WhatsApp only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 animate-slideInRight">
            <form onSubmit={handleSubmit} className="glass-card p-6 lg:p-8">
              <div className="flex flex-col gap-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-300 text-sm font-medium" htmlFor="name">
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. John Mukasa"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-300 text-sm font-medium" htmlFor="phone">
                      Phone / WhatsApp <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+256 7XX XXX XXX"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-sm font-medium" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>

                {/* Country multi-select */}
                <MultiSelectChips
                  label="Importing From"
                  required
                  options={countryChipOptions}
                  selected={form.selectedCountries}
                  onChange={(vals) =>
                    setForm((prev) => ({ ...prev, selectedCountries: vals }))
                  }
                />
                {form.selectedCountries.includes("Other") && (
                  <div className="flex flex-col gap-2 -mt-2">
                    <input
                      type="text"
                      name="otherCountry"
                      value={form.otherCountry}
                      onChange={handleChange}
                      placeholder="Please specify country…"
                      className="form-input"
                    />
                  </div>
                )}

                {/* Cargo type multi-select */}
                <MultiSelectChips
                  label="Cargo Type"
                  required
                  options={cargoChipOptions}
                  selected={form.selectedCargo}
                  onChange={(vals) =>
                    setForm((prev) => ({ ...prev, selectedCargo: vals }))
                  }
                />
                {form.selectedCargo.includes("Other") && (
                  <div className="flex flex-col gap-2 -mt-2">
                    <input
                      type="text"
                      name="otherCargo"
                      value={form.otherCargo}
                      onChange={handleChange}
                      placeholder="Please specify cargo type…"
                      className="form-input"
                    />
                  </div>
                )}

                {/* Weight + Shipping */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-300 text-sm font-medium" htmlFor="weight">
                      Est. Weight / Volume
                    </label>
                    <input
                      id="weight"
                      name="weight"
                      type="text"
                      value={form.weight}
                      onChange={handleChange}
                      placeholder="e.g. 500 kg or 2 CBM"
                      className="form-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-300 text-sm font-medium" htmlFor="shipping">
                      Preferred Shipping
                    </label>
                    <select
                      id="shipping"
                      name="shipping"
                      value={form.shipping}
                      onChange={handleChange}
                      className="form-input cursor-pointer"
                      style={{ backgroundColor: "#0f1937" }}
                    >
                      <option value="" disabled>
                        Select method
                      </option>
                      {SHIPPING_METHODS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-sm font-medium" htmlFor="message">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Supplier details, delivery address in Uganda, special requirements…"
                    className="form-input resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="btn-gold w-full sm:w-auto text-base py-4 px-10 justify-center"
                >
                  <Send size={18} />
                  Send Quote Request via WhatsApp
                </button>
                <p className="text-slate-500 text-xs text-center">
                  Opens WhatsApp with your details pre-filled
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
