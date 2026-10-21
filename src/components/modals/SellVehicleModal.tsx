import React, { useState } from 'react';

interface SellVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillPlate?: string;
  onVehicleSubmitted?: (vehicle: any) => void;
}

export const SellVehicleModal: React.FC<SellVehicleModalProps> = ({
  isOpen,
  onClose,
  prefillPlate = '',
  onVehicleSubmitted,
}) => {
  // Principle 1: Smart Defaults (Pre-selected with most common Zambian car sale)
  const [plate, setPlate] = useState(prefillPlate || 'BAF 4820');
  const [make, setMake] = useState('Toyota');
  const [model, setModel] = useState('Axio 1.5L VVT-i');
  const [year, setYear] = useState('2018');
  const [askingPrice, setAskingPrice] = useState('240,000');
  const [location, setLocation] = useState('Lusaka');
  const [mileage, setMileage] = useState('65,000 km');
  const [transmission, setTransmission] = useState<'Automatic' | 'Manual'>('Automatic');
  const [hasWhitebook, setHasWhitebook] = useState(true);
  const [dutyPaid, setDutyPaid] = useState(true);
  const [phone, setPhone] = useState('097 ');
  const [sellerName, setSellerName] = useState('Mwansa');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onVehicleSubmitted?.({
      plate,
      make,
      model,
      year,
      askingPrice,
      location,
      transmission,
      hasWhitebook,
      dutyPaid,
      sellerName,
      phone,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg p-4 sm:p-6 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!submitted ? (
          <div>
            {/* Principle 2: Goal Gradient Effect - Never start at 0%! Show 33% progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-[#1B365D] uppercase tracking-wider text-[11px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">trending_up</span>
                  Listing Progress: 33% Complete
                </span>
                <span className="text-slate-400 text-[11px] font-mono">Step 2 of 3</span>
              </div>
              
              {/* Progress bar with initial momentum */}
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-[#1B365D] rounded-full transition-all duration-500 w-[33%]"></div>
              </div>

              {/* Goal gradient steps indicator */}
              <div className="flex items-center justify-between text-[10px] text-slate-500 pb-2 border-b border-slate-100">
                <span className="font-bold text-emerald-700 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  1. Valuation Benchmark (~K240k)
                </span>
                <span className="font-bold text-[#1B365D] flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B365D]"></span>
                  2. Plate &amp; Specs
                </span>
                <span className="text-slate-400 flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  3. 38 Buyer Matches
                </span>
              </div>
            </div>

            {/* Principle 3: Reciprocity - Free Instant Valuation Benchmark */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-900">
              <div className="flex items-center justify-between font-bold mb-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-amber-700">query_stats</span>
                  Recent Sales Benchmark in Lusaka
                </span>
                <span className="bg-white/80 px-2 py-0.5 rounded text-[10px] text-amber-800 font-mono">
                  Verified Data
                </span>
              </div>
              <p className="text-[11px] text-amber-800 leading-relaxed">
                Last 3 <strong>{make} {model || 'Sedans'}</strong> in Lusaka sold between <strong>K230,000 and K255,000</strong> within 4 days. 38 active buyers currently searching this bracket.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              {/* Zambian Plate input with smart default */}
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Zambian Vehicle Registration (Number Plate)
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-extrabold text-[10px] px-2 py-0.5 rounded shadow-xs">
                    ZM
                  </div>
                  <input
                    type="text"
                    required
                    value={plate}
                    onChange={(e) => setPlate(e.target.value.toUpperCase())}
                    placeholder="e.g. BAF 1234 or BAD 5678"
                    className="w-full pl-12 pr-3 py-2.5 bg-yellow-50/70 border border-yellow-200 rounded-xl font-mono font-bold tracking-wider text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D] text-base sm:text-xs"
                  />
                </div>
              </div>

              {/* Make & Model */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Make</label>
                  <select
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer font-medium"
                  >
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Kia">Kia</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Jaecoo">Jaecoo</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Model Name</label>
                  <input
                    type="text"
                    required
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. Axio, Hilux, Fit, CX-5"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs font-medium"
                  />
                </div>
              </div>

              {/* Year & Asking Price */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Year</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer"
                  >
                    {Array.from({ length: 15 }, (_, i) => 2026 - i).map((y) => (
                      <option key={y} value={y.toString()}>{y}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Your Asking Price (ZMW)</label>
                  <input
                    type="text"
                    required
                    value={askingPrice}
                    onChange={(e) => setAskingPrice(e.target.value)}
                    placeholder="e.g. 240,000"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1B365D] font-bold text-[#1B365D] text-base sm:text-xs"
                  />
                </div>
              </div>

              {/* Mileage & Location */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Odometer Mileage</label>
                  <input
                    type="text"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    placeholder="e.g. 65,000 km"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">City / Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer"
                  >
                    <option value="Lusaka">Lusaka</option>
                    <option value="Kitwe">Kitwe</option>
                    <option value="Ndola">Ndola</option>
                    <option value="Livingstone">Livingstone</option>
                    <option value="Kabwe">Kabwe</option>
                  </select>
                </div>
              </div>

              {/* Documentation Toggles */}
              <div className="space-y-2 pt-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={hasWhitebook}
                    onChange={(e) => setHasWhitebook(e.target.checked)}
                    className="rounded text-[#1B365D] focus:ring-[#1B365D] w-4 h-4 cursor-pointer"
                  />
                  <span>Original RTSA Whitebook on hand in my name / company</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={dutyPaid}
                    onChange={(e) => setDutyPaid(e.target.checked)}
                    className="rounded text-[#1B365D] focus:ring-[#1B365D] w-4 h-4 cursor-pointer"
                  />
                  <span>ZRA Customs Duties fully settled (Clean documents)</span>
                </label>
              </div>

              {/* Principle 5: Loss Aversion & Protection from Scams */}
              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-[#1B365D]">
                <div className="flex items-center gap-1.5 font-bold mb-0.5">
                  <span className="material-symbols-outlined text-[15px]">security</span>
                  AutoAce Escrow &amp; Safe Test Drive Protection
                </div>
                <p className="text-slate-600 leading-tight">
                  Never hand your keys or original title to unverified street middlemen. Our accredited agents accompany buyers to protect your vehicle.
                </p>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Seller Name</label>
                  <input
                    type="text"
                    required
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="097 555 4321"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs"
                  />
                </div>
              </div>

              {/* Principle 1 & 6: Action button with relative benefit */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1B365D] hover:bg-[#10243E] text-white rounded-xl font-bold transition-all shadow-md text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Publish Vehicle &amp; Connect with 38 Active Buyers</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-slate-900">
              Vehicle Registered Successfully!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your <strong className="text-slate-900">{year} {make} {model || 'Vehicle'}</strong> ({plate}) has been catalogued. 38 buyers looking for cars under K{askingPrice} have been notified.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-xl text-xs text-yellow-900 max-w-sm mx-auto">
              Asking Price: <strong>K{askingPrice}</strong> · Escrow Protection Enabled
            </div>
            <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
              An accredited AutoAce inspection agent will contact you on {phone} to coordinate viewings with verified buyers.
            </p>
            <div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-2.5 bg-[#0B192C] text-white rounded-xl text-xs font-bold hover:bg-black transition-colors cursor-pointer shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
