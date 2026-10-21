import React from 'react';

interface FooterProps {
  onOpenSourcingModal: () => void;
  onOpenSellModal: () => void;
  onOpenAgentModal: () => void;
  onOpenChecklist: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSourcingModal,
  onOpenSellModal,
  onOpenAgentModal,
  onOpenChecklist,
  onOpenCalculator,
}) => {
  return (
    <footer className="w-full bg-[#0B192C] text-white border-t border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8">
        {/* Top Assurance Banner */}
        <div className="bg-[#10243E] rounded-xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 sm:mb-12 border border-slate-700/60 shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1B365D] flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-white text-[22px]">verified</span>
            </div>
            <div>
              <div className="font-title-md text-white text-sm sm:text-base font-bold">
                Connecting Zambia's vehicle buyers with verified agents and genuine sellers.
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Transparent, demand-led automotive matching across Lusaka and the Copperbelt.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="material-symbols-outlined text-[22px]">directions_car</span>
            <span className="material-symbols-outlined text-[22px]">handshake</span>
            <span className="material-symbols-outlined text-[22px]">verified_user</span>
          </div>
        </div>

        {/* 6 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 mb-10 text-xs">
          {/* Col 1 */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-white uppercase tracking-wider mb-1 text-[11px]">
              About AutoAce
            </div>
            <button onClick={onOpenChecklist} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              About AutoAce Zed
            </button>
            <button onClick={onOpenSourcingModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              How It Works
            </button>
            <button onClick={onOpenChecklist} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Transparency Charter
            </button>
            <button onClick={onOpenAgentModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Agent Standards
            </button>
            <a href="mailto:info@autoacezed.com" className="text-left text-slate-300 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-white uppercase tracking-wider mb-1 text-[11px]">
              For Buyers
            </div>
            <button onClick={onOpenSourcingModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Request a Car
            </button>
            <button onClick={onOpenCalculator} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Budget Calculator
            </button>
            <button onClick={onOpenSourcingModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Lusaka Sourcing
            </button>
            <button onClick={onOpenSourcingModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Copperbelt Sourcing
            </button>
            <button onClick={onOpenChecklist} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Buyer Safety Guide
            </button>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-white uppercase tracking-wider mb-1 text-[11px]">
              For Sellers &amp; Agents
            </div>
            <button onClick={onOpenSellModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Submit a Vehicle
            </button>
            <button onClick={onOpenAgentModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Agent Registration
            </button>
            <button onClick={onOpenAgentModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Lead Matching Info
            </button>
            <button onClick={onOpenAgentModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Agent FAQs
            </button>
            <button onClick={onOpenSellModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Seller Guidelines
            </button>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-white uppercase tracking-wider mb-1 text-[11px]">
              Guidance &amp; Advice
            </div>
            <button onClick={onOpenChecklist} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              RTSA Verification Tips
            </button>
            <button onClick={onOpenChecklist} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Vehicle Maintenance
            </button>
            <button onClick={onOpenCalculator} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Import vs Local Registered
            </button>
            <button onClick={onOpenChecklist} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Spare Parts Guide
            </button>
            <button onClick={onOpenCalculator} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Valuation Advice
            </button>
          </div>

          {/* Col 5 */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-white uppercase tracking-wider mb-1 text-[11px]">
              Help &amp; Contact
            </div>
            <button onClick={onOpenSourcingModal} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Help Centre
            </button>
            <a href="https://wa.me/260971234567" target="_blank" rel="noreferrer" className="text-left text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              WhatsApp Support
            </a>
            <div className="text-slate-400">
              Hubs: Lusaka &amp; Kitwe
            </div>
            <a href="mailto:info@autoacezed.com" className="text-left text-slate-300 hover:text-white transition-colors">
              info@autoacezed.com
            </a>
            <button onClick={onOpenChecklist} className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer">
              Terms of Sourcing
            </button>
          </div>

          {/* Col 6 */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-white uppercase tracking-wider mb-1 text-[11px]">
              Region
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="material-symbols-outlined text-[16px] text-slate-300">public</span>
              <span className="font-bold text-white">Zambia (ZMW / K)</span>
            </div>
            <div className="text-slate-400">Lusaka Central Hub</div>
            <div className="text-slate-400">Copperbelt Hub</div>
            <div className="mt-1 p-2 bg-[#10243E] rounded border border-slate-700 text-[10px] text-slate-400">
              All prices displayed in Zambian Kwacha (ZMW).
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <p>&copy; 2026 AutoAce Zed Ltd. All rights reserved. Registered automotive marketplace in Zambia.</p>
          <div className="flex items-center gap-3.5 flex-wrap">
            <button onClick={onOpenChecklist} className="hover:text-white transition-colors cursor-pointer">Terms &amp; Conditions</button>
            <button onClick={onOpenChecklist} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={onOpenChecklist} className="hover:text-white transition-colors cursor-pointer">Sourcing Charter</button>
            <button onClick={onOpenAgentModal} className="hover:text-white transition-colors cursor-pointer">Code of Conduct</button>
            <button onClick={onOpenChecklist} className="hover:text-white transition-colors cursor-pointer">Fraud Prevention</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
