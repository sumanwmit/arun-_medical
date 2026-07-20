import { useState, FormEvent, ChangeEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, Send, CheckCircle2, ShoppingBag } from "lucide-react";

export default function Contact() {
  // General Inquiry Form State
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquirySubject, setInquirySubject] = useState("");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Medicine Order Section State
  const [orderName, setOrderName] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderMedicine, setOrderMedicine] = useState("");
  const [orderQuantity, setOrderQuantity] = useState("1 Pack / Strip");
  const [orderDelivery, setOrderDelivery] = useState("Home Delivery");
  const [orderTime, setOrderTime] = useState("Within 2 Hours");
  const [orderNotes, setOrderNotes] = useState("");
  const [orderFile, setOrderFile] = useState<File | null>(null);
  const [orderError, setOrderError] = useState("");

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryEmail && inquiryMsg) {
      setInquirySubmitted(true);
      setInquiryName("");
      setInquiryEmail("");
      setInquirySubject("");
      setInquiryMsg("");
      setTimeout(() => setInquirySubmitted(false), 5000);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setOrderFile(e.target.files[0]);
    }
  };

  // Compile fields and open WhatsApp with formatted message
  const handleWhatsAppOrder = (e: FormEvent) => {
    e.preventDefault();
    if (!orderName || !orderPhone || !orderMedicine) {
      setOrderError("Please fill in all required fields (Name, Phone Number, and Medicine Name) before ordering.");
      return;
    }
    setOrderError("");

    const businessName = "Arun Medical Hall";
    const formattedMessage = `Hello ${businessName}

*MEDICINE ORDER FROM WEBSITE*
----------------------------------------
👤 *Customer Name:* ${orderName}
📞 *Phone Number:* ${orderPhone}
✉️ *Email Address:* ${orderEmail || "N/A"}
💊 *Medicine Name:* ${orderMedicine}
📦 *Medicine Quantity:* ${orderQuantity}
🚚 *Delivery Option:* ${orderDelivery}
⏰ *Preferred Time:* ${orderTime}
📝 *Additional Notes:* ${orderNotes || "None"}
📄 *Prescription Attachment:* ${orderFile ? `Yes (${orderFile.name})` : "Will carry paper slip during pickup/delivery"}
----------------------------------------
Please confirm my order and send the invoice.`;

    const encodedText = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/918804358374?text=${encodedText}`;
    window.open(waUrl, "_blank");
  };

  return (
    <main id="contact-page" className="pt-20 overflow-x-hidden text-left">
      {/* Subpage Banner Header */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <span className="text-emerald-400 font-extrabold text-xs tracking-widest uppercase block mb-2">
            REACH OUT TO US
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-sans">
            Contact & Orders
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mt-3">
            Inquire about stock, submit general concerns, or place an instant medicine order with our secure WhatsApp order desk.
          </p>
        </div>
      </section>

      {/* Main split sections */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info, Map & Directions */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
                  Store Front Coordinates
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white mt-1">
                  Business Information
                </h2>
              </div>

              {/* Info Details List */}
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-2xl text-emerald-600 dark:text-emerald-400 shrink-0 h-12 w-12 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/50">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">Store Address</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      XX9F+JRG, Belaganj, Bihar 804403
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      Near Belaganj Railway Station, Bihar
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-2xl text-emerald-600 dark:text-emerald-400 shrink-0 h-12 w-12 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/50">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">Call Support</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      <a href="tel:8804358374" className="hover:text-emerald-600 font-bold">
                        +91 88043 58374
                      </a>
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      Available for telephonic consultations
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-2xl text-emerald-600 dark:text-emerald-400 shrink-0 h-12 w-12 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/50">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">Email Contact</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      <a href="mailto:arunmedicalhall.belaganj@gmail.com" className="hover:text-emerald-600">
                        arunmedicalhall.belaganj@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-2xl text-emerald-600 dark:text-emerald-400 shrink-0 h-12 w-12 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/50">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">Working Hours</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      Mon - Sun: 08:00 AM - 10:00 PM
                    </p>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-1 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-100/40 w-fit">
                      Open Every Single Day
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Directions, Call, WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-3.5 mt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Arun+Medical+Hall+Belaganj+Bihar+804403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-2xl transition-all"
                >
                  <Compass className="w-4.5 h-4.5 text-emerald-400" />
                  Get Route Directions
                </a>
                <a
                  href="tel:8804358374"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-2xl transition-all border border-slate-200"
                >
                  <Phone className="w-4.5 h-4.5 text-blue-600" />
                  Call Now
                </a>
              </div>

              {/* Google Maps Location Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-150 dark:border-slate-800 shadow-lg h-60 bg-slate-100">
                <iframe
                  title="Detailed Store Locator Map"
                  src="https://maps.google.com/maps?q=Arun%20Medical%20Hall,%20Belaganj,%20Bihar%20804403&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  aria-label="Google Map locator"
                ></iframe>
              </div>
            </div>

            {/* Right: General Inquiry Form */}
            <div className="lg:col-span-7 geometric-card p-6 md:p-10">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs">
                Electronic Mail desk
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-950 dark:text-white mt-1 mb-6">
                Send Us a General Message
              </h3>

              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Ramesh Singh"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="e.g. ramesh@gmail.com"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiry-subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Inquiry Subject
                  </label>
                  <input
                    id="inquiry-subject"
                    type="text"
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    placeholder="e.g. Franchise / Bulk Medicine Supply Inquiry"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiry-msg" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Your Message *
                  </label>
                  <textarea
                    id="inquiry-msg"
                    required
                    rows={4}
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    placeholder="Please type your questions or suggestions in detail..."
                    className="w-full px-4 py-3 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
                  ></textarea>
                </div>

                <button
                  id="inquiry-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-extrabold rounded-xl shadow-lg shadow-emerald-600/10 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Electronic Message
                </button>

                {inquirySubmitted && (
                  <div className="p-4 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center gap-3 text-xs md:text-sm animate-pulse border border-emerald-200">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                    <span>Your inquiry message has been submitted successfully. We will email or call you shortly.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* COMPLETE MEDICINE ORDER SECTION */}
      <section id="medicine-order-section" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-850">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-xs flex justify-center items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-emerald-600" />
              DIRECT WHATSAPP ORDER DESK
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white mt-1">
              Complete Medicine Order Form
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              Fill in your prescription details below. When you click <strong>"Order via WhatsApp"</strong>, we will compile your order and open WhatsApp automatically with a formatted prescription quote request.
            </p>
          </div>

          <div className="geometric-card p-6 md:p-10">
            {orderError && (
              <div className="mb-6 p-4 bg-rose-100 text-rose-800 rounded-2xl flex items-center gap-3 text-xs md:text-sm border border-rose-200">
                <span>⚠️ {orderError}</span>
              </div>
            )}
            <form onSubmit={handleWhatsAppOrder} className="space-y-6">
              
              {/* Customer Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="order-name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Customer Name *
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    required
                    value={orderName}
                    onChange={(e) => setOrderName(e.target.value)}
                    placeholder="e.g. Arun Kumar Prasad"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="order-phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    required
                    value={orderPhone}
                    onChange={(e) => setOrderPhone(e.target.value)}
                    placeholder="e.g. 8804358374"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="order-email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="order-email"
                  type="email"
                  value={orderEmail}
                  onChange={(e) => setOrderEmail(e.target.value)}
                  placeholder="e.g. client@gmail.com"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                />
              </div>

              {/* Medicine Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label htmlFor="order-medicine" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Medicine Name(s) *
                  </label>
                  <input
                    id="order-medicine"
                    type="text"
                    required
                    value={orderMedicine}
                    onChange={(e) => setOrderMedicine(e.target.value)}
                    placeholder="e.g. Dolo 650mg, Montair LC"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="order-qty" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Quantity *
                  </label>
                  <input
                    id="order-qty"
                    type="text"
                    required
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(e.target.value)}
                    placeholder="e.g. 2 Strips / 20 Tablets"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Delivery Option & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="order-delivery" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Delivery Option *
                  </label>
                  <select
                    id="order-delivery"
                    value={orderDelivery}
                    onChange={(e) => setOrderDelivery(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all cursor-pointer"
                  >
                    <option value="Home Delivery">Home Delivery (Belaganj Market area)</option>
                    <option value="Store Pickup">Store Pickup (Reserve in Pharmacy)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="order-time" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Preferred Delivery/Pickup Time
                  </label>
                  <select
                    id="order-time"
                    value={orderTime}
                    onChange={(e) => setOrderTime(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all cursor-pointer"
                  >
                    <option value="Within 2 Hours">As soon as possible (Urgent)</option>
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                    <option value="Evening (06:00 PM - 09:00 PM)">Evening (06:00 PM - 09:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Prescription Upload Mock */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Doctor Prescription Slip Upload (Optional)
                </label>
                <div className="border border-dashed border-slate-300 dark:border-slate-800 rounded-xl p-5 text-center bg-slate-50 dark:bg-slate-950 hover:bg-slate-100/50 dark:hover:bg-slate-900/35 transition-colors relative cursor-pointer">
                  <input
                    id="prescription-file-upload"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-slate-400">
                    <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">
                      {orderFile ? `✓ Selected: ${orderFile.name}` : "Click to select or drag Prescription photo (JPG/PNG/PDF)"}
                    </span>
                    <span className="text-[11px] block mt-1">
                      Max file size: 5MB • All Rx are double checked by our pharmacist
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="order-notes" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Delivery Address / Special Instructions
                </label>
                <textarea
                  id="order-notes"
                  rows={3}
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="e.g. Near Belaganj Block Office, Red House Gate. Please call before dispatch."
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                ></textarea>
              </div>

              {/* Form Actions Order via WhatsApp & Call Store */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                <button
                  id="order-via-whatsapp-btn"
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-600/10 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white shrink-0" />
                  Order via WhatsApp (Instant Dispatch)
                </button>
                <a
                  id="order-call-now-btn"
                  href="tel:8804358374"
                  className="sm:w-60 flex items-center justify-center gap-2 py-4 bg-slate-900 hover:bg-slate-850 text-white font-extrabold text-sm rounded-xl transition-colors"
                >
                  <Phone className="w-4.5 h-4.5 text-emerald-400 shrink-0 animate-bounce" />
                  Call Store Directly
                </a>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
