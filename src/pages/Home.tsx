import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  CheckCircle2,
  Shield,
  Truck,
  Award,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  MessageSquare,
  BookOpen,
  Mail,
  UserCheck
} from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (subscriberEmail.trim()) {
      setEmailSubscribed(true);
      setSubscriberEmail("");
      setTimeout(() => setEmailSubscribed(false), 5000);
    }
  };

  const featuredServices = [
    {
      id: "ser-1",
      title: "Prescription Fulfillment",
      desc: "Accurate, rapid dispensation of all therapeutic medications under strictly audited pharmacy controls.",
      icon: "💊",
      category: "Prescription"
    },
    {
      id: "ser-2",
      title: "Healthcare Devices",
      desc: "Provision of essential medical monitors, orthotics, diagnostic meters, and supportive health gear.",
      icon: "🌡️",
      category: "Equipment"
    },
    {
      id: "ser-3",
      title: "OTC & Home Care",
      desc: "Comprehensive over-the-counter clinical remedies, baby supplies, hygiene, and daily wellness items.",
      icon: "🩹",
      category: "OTC"
    },
    {
      id: "ser-4",
      title: "Premium Supplements",
      desc: "Authorized dealer of high-grade vital multivitamins, health boosters, protein, and pediatric supplements.",
      icon: "🥛",
      category: "Nutrition"
    }
  ];

  const featuredProducts = [
    {
      name: "Automatic Blood Pressure Monitor",
      price: "₹1,850",
      category: "Health Devices",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
      status: "Available"
    },
    {
      name: "Infrared Digital Thermometer",
      price: "₹1,200",
      category: "Health Devices",
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400",
      status: "Available"
    },
    {
      name: "Multivitamin Gold (Daily Wellness)",
      price: "₹450",
      category: "Supplements",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
      status: "Available"
    },
    {
      name: "Pediatric Gentle Skin Wipes",
      price: "₹180",
      category: "Baby Care",
      img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=400",
      status: "Limited Stock"
    }
  ];

  const reviews = [
    {
      quote: "Arun Medical Hall has been our family pharmacy for over 20 years. Arun Babu is incredibly knowledgeable, always checking twice to ensure the dosage is correct. Delivery in Belaganj is always fast.",
      reviewer: "Rajesh Kumar Sharma",
      role: "Local Belaganj Resident",
      rating: "★★★★★"
    },
    {
      quote: "Very reliable medicine shop near the railway station. They always have rare prescription drugs in stock which other shops in Bihar Sharif or Gaya don't carry. Highly recommended for their transparency.",
      reviewer: "Dr. Amrita Singh",
      role: "Consultant Physician",
      rating: "★★★★★"
    }
  ];

  const faqs = [
    {
      q: "Can I order prescription medicines online via WhatsApp?",
      a: "Yes! Simply photograph your doctor's valid prescription and upload it to our dedicated WhatsApp order line at +91 88043 58374. Our registered pharmacist will verify the schedule and dispatch it to your doorstep in Belaganj."
    },
    {
      q: "What are your store hours and do you open on Sundays?",
      a: "Arun Medical Hall is open 7 days a week, including Sundays, from 08:00 AM to 10:00 PM. We are committed to serving emergency healthcare demands around the clock."
    },
    {
      q: "Do you offer home delivery of medicines in Belaganj and nearby villages?",
      a: "Yes, we provide instant home delivery of medicines and healthcare devices within Belaganj and localized delivery coverage to surrounding village boundaries based on prescription verification."
    },
    {
      q: "Are the products in your stock checker authentic?",
      a: "Absolutely. We procure 100% of our inventory directly from accredited pharmaceutical companies and licensed regional distributors. Every product comes with standard batch number logs and original tax invoices."
    }
  ];

  const healthTips = [
    {
      title: "Understanding High Blood Pressure (Hypertension) Management",
      desc: "Learn about the critical lifestyle guidelines, low-sodium dietary choices, and regular pressure tracking routines to prevent cardiovascular strain.",
      date: "July 18, 2026",
      readTime: "4 min read",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Essential First Aid Kits: What Every Indian Household Needs",
      desc: "A comprehensive checklist of essential emergency items, from antiseptic lotions and sterile gauze to crucial fever suppressants for children.",
      date: "July 12, 2026",
      readTime: "5 min read",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <main id="home-page" className="pt-20 overflow-x-hidden geometric-grid-bg">
      {/* 1. Hero Section */}
      <section className="relative bg-emerald-600 text-white py-20 md:py-28 overflow-hidden rounded-[24px] mx-4 sm:mx-6 lg:mx-8 mt-4 shadow-xl">
        {/* Abstract Geometric Elements */}
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-emerald-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-[-20px] right-[10%] w-32 h-32 border-4 border-white/10 rounded-xl rotate-12"></div>
        
        {/* Decorative Grid Background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-350 animate-pulse"></span>
              Licensed Pharmacy in Belaganj, Bihar
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
              Essential Healthcare <br />Delivered to Your Door.
            </h1>
            
            <p className="text-emerald-50 text-base sm:text-lg max-w-xl leading-relaxed opacity-90">
              Arun Medical Hall serves the Belaganj community with genuine medicines, expert health consulting, and emergency medical equipment support.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-emerald-700 hover:bg-emerald-50 font-bold rounded-lg text-xs tracking-wider uppercase text-center shadow-md transition-all duration-300"
              >
                Order Medicines
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-emerald-700/50 hover:bg-emerald-700/70 border border-emerald-400 text-white font-bold rounded-lg text-xs tracking-wider uppercase text-center transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Micro-USPs badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 mt-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Genuine</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Quick Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Verified Rx</span>
              </div>
            </div>
          </div>

          {/* Hero Right Media/Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-slate-950/40 p-3 rounded-[32px] border border-slate-800 shadow-2xl backdrop-blur-md">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&q=80&w=600"
                alt="Inside Arun Medical Hall Pharmacy Racks"
                className="rounded-[24px] w-full object-cover h-[340px] shadow-inner"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white p-4.5 rounded-2xl shadow-xl max-w-xs text-left">
                <span className="block text-3xl font-black">28+</span>
                <span className="text-xs font-bold text-emerald-100 uppercase tracking-wider block mt-1">
                  Years of Unmatched Community Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Short About Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1607619056574-7b8d304a2c06?auto=format&fit=crop&q=80&w=500"
                  alt="Pharmacist dispensing medicines"
                  className="rounded-3xl shadow-xl border border-slate-200/50 w-full object-cover h-[380px]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-950 px-5 py-4 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-900 text-left">
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-2xl">100k+</span>
                  <p className="text-xs text-slate-500 font-medium">Prescriptions Verified</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
                About Our Pharmacy
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Empowering Belaganj with Trusted Health Solutions Since 1998
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                Established by Arun Kumar, <strong>Arun Medical Hall</strong> has stood as a pillar of trust and medical excellence in Belaganj, Bihar. We are not just a medicine shop; we are your local health companion.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                Our core commitment is sourcing and maintaining an uncompromised inventory of genuine prescription drugs, critical vaccines, over-the-counter wellness solutions, and professional healthcare tools.
              </p>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300"
                >
                  Our Full Story & Mission
                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services (Max 4) */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
            Professional Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1 mb-4">
            Our Healthcare Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
            We provide structured, fully verified pharmaceutical support services ensuring immediate patient relief and comprehensive family care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="geometric-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-extrabold text-slate-950 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/40">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase">
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/10 transition-all duration-300"
            >
              View Category-wise Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Left */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
              Pharmacy Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Uncompromising Quality and Trust is Our Business Core
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              For close to three decades, families in Gaya and Patna divisions have traveled to Arun Medical Hall in Belaganj because we prioritize human health over commercial convenience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <div className="flex gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-950/60 p-2.5 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0 h-11 w-11 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-950 dark:text-white">Licensed & Audited</h4>
                  <p className="text-xs text-slate-500 mt-1">100% compliant with standard drug licensing guidelines of Bihar Government.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-950/60 p-2.5 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0 h-11 w-11 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-950 dark:text-white">Cold Chain Maintenance</h4>
                  <p className="text-xs text-slate-500 mt-1">Dedicated cold storage to maintain insulin, vaccines, and crucial serums under strict temperatures.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-950/60 p-2.5 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0 h-11 w-11 flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-950 dark:text-white">Rapid Home Deliveries</h4>
                  <p className="text-xs text-slate-500 mt-1">Immediate doorstep delivery in Belaganj market and fast supply cycles to outer sectors.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-950/60 p-2.5 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0 h-11 w-11 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-950 dark:text-white">Pharmacist Consultation</h4>
                  <p className="text-xs text-slate-500 mt-1">Direct support and instructions from senior pharmacists during drug dispensation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Right */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbbc88?auto=format&fit=crop&q=80&w=500"
                alt="Genuine medicines and diagnostic tools"
                className="rounded-3xl shadow-xl border border-slate-200/50 object-cover h-[360px] w-full"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-slate-950/90 text-white p-4 rounded-xl backdrop-blur-md max-w-xs text-left border border-slate-800">
                <span className="text-xs text-slate-400 block">Quality Standard</span>
                <span className="text-sm font-bold text-emerald-400">ISO Accredited Procurements Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Products */}
      <section className="py-20 bg-white dark:bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
            Quality Care Catalog
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1 mb-4">
            Featured Healthcare Products
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
            Discover a handpicked selection of premium healthcare devices, essential support equipment, pediatric baby care and supplements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {featuredProducts.map((prod, i) => (
              <div
                key={i}
                className="geometric-card overflow-hidden group"
              >
                <div className="relative h-48 bg-slate-200 dark:bg-slate-950 overflow-hidden">
                  <img
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-sm">
                    {prod.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between h-[160px]">
                  <div>
                    <h3 className="font-extrabold text-slate-950 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {prod.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-2">
                    <span className="text-sm font-black text-slate-900 dark:text-white">{prod.price}</span>
                    <Link
                      to="/contact"
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-850 text-white font-bold text-sm rounded-xl transition-all duration-300"
            >
              Browse Full Catalog
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1 mb-4">
            Patient & Customer Testimonials
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
            Read what our verified local clients and healthcare partners say about our service standard, medication accuracy, and friendly support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {reviews.map((rev, i) => (
              <div
                key={i}
                className="geometric-card p-8 relative"
              >
                <div className="text-emerald-500 font-bold text-lg mb-4">{rev.rating}</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-600 text-white font-extrabold text-xs rounded-full flex items-center justify-center uppercase">
                    {rev.reviewer.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-950 dark:text-white">{rev.reviewer}</h4>
                    <span className="text-xs text-slate-500">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-6 max-w-xl mx-auto text-xs text-slate-500 leading-normal">
            We values true patient experiences. No fictional data or fake stars. To log your personal experience, please use our contact page or drop a review link!
          </div>
        </div>
      </section>

      {/* 7. FAQ Preview */}
      <section className="py-20 bg-white dark:bg-slate-950 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
              Frequent Queries
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Have questions regarding medicine orders, delivery cycles, and prescriptions? Find prompt answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm md:text-base text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <HelpCircle className={`w-5 h-5 shrink-0 transition-transform text-emerald-600 ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 dark:text-slate-350 text-xs md:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-500 font-bold hover:underline"
            >
              Have another question? Reach us directly
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Latest Health Tips Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
                Wellness Guides
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
                Latest Health & Wellness Tips
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-500 hover:underline"
            >
              Explore Services & Wellness Tools
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthTips.map((tip, i) => (
              <div
                key={i}
                className="group geometric-card overflow-hidden grid grid-cols-1 sm:grid-cols-12"
              >
                <div className="sm:col-span-5 h-48 sm:h-full bg-slate-200 dark:bg-slate-950 overflow-hidden relative">
                  <img
                    src={tip.img}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="sm:col-span-7 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 text-slate-400 text-[11px] font-medium mb-2.5">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-emerald-500" />
                        {tip.readTime}
                      </span>
                      <span>•</span>
                      <span>{tip.date}</span>
                    </div>
                    <h3 className="font-extrabold text-slate-950 dark:text-white text-sm md:text-base leading-snug group-hover:text-emerald-600 transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex justify-between items-center">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                      Read Online
                    </span>
                    <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter & CTA */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950/20 opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6">
          <span className="text-emerald-400 font-bold tracking-wider uppercase text-xs">
            Subscribe & Save
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Stay Updated with Store Inventory & Health Tips
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            Subscribe to our newsletter list. Receive stock restock alerts, vaccine availability notices, and local healthcare updates. No spam, ever.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto w-full flex flex-col sm:flex-row gap-3 mt-4">
            <input
              id="newsletter-email-input"
              type="email"
              placeholder="Enter your email address..."
              required
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              id="newsletter-subscribe-btn"
              type="submit"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-extrabold rounded-2xl shadow-xl shadow-emerald-600/10 transition-colors shrink-0"
            >
              Subscribe Now
            </button>
          </form>

          {emailSubscribed && (
            <p className="text-emerald-400 text-xs mt-2 animate-pulse">
              ✓ Successfully subscribed! Thank you for staying connected with Arun Medical Hall.
            </p>
          )}

          {/* Contact Direct Prompt */}
          <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-slate-400">
            <span>Prefer chat updates? Join our broadcast list</span>
            <a
              href="https://wa.me/918804358374?text=Hello%20Arun%20Medical%20Hall%2C%20please%20add%20me%20to%20your%20customer%20broadcast%20list%20for%20updates."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 rounded-xl font-bold transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-500 stroke-none" />
              Subscribe on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
