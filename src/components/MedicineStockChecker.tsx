import { useState, useMemo } from "react";
import { Search, AlertCircle, CheckCircle, HelpCircle, ShoppingCart } from "lucide-react";
import stockData from "../data/medicineStock.json";

export interface Medicine {
  id: string;
  name: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: string;
  category: string;
}

export default function MedicineStockChecker() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter medicines based on search term and category
  const filteredMedicines = useMemo(() => {
    return (stockData as Medicine[]).filter((med) => {
      const matchesSearch =
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || med.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Extract unique categories for filter tabs
  const categories = useMemo(() => {
    const list = (stockData as Medicine[]).map((med) => med.category);
    return ["All", ...Array.from(new Set(list))];
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50">
            <CheckCircle className="w-3.5 h-3.5" />
            Available
          </span>
        );
      case "Limited Stock":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50">
            <AlertCircle className="w-3.5 h-3.5" />
            Limited Stock
          </span>
        );
      case "Out of Stock":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50">
            <AlertCircle className="w-3.5 h-3.5" />
            Out of Stock
          </span>
        );
    }
  };

  const generateWhatsAppInquiryUrl = (medicineName: string) => {
    const businessName = "Arun Medical Hall";
    const baseText = `Hello ${businessName}, I would like to inquire about the availability of the following medicine:

Medicine: ${medicineName}
Status: Inquiring from website stock checker

Please let me know if it is available and how I can order it.`;
    return `https://wa.me/918804358374?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <div id="medicine-stock-checker" className="geometric-card p-6 md:p-8">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-xs">
          Exclusive Online Inventory Check
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white mt-1">
          Medicine Stock & Availability Checker
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm md:text-base">
          Search our catalog in real-time. If an item is in stock, you can instantly order or place an inquiry via WhatsApp.
        </p>
      </div>

      {/* Filters & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            id="med-search-input"
            type="text"
            placeholder="Search by medicine name, brand, or disease/category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Category Dropdown */}
        <div className="w-full md:w-60">
          <select
            id="category-filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stock Cards Grid */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="geometric-card p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status)}
                </div>

                <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {med.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Brand: <span className="font-medium text-slate-700 dark:text-slate-300">{med.brand}</span>
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 dark:border-slate-900 text-xs text-slate-600 dark:text-slate-400">
                  <div>
                    <span className="block text-slate-400">MRP (INR)</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      ₹{med.mrp.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400">Expiry</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {med.expiry}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-900/50 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {med.status === "Available" ? (
                    <span>Qty: <strong className="text-emerald-600 dark:text-emerald-400">{med.availableQuantity}</strong> units</span>
                  ) : med.status === "Limited Stock" ? (
                    <span className="text-amber-600 dark:text-amber-400 font-medium">Hurry, only {med.availableQuantity} left</span>
                  ) : (
                    <span className="text-rose-500 dark:text-rose-400">Restocking soon</span>
                  )}
                </span>

                <a
                  href={generateWhatsAppInquiryUrl(med.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    med.status !== "Out of Stock"
                      ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md hover:shadow-emerald-600/10"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white"
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {med.status !== "Out of Stock" ? "Order Now" : "Inquire"}
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
          <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-800 dark:text-slate-200 font-medium text-lg">No medicines found</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-md mx-auto">
            We might still have it in stock! Contact us directly on WhatsApp at <strong>+91 88043 58374</strong> with your prescription, and we will check our offline pharmacy racks immediately.
          </p>
          <a
            href="https://wa.me/918804358374?text=Hello%20Arun%20Medical%20Hall%2C%20I%20couldn%27t%20find%20a%20medicine%20in%20your%20online%20stock%20checker.%20Can%20you%20please%20check%20if%20this%20is%20available%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-600/10 transition-all duration-300"
          >
            Inquire on WhatsApp
          </a>
        </div>
      )}

      {/* Info footer */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p className="flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4 text-emerald-600" />
          All medicines require a valid doctor prescription upon purchase/delivery.
        </p>
        <p className="font-mono text-slate-400">
          Source: medicineStock.json • Updated daily
        </p>
      </div>
    </div>
  );
}
