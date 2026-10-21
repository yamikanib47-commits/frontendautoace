import React, { useState } from 'react';
import { INSPECTION_YARDS } from '../../data/mockData.ts';

interface InspectionYardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSourcingModal: () => void;
}

export const InspectionYardsModal: React.FC<InspectionYardsModalProps> = ({
  isOpen,
  onClose,
  onOpenSourcingModal,
}) => {
  const [selectedYard, setSelectedYard] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [preferredDate] = useState('Tomorrow 10:00 AM');

  if (!isOpen) return null;

  const handleBook = (yardName: string) => {
    setSelectedYard(yardName);
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl relative border border-slate-200 my-auto max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header */}
        <div className="mb-5 pr-8">
          <div className="flex items-center gap-1.5 text-[#1B365D] text-xs font-bold uppercase tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">location_searching</span>
            Verified Inspection Network
          </div>
          <h2 className="font-headline-md text-xl font-extrabold text-slate-900">
            Lusaka &amp; Copperbelt Yard Inspection Guide
          </h2>
          <p className="font-body-sm text-xs text-slate-500 mt-1">
            Certified automotive inspection locations equipped with hydraulic lifts, chassis stamping verification, and direct RTSA transfer desks.
          </p>
        </div>

        {booked && (
          <div className="mb-4 p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-800 text-center animate-pulse">
            Inspection Booked at {selectedYard}! An AutoAce inspector has been reserved for {preferredDate}.
          </div>
        )}

        {/* Yards Grid */}
        <div className="space-y-4">
          {INSPECTION_YARDS.map((yard) => (
            <div
              key={yard.id}
              className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#1B365D]/50 transition-all text-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#1B365D] text-[18px]">verified</span>
                    {yard.name}
                  </h3>
                  <span className="text-slate-500 text-xs">{yard.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${yard.contact}`}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-100 font-bold"
                  >
                    Call Yard
                  </a>
                  <button
                    onClick={() => handleBook(yard.name)}
                    className="px-3 py-1 bg-[#1B365D] text-white rounded-lg font-bold hover:bg-[#10243E] transition-colors cursor-pointer shadow-xs"
                  >
                    Book Viewing
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {yard.features.map((f, i) => (
                  <span
                    key={i}
                    className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[11px]"
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Hours: {yard.hours}</span>
                <span className="font-mono">{yard.contact}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenSourcingModal();
            }}
            className="text-xs text-[#1B365D] font-bold hover:underline cursor-pointer"
          >
            Need an agent to inspect a car for you? Click here
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
