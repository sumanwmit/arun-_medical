import { useState, useEffect } from "react";
import { MessageSquare, Phone, ArrowUp, X, CheckSquare, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function GlobalWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top if scrolled past 300px
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Show sticky CTA banner if scrolled past 600px and has not been closed
      const isClosed = localStorage.getItem("amh_sticky_cta_closed") === "true";
      if (window.scrollY > 600 && !isClosed) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeStickyCTA = () => {
    localStorage.setItem("amh_sticky_cta_closed", "true");
    setShowStickyCTA(false);
  };

  const waText = "Hello Arun Medical Hall, I would like to order medicines from your pharmacy.";
  const waUrl = `https://wa.me/918804358374?text=${encodeURIComponent(waText)}`;

  return (
    <>
      {/* Floating Action Buttons Container (Bottom Right) */}
      <div id="floating-actions" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="p-3.5 bg-slate-900/90 dark:bg-slate-800/95 text-white hover:bg-emerald-600 rounded-2xl shadow-xl hover:shadow-emerald-600/20 backdrop-blur-md transition-all duration-300 scale-100 hover:scale-110 active:scale-95 group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Direct Call Button */}
        <a
          id="floating-call-btn"
          href="tel:8804358374"
          className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl hover:shadow-blue-600/20 transition-all duration-300 flex items-center justify-center scale-100 hover:scale-115 active:scale-95 group relative"
          aria-label="Call Arun Medical Hall"
        >
          <Phone className="w-5.5 h-5.5 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Call Store: 8804358374
          </span>
        </a>

        {/* WhatsApp Floating Action Button */}
        <a
          id="floating-whatsapp-btn"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center scale-100 hover:scale-115 active:scale-95 animate-bounce group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          {/* Pulse Effect Rings */}
          <span className="absolute inline-flex h-full w-full rounded-2xl bg-emerald-400 opacity-30 animate-ping -z-10"></span>
          <span className="absolute right-14 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            WhatsApp Order
          </span>
        </a>
      </div>

      {/* Sticky Bottom CTA Bar */}
      {showStickyCTA && (
        <div
          id="sticky-cta-banner"
          className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-emerald-900/50 backdrop-blur-md text-white py-4 px-4 sm:px-6 shadow-2xl animate-in slide-in-from-bottom duration-500"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Info */}
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600/25 p-2 rounded-xl text-emerald-400 border border-emerald-900/50 shrink-0">
                <Heart className="w-5 h-5 fill-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-100">
                  Quick Home Delivery in Belaganj!
                </p>
                <p className="text-xs text-slate-400">
                  Send your prescription to us on WhatsApp. Get a direct quote and doorstep delivery in 10-30 minutes.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3.5 w-full md:w-auto shrink-0 justify-end">
              <button
                onClick={closeStickyCTA}
                className="p-2.5 hover:bg-slate-900 text-slate-400 hover:text-white rounded-xl transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
              <Link
                to="/services"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-bold rounded-xl transition-all"
              >
                Check Stock
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/25 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Upload Slip
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
