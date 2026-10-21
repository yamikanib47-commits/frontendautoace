import React, { useState } from 'react';
import { Vehicle } from '../../data/mockData.ts';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onRequestSourcing: (carName: string) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onRequestSourcing,
}) => {
  const [inquirySent, setInquirySent] = useState(false);
  // Smart Defaults (Principle 1)
  const [buyerName, setBuyerName] = useState('Chileshe M.');
  const [buyerPhone, setBuyerPhone] = useState('097 ');
  const [selectedViewingDate, setSelectedViewingDate] = useState('Tomorrow 10:00 AM');

  if (!vehicle) return null;

  const handleInquire = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-4 sm:p-6 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-4">
          <div className="flex items-center gap-1.5 mb-1 flex-wrap text-xs">
            <span className="bg-[#F0F4F8] text-[#1B365D] font-bold text-[11px] px-2 py-0.5 rounded-full border border-blue-100">
              {vehicle.badge}
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-semibold text-slate-600 text-[11px]">{vehicle.year} Model</span>
            <span className="text-slate-300">·</span>
            <span className="font-semibold text-slate-600 text-[11px]">{vehicle.location}</span>
          </div>
          <h2 className="font-headline-lg text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
            {vehicle.name}
          </h2>
          <div className="flex items-baseline gap-2 mt-1 flex-wrap">
            <span className="text-[#1B365D] font-price-headline text-xl sm:text-2xl font-bold">
              {vehicle.displayPrice}
            </span>
            {/* Principle 6 (Anchoring & Relative Comparison) */}
            <span className="text-xs text-slate-500">
              (Est. street dealer markup: <span className="line-through">K{vehicle.guideBudget + 35000}</span> · Save K35,000 via AutoAce)
            </span>
          </div>
        </div>

        {/* Car Image Preview */}
        <div className="w-full h-48 sm:h-56 bg-slate-50 rounded-xl flex items-center justify-center p-3 sm:p-4 mb-4 border border-slate-100">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="max-h-40 sm:max-h-48 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Principle 3: Reciprocity - Real Inspection Scorecard given first */}
        <div className="bg-[#F0F4F8] border border-blue-200 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between text-xs font-bold text-[#1B365D] mb-2">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              AutoAce Certified Yard Inspection Scorecard
            </span>
            <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              Passed 9.4/10
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div className="bg-white p-2 rounded-lg border border-slate-200">
              <span className="text-slate-400 block text-[10px]">Chassis VIN Match</span>
              <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px]">check_circle</span>
                100% Genuine
              </span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200">
              <span className="text-slate-400 block text-[10px]">Engine Compression</span>
              <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px]">check_circle</span>
                Optimal (185 psi)
              </span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200">
              <span className="text-slate-400 block text-[10px]">ZRA Duty Status</span>
              <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px]">check_circle</span>
                Cleared in Full
              </span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200">
              <span className="text-slate-400 block text-[10px]">Bank Encumbrance</span>
              <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px]">check_circle</span>
                Zero Lien
              </span>
            </div>
          </div>
        </div>

        {/* Technical Specs Grid */}
        <div className="bg-slate-50 rounded-xl p-3.5 mb-4 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2.5 border border-slate-200">
          <div>
            <span className="text-slate-400 block text-[11px]">Engine</span>
            <strong className="text-slate-900 font-semibold">{vehicle.engine}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Transmission</span>
            <strong className="text-slate-900 font-semibold">{vehicle.transmission}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Fuel Type</span>
            <strong className="text-slate-900 font-semibold">{vehicle.fuelType}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Mileage</span>
            <strong className="text-slate-900 font-semibold">{vehicle.mileage}</strong>
          </div>
        </div>

        {/* Overview Description */}
        <div className="mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Vehicle Summary</h4>
          <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        {/* Principle 6: Contrast Effect - Inspection fee vs Risk */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4 text-xs text-emerald-950">
          <div className="flex items-center gap-1.5 font-bold mb-0.5">
            <span className="material-symbols-outlined text-[16px] text-emerald-700">shield</span>
            Physical Escort &amp; Verification Guarantee
          </div>
          <p className="text-emerald-800 text-[11px] leading-tight">
            Full physical yard inspection and title transfer escrow is just <strong>K850 (0.38% of vehicle value)</strong> to safeguard your entire investment against stolen titles or undisclosed mechanical failures.
          </p>
        </div>

        {/* Agent Assignment Card & Direct Inquiry with Smart Defaults */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 mb-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Assigned Verified Agent</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{vehicle.agentName}</span>
            </div>
            <a
              href={`https://wa.me/260971234567?text=Hi%2C%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(vehicle.name)}%20listed%20on%20AutoAce%20Zed.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>WhatsApp Agent Now</span>
            </a>
          </div>

          {inquirySent ? (
            <div className="bg-emerald-100 text-emerald-800 text-center py-2.5 rounded-lg text-xs font-bold animate-pulse">
              Viewing Booked! Agent {vehicle.agentName} will contact {buyerPhone} with the inspection yard location.
            </div>
          ) : (
            <form onSubmit={handleInquire} className="space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  required
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="Your Full Name"
                  className="px-3 py-2 text-base sm:text-xs bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#1B365D]"
                />
                <input
                  type="tel"
                  required
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  placeholder="WhatsApp Number"
                  className="px-3 py-2 text-base sm:text-xs bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#1B365D]"
                />
                <select
                  value={selectedViewingDate}
                  onChange={(e) => setSelectedViewingDate(e.target.value)}
                  className="px-3 py-2 text-base sm:text-xs bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#1B365D] cursor-pointer"
                >
                  <option value="Tomorrow 10:00 AM">Tomorrow 10:00 AM</option>
                  <option value="Tomorrow 2:00 PM">Tomorrow 2:00 PM</option>
                  <option value="Saturday 11:00 AM">Saturday 11:00 AM</option>
                  <option value="Weekend Sourcing Pass">Weekend Inspection Pass</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#1B365D] hover:bg-[#10243E] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">event</span>
                  <span>Book Protected Yard Viewing with {vehicle.agentName}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRequestSourcing(vehicle.name);
                  }}
                  className="px-4 py-3 bg-[#0B192C] hover:bg-black text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Request Similar Car
                </button>
              </div>

              {/* Principle 5: Psychological framing on dismiss */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-[11px] text-slate-400 hover:text-slate-600 underline cursor-pointer"
                >
                  I'll risk private unverified seller without AutoAce escrow
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
