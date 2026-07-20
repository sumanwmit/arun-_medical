import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Heart, Menu, X, Phone, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle sticky layout transitions on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services & Inventory", path: "/services" },
    { name: "Gallery Shop", path: "/gallery" },
    { name: "Contact & Orders", path: "/contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md border-b border-slate-100 dark:border-slate-900 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 group">
            {/* Clean SVG Logo with Business Initials AMH */}
            <div className="relative flex items-center justify-center w-11 h-11 bg-emerald-600 rounded-xl shadow-lg shadow-emerald-600/20 group-hover:bg-emerald-700 transition-all duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white animate-pulse"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="absolute text-[9px] font-black text-white bottom-0.5 tracking-wider font-sans leading-none">
                AMH
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-tight tracking-tight text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                ARUN MEDICAL HALL
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase leading-none">
                Belaganj, Bihar • Since 1998
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-all duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 relative py-1.5 ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500 after:rounded-full"
                      : "text-slate-600 dark:text-slate-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Call-to-Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8804358374"
              className="flex items-center gap-2 px-4 py-2 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Call Pharmacy
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/15 hover:shadow-emerald-600/25 transition-all duration-300"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Order Medicine
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:8804358374"
              className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl"
              aria-label="Call pharmacy"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-white"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-white dark:bg-slate-950 z-40 flex flex-col justify-between p-6 border-t border-slate-100 dark:border-slate-900 animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-5 mt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-bold py-2 border-b border-slate-50 dark:border-slate-900 transition-colors ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-800 dark:text-slate-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mb-8">
            <a
              href="tel:8804358374"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 text-center bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl text-sm font-bold border border-slate-200 dark:border-slate-800"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call Pharmacy Directly
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 text-center bg-emerald-600 text-white rounded-2xl text-sm font-bold shadow-lg shadow-emerald-600/20"
            >
              <ShoppingCart className="w-4 h-4" />
              Order Medicine on WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
