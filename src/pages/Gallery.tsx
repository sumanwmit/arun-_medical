import { useState, useMemo, MouseEvent } from "react";
import { X, ZoomIn, Eye, ChevronLeft, ChevronRight, Image } from "lucide-react";

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Main Store Front",
      category: "Store Front",
      desc: "Clean, high-visibility layout of Arun Medical Hall situated in Belaganj.",
      img: "https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Organized Pharmacy Racks",
      category: "Interior & Shelves",
      desc: "Fully categorized storage shelves to ensure instant drug location and zero dispensation delays.",
      img: "https://images.unsplash.com/photo-1607619056574-7b8d304a2c06?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "BP & Temperature Monitors",
      category: "Products & Equipment",
      desc: "Medical-grade automatic pressure diagnostic monitors and digital thermometers.",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Therapeutic Cold Storage",
      category: "Interior & Shelves",
      desc: "State-of-the-art medical grade refrigerator for temperature-sensitive drugs like insulin.",
      img: "https://images.unsplash.com/photo-1587854692152-cbe660dbbc88?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "First Aid & Hygiene Stack",
      category: "Products & Equipment",
      desc: "Premium surgical face masks, sterile dressings, antiseptics, and protective sanitizers.",
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Customer Consultation Corner",
      category: "Store Front",
      desc: "Dedicated spacious section for face-to-face pharmacist consultations and counseling.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filters = ["All", "Store Front", "Interior & Shelves", "Products & Equipment"];

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    return selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);
  }, [selectedFilter]);

  // Open lightbox modal
  const openLightbox = (id: number) => {
    const globalIdx = galleryItems.findIndex((item) => item.id === id);
    if (globalIdx !== -1) {
      setLightboxIndex(globalIdx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  // Slide through images inside Lightbox
  const showPrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIdx = (lightboxIndex - 1 + galleryItems.length) % galleryItems.length;
      setLightboxIndex(prevIdx);
    }
  };

  const showNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % galleryItems.length;
      setLightboxIndex(nextIdx);
    }
  };

  return (
    <main id="gallery-page" className="pt-20 overflow-x-hidden text-left">
      {/* Subpage Banner Header */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <span className="text-emerald-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
            VISUAL PORTFOLIO
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-sans">
            Store Photo Gallery
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mt-3">
            Explore photos of our clean storefront, highly sterile interiors, organized medicine shelves, and state-of-the-art therapeutic storage facilities.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Filters tab row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                id={`filter-${filter.toLowerCase().replace(/[^a-z]/g, "-")}`}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/10"
                    : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Interactive Photos Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item.id)}
                  className="group geometric-card overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-950">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Hover Zoom Overlay indicator */}
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white shadow-md">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-extrabold text-slate-950 dark:text-white text-base md:text-lg mb-1 flex items-center justify-between">
                      {item.title}
                      <ZoomIn className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all" />
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 dark:bg-slate-950 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
              <Image className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-900 dark:text-white font-bold">No items found</p>
            </div>
          )}
        </div>
      </section>

      {/* Full screen Lightbox Popup Modal */}
      {lightboxIndex !== null && (
        <div
          id="lightbox-modal"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md flex flex-col justify-between items-center py-6 px-4 animate-in fade-in duration-300"
        >
          {/* Lightbox Header Controls */}
          <div className="w-full max-w-5xl flex justify-between items-center text-white shrink-0">
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-950/50 border border-emerald-900/40 px-2.5 py-1 rounded-lg">
                {galleryItems[lightboxIndex].category}
              </span>
              <h4 className="text-sm font-bold text-slate-100 mt-1.5">
                {galleryItems[lightboxIndex].title}
              </h4>
            </div>
            <button
              onClick={closeLightbox}
              className="p-3 bg-slate-900/80 hover:bg-rose-600 text-white rounded-2xl border border-slate-800 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Mid Image with Slides Controls */}
          <div className="relative max-w-4xl w-full flex items-center justify-center shrink">
            {/* Slide left button */}
            <button
              onClick={showPrev}
              className="absolute left-0 md:-left-16 z-10 p-3 bg-slate-900/80 hover:bg-emerald-600 border border-slate-800 rounded-2xl text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Picture content */}
            <div
              className="bg-slate-950 max-h-[60vh] md:max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl relative border border-slate-900 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIndex].img}
                alt={galleryItems[lightboxIndex].title}
                className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Slide right button */}
            <button
              onClick={showNext}
              className="absolute right-0 md:-right-16 z-10 p-3 bg-slate-900/80 hover:bg-emerald-600 border border-slate-800 rounded-2xl text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox bottom description bar */}
          <div className="w-full max-w-2xl text-center shrink-0">
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              {galleryItems[lightboxIndex].desc}
            </p>
            <span className="text-[10px] text-slate-500 font-mono block mt-3">
              Image {lightboxIndex + 1} of {galleryItems.length}
            </span>
          </div>
        </div>
      )}
    </main>
  );
}
