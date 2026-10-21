import React from 'react';

interface PracticalToolsSectionProps {
  onOpenChecklist: () => void;
  onOpenYardsGuide: () => void;
  onOpenCalculator: () => void;
  onOpenSourcingModal: () => void;
}

export const PracticalToolsSection: React.FC<PracticalToolsSectionProps> = ({
  onOpenChecklist,
  onOpenYardsGuide,
  onOpenCalculator,
  onOpenSourcingModal,
}) => {
  return (
    <section id="market-guides" className="w-full bg-[#F1F5F9] py-12 sm:py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4 pb-4 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-1.5 text-[#1B365D] mb-1 font-bold text-xs tracking-wider uppercase">
              <span className="material-symbols-outlined text-[18px]">build_circle</span>
              INTERACTIVE MARKET UTILITIES &amp; CHECKLISTS
            </div>
            <h2 className="font-headline-lg text-slate-900 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              Tools designed for the Zambian automotive market
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Verify compliance, estimate taxes, and locate vetted physical inspection centers across Lusaka and the Copperbelt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {/* Tool 1 */}
          <button
            type="button"
            onClick={onOpenChecklist}
            className="group bg-white rounded-2xl p-5 shadow-xs hover:shadow-xl transition-all text-left cursor-pointer border border-slate-200/90 hover:border-[#1B365D] flex flex-col justify-between active:scale-[0.99]"
          >
            <div>
              <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 bg-slate-100">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Checklist inspection"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApYQrKY1NUa8U29xRU2fEVPrusBKX9g_7cF2IVPqQBSqHcEn0PsYuh7v2bNRYjtXRcpqjIxKpR07Y97NhUL4kT8BNU2L5cADg2iGEOy0N5atqKSyjHJxKBTPXrielYMah2R_gYoWqQDl27ywJESwW30Rwi4HkSNYKkWICOM91prK19gg0M2jfpvK9FN3rXfLW5Ln_55L0dcVFkSF6_UaTdy8ImR4i4_UoaDYY2knL4Bu67tgngBPlpsA"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[10px] font-bold bg-[#F0F4F8] text-[#1B365D] px-2 py-0.5 rounded font-mono border border-blue-100">
                  8 Statutory Gates
                </span>
                <span className="text-[11px] text-slate-400">RTSA Standard</span>
              </div>

              <h3 className="font-title-md text-slate-900 group-hover:text-[#1B365D] transition-colors flex items-center justify-between text-sm sm:text-base font-bold">
                RTSA Whitebook &amp; Title Checklist
                <span className="material-symbols-outlined text-[17px] text-[#1B365D]">arrow_forward</span>
              </h3>
              <p className="font-body-sm text-xs text-slate-500 mt-1.5 leading-relaxed">
                Step-by-step 8-point physical check: VIN stamping, engine block number, owner NRC, and encumbrance validation before Kwacha handover.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#1B365D]">
              <span>Launch Verification Checklist</span>
              <span className="material-symbols-outlined text-[15px]">chevron_right</span>
            </div>
          </button>

          {/* Tool 2 */}
          <button
            type="button"
            onClick={onOpenYardsGuide}
            className="group bg-white rounded-2xl p-5 shadow-xs hover:shadow-xl transition-all text-left cursor-pointer border border-slate-200/90 hover:border-[#1B365D] flex flex-col justify-between active:scale-[0.99]"
          >
            <div>
              <div
                className="w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 relative bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRHUm0vasqCk10a4cWM4169SebLOPEOtOgEKYosF-E8txGr-ZrqEBABSmIa4k39c3w9pdojwZwJu1VTKFEc3wxr7kJGHLCSB-DtkQ6TRv8hTTMwT0GT3sYH8asoAauHthoxWc5y39nvSTlJSjYfCRl6_U9KkxbCAYeDPa9StfPx2pMpdriVjw0148LqyVOl81Zeb1dtAvpNMNixOZMZFjRIAe1IAibum3RhdVohlcqjQsy9yoKaoabIg')`
                }}
              >
                <div className="absolute inset-0 bg-[#0B192C]/40 flex items-center justify-center p-2">
                  <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-slate-900 flex items-center gap-1 shadow-md text-xs font-bold">
                    <span className="material-symbols-outlined text-[#1B365D] text-[15px]">location_searching</span>
                    <span>4 Regional Hubs</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[10px] font-bold bg-[#F0F4F8] text-[#1B365D] px-2 py-0.5 rounded font-mono border border-blue-100">
                  Lusaka &amp; Copperbelt
                </span>
                <span className="text-[11px] text-slate-400">On-site RTSA</span>
              </div>

              <h3 className="font-title-md text-slate-900 group-hover:text-[#1B365D] transition-colors flex items-center justify-between text-sm sm:text-base font-bold">
                Agent Sourcing &amp; Inspection Yards
                <span className="material-symbols-outlined text-[17px] text-[#1B365D]">arrow_forward</span>
              </h3>
              <p className="font-body-sm text-xs text-slate-500 mt-1.5 leading-relaxed">
                Directory of verified physical inspection yards equipped with hydraulic lifts, diagnostic scanners, and legal transfer desks.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#1B365D]">
              <span>View Certified Centers Map</span>
              <span className="material-symbols-outlined text-[15px]">chevron_right</span>
            </div>
          </button>

          {/* Tool 3 */}
          <button
            type="button"
            onClick={onOpenCalculator}
            className="group bg-white rounded-2xl p-5 shadow-xs hover:shadow-xl transition-all text-left cursor-pointer border border-slate-200/90 hover:border-[#1B365D] flex flex-col justify-between active:scale-[0.99]"
          >
            <div>
              <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 bg-slate-100">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Budget planning"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQx6kUvqpzzFPFEf4Ts8ShAkQSCCSAffDghO_fSJROzlWr4xU_GyVeCX0vmUiLQHAnGmEZoIL-NEqipPpyoiDj1Zi6vFHrGXeZXECeTeSCpyTyzS_zTwfmJq5adRGOWeHce4R3a8y3sPCdE29nBGbsLdXUlKFpeSBJBLSNchT5lVgxmCPbRK4GG2vdyZIXzFBovUWEqI6aiRmsZHjn-BEIpQUegj-wSco0_8Rxot2LzjT5K2vRPY-OZQ"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[10px] font-bold bg-[#F0F4F8] text-[#1B365D] px-2 py-0.5 rounded font-mono border border-blue-100">
                  ZRA &amp; CIF Model
                </span>
                <span className="text-[11px] text-slate-400">Live Kwacha Rate</span>
              </div>

              <h3 className="font-title-md text-slate-900 group-hover:text-[#1B365D] transition-colors flex items-center justify-between text-sm sm:text-base font-bold">
                Vehicle Sourcing &amp; Kwacha Calculator
                <span className="material-symbols-outlined text-[17px] text-[#1B365D]">arrow_forward</span>
              </h3>
              <p className="font-body-sm text-xs text-slate-500 mt-1.5 leading-relaxed">
                Compute total landed costs in ZMW: CIF purchase price, ZRA customs duty, excise duty, VAT (16%), carbon tax, and plate fees.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#1B365D]">
              <span>Open Landed Cost Calculator</span>
              <span className="material-symbols-outlined text-[15px]">chevron_right</span>
            </div>
          </button>
        </div>

        {/* Quiet Sourcing Dispatch Callout */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div>
            <h4 className="font-headline-md text-slate-900 text-sm sm:text-base font-bold">
              Looking for an unlisted model or customized delivery?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Submit your exact vehicle specification and our Lusaka coordination desk will dispatch it to accredited agents immediately.
            </p>
          </div>
          <button
            onClick={onOpenSourcingModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1B365D] hover:bg-[#10243E] text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer active:scale-[0.98] shrink-0"
          >
            <span>Submit Requirements</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
};
