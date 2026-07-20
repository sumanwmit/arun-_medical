import MedicineStockChecker from "../components/MedicineStockChecker";
import { Sparkles, ArrowRight, MessageSquare } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      id: "cat-1",
      name: "Prescription Medicines (Rx)",
      icon: "💊",
      description: "Sourcing and dispensation of critical cardiovascular, diabetic, oncology, and antibiotic therapeutics.",
      benefits: ["100% genuine batches with tax invoice", "Strict verification by clinical pharmacist", "Expert instructions on dosage cycles"],
      ctaText: "Order Rx Medicines"
    },
    {
      id: "cat-2",
      name: "OTC Medicines",
      icon: "🩹",
      description: "Direct access to high-efficacy fever suppressants, pain relievers, digestive salts, and seasonal allergy medication.",
      benefits: ["Highly reliable quick relief formulations", "Expert local brand comparisons", "Instant ready-to-use home remedies"],
      ctaText: "Get OTC Remedial Relief"
    },
    {
      id: "cat-3",
      name: "Health Devices",
      icon: "🌡️",
      description: "Medical-grade automatic Blood Pressure monitors, blood sugar glucose meters, digital thermometers, and nebulizers.",
      benefits: ["Authorized brand warranties included", "Free in-store demonstration & calibration", "Accurate diagnostic tracking"],
      ctaText: "Inquire About Devices"
    },
    {
      id: "cat-4",
      name: "Medical Equipment",
      icon: "♿",
      description: "Supply of orthopedic support braces, walking supports, wheelchairs, sterile medical dressings, and compression gear.",
      benefits: ["Sturdy professional build quality", "Custom size fittings assistance", "Emergency support delivery"],
      ctaText: "Inquire About Equipment"
    },
    {
      id: "cat-5",
      name: "Home Care & Personal Hygiene",
      icon: "🧼",
      description: "Providing premium skin antiseptic solutions, disinfectant sprays, premium hand sanitizers, surgical gloves, and adult diapers.",
      benefits: ["Hospital-grade safety standards", "Available in convenient bulk volume", "Complete sanitation and protection"],
      ctaText: "Order Hygiene Supplies"
    },
    {
      id: "cat-6",
      name: "Nutrition & Supplements",
      icon: "🥛",
      description: "Certified protein powders, vitamin boosters, mineral formulations, and pediatric drops supporting dietary wellness.",
      benefits: ["Authorized authorized brand dealers only", "Zero hazardous fillers or fake proteins", "Optimal nutrition for recovery"],
      ctaText: "Order Health Supplements"
    },
    {
      id: "cat-7",
      name: "Baby Care Products",
      icon: "🍼",
      description: "Highly sensitive skin soaps, rash creams, pediatric feeding formulas, baby diapers, and infant hygiene products.",
      benefits: ["100% hypoallergenic safe formulations", "Leading brands in stock", "Gentle protection for toddlers"],
      ctaText: "Order Toddler Care"
    }
  ];

  const handleInquiry = (catName: string) => {
    const text = `Hello Arun Medical Hall, I would like to inquire about ordering products from your "${catName}" category. Please guide me on stock availability and pricing.`;
    window.open(`https://wa.me/918804358374?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main id="services-page" className="pt-20 overflow-x-hidden text-left">
      {/* Subpage Banner Header */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <span className="text-emerald-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
            WHAT WE PROVIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-sans">
            Our Services & Medicine Racks
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mt-3">
            Check live stock availability or browse our categorized healthcare product offerings. Dedicated to safety and efficacy.
          </p>
        </div>
      </section>

      {/* 1. EXCLUSIVE FEATURE: Medicine Stock Checker Component */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Live Online Inventory Check
            </div>
          </div>
          <MedicineStockChecker />
        </div>
      </section>

      {/* 2. Category-wise Services Display */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
              Healthcare Categories
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white mt-1">
              Complete Product & Drug Categories
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed">
              We stock an exhaustive inventory divided across specialized departments, each monitored closely for expiry and storage requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className="geometric-card p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4.5 mb-6">
                    <span className="text-4xl bg-white dark:bg-slate-950 h-16 w-16 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                      {cat.icon}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                      {cat.name}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Key Benefits & Assurances
                    </h4>
                    <ul className="space-y-2.5">
                      {cat.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                  <button
                    onClick={() => handleInquiry(cat.name)}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-slate-950 hover:bg-emerald-600 hover:text-white text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-850 hover:border-emerald-600 font-bold text-xs rounded-xl transition-all duration-300 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-emerald-500 hover:fill-white stroke-none shrink-0" />
                    {cat.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standard CTA Banner */}
      <section className="py-20 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950/20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5 items-center">
          <div className="h-12 w-12 rounded-2xl bg-emerald-600/30 text-emerald-400 border border-emerald-800/50 flex items-center justify-center text-xl font-bold">
            🛡️
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            Need high-criticality chronic medicines?
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl leading-relaxed">
            We hold specialized licensing to procure rare medicines for severe ailments directly from wholesale warehouses. Simply submit your inquiry, and we will source them within 24 hours.
          </p>
          <a
            href="https://wa.me/918804358374?text=Hello%20Arun%20Medical%20Hall%2C%20I%20have%20an%20urgent%20requirement%20for%20specialized%20chronic%20medication%20which%20is%20not%20commonly%20available%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-600/10 transition-all duration-300"
          >
            Submit Urgent Rx Inquiry
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
