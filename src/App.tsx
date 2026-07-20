import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalWidgets from "./components/GlobalWidgets";
import { Heart } from "lucide-react";

// Lazy loading our 5 individual React SPA pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

// Custom elegant fallback spinner for lazy-loaded route transitions
function PageLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white dark:bg-slate-950">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        <Heart className="w-6 h-6 text-emerald-500 absolute animate-pulse fill-emerald-500" />
      </div>
      <p className="text-slate-500 dark:text-slate-400 font-bold mt-4 tracking-wider text-xs uppercase animate-pulse">
        Loading Pharmacy Page...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between">
        
        {/* Sticky Header with navigation links */}
        <Header />

        {/* Multi-page Router Routes */}
        <div className="flex-1">
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback redirect path to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>

        {/* Global floating action tools (WhatsApp, Call, Scroll up, CTA banner) */}
        <GlobalWidgets />

        {/* Standard tracking business footer */}
        <Footer />
      </div>
    </Router>
  );
}
