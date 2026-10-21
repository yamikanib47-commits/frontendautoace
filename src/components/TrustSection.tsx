import React from 'react';

export const TrustSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Contrast & Psychology Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-6">
          <div className="flex items-center gap-3.5 bg-slate-50 rounded-xl px-5 py-3.5 w-full md:w-auto shadow-xs border border-slate-200 flex-1">
            <div className="w-11 h-11 rounded-xl bg-[#1B365D] flex items-center justify-center text-white shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <div className="font-title-md text-slate-900 text-sm font-bold">
                Smart Sourcing vs. Street Risk
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Connecting Zambian buyers directly with vetted agents and genuine sellers. Zero dead stock, verified bank transfer escrow.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-[#F0F4F8] rounded-xl px-5 py-3.5 w-full md:w-auto flex-1 shadow-xs border border-blue-100">
            <div className="w-11 h-11 rounded-xl bg-[#1B365D] flex items-center justify-center text-white shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[24px]">shield</span>
            </div>
            <div>
              <div className="font-title-md text-[#1B365D] text-sm font-bold">
                RTSA Whitebook Title Guarantee
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Every vehicle match undergoes mandatory chassis VIN stamping verification before any Kwacha is exchanged.
              </div>
            </div>
          </div>
        </div>

        {/* Psychological Comparison Bar (Contrast Effect: Principle 6 & Loss Aversion: Principle 5) */}
        <div className="bg-[#0B192C] text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-amber-400 text-[28px] shrink-0">
              warning
            </span>
            <div className="text-xs">
              <span className="font-bold text-amber-300 block text-xs sm:text-sm">
                Why 1 in 4 unverified car buyers in Zambia lose up to K45,000:
              </span>
              <span className="text-slate-300 text-[11px] sm:text-xs">
                Street brokers often hide altered chassis numbers, duplicate Whitebooks, or unpaid ZRA duty bills. AutoAce inspects vehicles first at certified yards.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-slate-400 block uppercase font-mono">AutoAce Escrow</span>
              <span className="text-emerald-400 font-bold text-xs">100% Protected</span>
            </div>
            <span className="h-8 w-px bg-slate-700 hidden sm:block"></span>
            <span className="text-xs font-bold text-white bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              K0 Buyer Sourcing Fee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
