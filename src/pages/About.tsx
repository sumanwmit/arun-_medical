import { Heart, Shield, Award, MapPin, Sparkles, Star, Milestone } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "100% Authentic Integrity",
      desc: "Every pill, bottle, and diagnostic tool is sourced strictly from audited, licensed pharmaceutical supply routes.",
      icon: "🛡️"
    },
    {
      title: "Patient-First Care",
      desc: "We prioritize patient relief, budget-friendly choices, and professional guidance over quick commercial retail transactions.",
      icon: "💝"
    },
    {
      title: "Cold Chain Assurance",
      desc: "Rigorous climate control systems to ensure temperature-sensitive drugs like insulin retain their absolute therapeutic efficacy.",
      icon: "❄️"
    },
    {
      title: "Unconditional Accessibility",
      desc: "Operating 7 days a week from 08:00 AM to 10:00 PM because emergencies and healthcare needs do not respect calendar breaks.",
      icon: "⚡"
    }
  ];

  const timelineEvents = [
    {
      year: "1998",
      title: "Inception & Founding",
      desc: "Arun Kumar established Arun Medical Hall as a humble retail pharmacy with the core goal of providing reliable healthcare access to the local Belaganj population."
    },
    {
      year: "2005",
      title: "Specialty Medications Expansion",
      desc: "Broadened our drug racks to stock high-criticality medications for oncology, diabetes, and cardiovascular therapy, reducing the need for locals to travel to Gaya."
    },
    {
      year: "2012",
      title: "Advanced Cold Chain Installation",
      desc: "Acquired high-specification medical grade refrigerators and power fallback backup systems to preserve vital insulins, vaccines, and pediatric formulations."
    },
    {
      year: "2020",
      title: "Community Delivery Lifeline",
      desc: "Launched our localized free home-delivery network, helping thousands of high-risk elderly patients and families receive critical medicines at home."
    },
    {
      year: "2026",
      title: "Digital Integration",
      desc: "Pioneered interactive stock tracking checks and instant WhatsApp ordering, offering unparalleled digital pharmacy convenience."
    }
  ];

  const achievements = [
    { count: "28+", label: "Years of Trust & Service" },
    { count: "100,000+", label: "Prescriptions Verified" },
    { count: "100%", label: "Authenticity & License Audited" },
    { count: "15,000+", label: "Happy Local Families served" }
  ];

  return (
    <main id="about-page" className="pt-20 overflow-x-hidden text-left">
      {/* Page Header Subpage Banner */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <span className="text-emerald-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-sans">
            About Arun Medical Hall
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mt-3">
            Since 1998, we have maintained a strict standard of pharmacy accuracy and healthcare support in Belaganj, Bihar.
          </p>
        </div>
      </section>

      {/* Owner Message & Store Overview */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual/Owner Picture column */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-[32px] p-1.5 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
                  alt="Arun Kumar, Chief Pharmacist"
                  className="rounded-[28px] w-full object-cover h-[450px]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Float experience label */}
                <div className="absolute -bottom-6 -right-6 bg-slate-950 text-white border border-slate-900 p-5 rounded-2xl shadow-xl max-w-xs text-left">
                  <span className="text-2xl font-black text-emerald-400">28+ Yrs</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Clinical Dispensing Experience</p>
                </div>
              </div>
            </div>

            {/* Content Message column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold w-fit border border-emerald-100 dark:border-emerald-900/50">
                <Sparkles className="w-3.5 h-3.5" />
                FOUNDER'S MESSAGE & COMPASSION
              </div>
              
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white leading-tight">
                "Our business is not selling drugs—it is restoring your health and peace of mind."
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                "When I started <strong>Arun Medical Hall</strong> in 1998, people in Belaganj had to travel to faraway city hospitals or settle for pharmacies with inconsistent medicine stock. I wanted to build a sanctuary where people could get 100% authentic, high-efficacy medicines along with honest clinical counseling.
              </p>

              <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 italic text-slate-700 dark:text-slate-300 text-sm leading-relaxed bg-slate-50 dark:bg-slate-900/40 pr-3 rounded-r-xl">
                "Over 28 years later, that core standard remains completely unchanged. Every drug on our shelf is sourced directly from accredited pharma houses. We maintain a meticulous thermal cold chain, double check every prescription, and deliver immediately to patients in emergency need."
              </blockquote>

              <div>
                <h4 className="text-base font-extrabold text-slate-950 dark:text-white">Arun Kumar</h4>
                <p className="text-xs text-slate-500">Chief Registered Pharmacist & Founder, Arun Medical Hall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
             {/* Mission Box */}
             <div className="geometric-card p-8 md:p-10 flex flex-col gap-4">
               <div className="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0 font-bold">
                 🎯
               </div>
               <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">Our Mission</h3>
               <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                 To serve as a reliable, licensed pillar of health support in Belaganj, Bihar, ensuring that no patient is denied essential lifesaving medications. We aim to combine rigorous storage protocols, fair pricing, clinical accuracy, and swift local home deliveries for complete wellness assurance.
               </p>
             </div>
 
             {/* Vision Box */}
             <div className="geometric-card p-8 md:p-10 flex flex-col gap-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shrink-0 font-bold">
                👁️
              </div>
              <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                To transform regional healthcare retail across Bihar by setting the benchmark for zero-tolerance counterfeit controls and establishing accessible digital channels. We envision a community where medicine stock checkers and instant deliveries eliminate geographic health boundaries.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
            Principles We Live By
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {values.map((val, i) => (
              <div
                key={i}
                className="geometric-card p-6"
              >
                <div className="text-3xl mb-4">{val.icon}</div>
                <h4 className="font-extrabold text-slate-950 dark:text-white text-base mb-2">
                  {val.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Timeline Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs flex justify-center items-center gap-1.5">
            <Milestone className="w-4 h-4" />
            Our Path
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white mt-1">
            Chronological Journey & Timeline
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            A look back at how we have grown step-by-step to serve you better over the decades.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto px-4 relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-900" />

          <div className="space-y-12">
            {timelineEvents.map((ev, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[7px] md:-translate-x-[9px] w-4.5 h-4.5 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-950 shadow z-10" />

                {/* Content Card */}
                <div className="ml-8 md:ml-0 md:w-1/2 geometric-card p-6">
                  <span className="inline-block bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-extrabold px-3 py-1 rounded-lg text-xs md:text-sm mb-3">
                    {ev.year}
                  </span>
                  <h4 className="font-extrabold text-slate-950 dark:text-white text-base md:text-lg mb-1">
                    {ev.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                    {ev.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Achievements Stats Banner */}
      <section className="py-16 bg-slate-950 text-white text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="text-3xl md:text-5xl font-black text-emerald-400 font-mono tracking-tight">
                  {ach.count}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {ach.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
