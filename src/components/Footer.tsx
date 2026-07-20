import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const location = useLocation();

  // --- Start exact global tracking hook provided in prompt ---
  useEffect(() => {
    const TRACKING_ENDPOINT = "https://tools.cprajapati.com/tracker/track.php";
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get("cid") || localStorage.getItem("wmit_active_cid");
    if (urlParams.get("cid")) {
      localStorage.setItem("wmit_active_cid", urlParams.get("cid"));
    }
    if (!cid) return;
    let visitorId =
      localStorage.getItem("wmit_visitor_id") ||
      "wmit_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("wmit_visitor_id", visitorId);
    let sessionId =
      sessionStorage.getItem("wmit_session_id") ||
      "wmit_" + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem("wmit_session_id", sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split("?")[0] : "Home";
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || "",
        device: window.innerWidth < 768 ? "Mobile" : "Desktop",
        browser: navigator.userAgent,
        action: "init",
      };
      fetch(TRACKING_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: "page_change",
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], {
          type: "application/json",
        });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch((err) => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("pagehide", sendExitPayload);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendExitPayload();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pagehide", sendExitPayload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  // --- End exact tracking hook ---

  // Trigger tracking on React Router's SPA page change
  useEffect(() => {
    // This helper makes sure page change tracking occurs for in-app router navigation as well
    const TRACKING_ENDPOINT = "https://tools.cprajapati.com/tracker/track.php";
    const urlParams = new URLSearchParams(window.location.search);
    const cid = urlParams.get("cid") || localStorage.getItem("wmit_active_cid");
    if (!cid) return;

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split("?")[0] : "Home";
    };

    const payload = {
      cid: cid,
      visitor_id: localStorage.getItem("wmit_visitor_id") || "wmit_anonymous",
      session_id: sessionStorage.getItem("wmit_session_id") || "wmit_session_anon",
      page_name: getPageName(),
      referrer: document.referrer || "",
      device: window.innerWidth < 768 ? "Mobile" : "Desktop",
      browser: navigator.userAgent,
      action: "init",
    };

    fetch(TRACKING_ENDPOINT, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }, [location.pathname]);

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Business Info Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-600 p-2 rounded-xl text-white">
                <Heart className="w-6 h-6 fill-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                ARUN MEDICAL HALL
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Your trusted partner in health and wellness. Serving the community of Belaganj with authentic prescription medicines, quality healthcare products, and compassionate counseling since 1998.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Services & Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Gallery Shop Photos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Contact & Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Working Hours
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-200">Daily Pharmacy Hours</span>
                  <span className="text-xs text-slate-400 block mt-1">08:00 AM - 10:00 PM</span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded mt-1.5 inline-block">
                    Open Seven Days A Week
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-200">Location</span>
                  <span className="text-xs text-slate-400 leading-relaxed block mt-1">
                    XX9F+JRG, Belaganj, Bihar 804403
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-1">
                    Near Belaganj Railway Station
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Google Maps Location
            </h3>
            <div className="rounded-xl overflow-hidden border border-slate-900 shadow-lg h-44 bg-slate-900 relative">
              <iframe
                title="Arun Medical Hall Location Map"
                src="https://maps.google.com/maps?q=Arun%20Medical%20Hall,%20Belaganj,%20Bihar%20804403&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer"
                aria-label="Google Maps locator for Arun Medical Hall"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Policies, Terms, Disclaimer and Copyright Section */}
        <div className="border-t border-slate-900 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link to="/contact?section=privacy" className="hover:text-slate-300 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/contact?section=terms" className="hover:text-slate-300 transition-colors duration-200">
              Terms & Conditions
            </Link>
            <Link to="/contact?section=disclaimer" className="hover:text-slate-300 transition-colors duration-200">
              Disclaimer
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="leading-relaxed">
              &copy; {new Date().getFullYear()} <span className="text-slate-300 font-medium">ARUN MEDICAL HALL</span>. All rights reserved.
            </p>
            <p className="mt-1">
              Developed by{" "}
              <a
                href="https://main.webmakerit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium"
              >
                WMIT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
