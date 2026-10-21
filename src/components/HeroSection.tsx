import React, { useState } from 'react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onFilterBudget: (budgetRange: string) => void;
  onFilterCategory: (category: string) => void;
  onOpenSourcingModal: (query?: string) => void;
  onOpenSellModal: (regOrModel?: string) => void;
  onOpenAgentModal: (phone?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onFilterBudget,
  onFilterCategory,
  onOpenSourcingModal,
  onOpenSellModal,
  onOpenAgentModal,
}) => {
  const [activeTab, setActiveTab] = useState<'find' | 'sell' | 'agent'>('find');
  const [searchQuery, setSearchQuery] = useState('');
  const [sellPlate, setSellPlate] = useState('');
  const [agentPhone, setAgentPhone] = useState('');

  const quickSearches = [
    { label: 'Toyota Axio', count: '14 active requests' },
    { label: 'Honda Fit Hybrid', count: '9 requests' },
    { label: 'Prado TX', count: '6 requests' },
    { label: 'Toyota Hilux GD-6', count: '11 requests' },
    { label: 'Mazda CX-5', count: '8 requests' }
  ];

  const handleFindSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      const el = document.getElementById('popular-sourcing');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenSourcingModal();
    }
  };

  const handleSellSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSellModal(sellPlate.trim());
  };

  const handleAgentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAgentModal(agentPhone.trim());
  };

  return (
    <section id="hero-search" className="relative w-full bg-[#0B192C] text-white overflow-hidden pb-10 sm:pb-14 pt-4 sm:pt-6 border-b border-slate-800">
      {/* Background Navy Blue Illumination */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-[#1B365D]/25 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Eyebrow & Brand Heading */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <button
            onClick={() => onOpenSourcingModal()}
            className="group inline-flex items-center gap-2 bg-[#10243E] border border-slate-700/80 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#152E4E] transition-all cursor-pointer shadow-sm text-left max-w-full active:scale-[0.98]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="font-display text-[11px] sm:text-xs font-bold tracking-wider text-slate-200 uppercase flex items-center gap-1.5 truncate">
              ZAMBIA DEMAND MATCHING SYSTEM · VERIFIED RTSA &amp; ZRA DUTY CLEARED
              <span className="w-5 h-5 rounded-full bg-[#1B365D] text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
              </span>
            </span>
          </button>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 max-w-3xl leading-[1.15]">
            Find the right vehicle through the right connection in Zambia.
          </h1>

          <p className="text-slate-300 font-body-md text-xs sm:text-sm mt-3 max-w-2xl px-2 leading-relaxed">
            Specify your desired car, target Kwacha budget, and city. AutoAce coordinates direct introductions with verified local agents and inspected vehicle owners across Lusaka, the Copperbelt, and nationwide.
          </p>
        </div>

        {/* Central Interactive Console */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main Quiet Console Surface */}
          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-4 sm:p-6 relative z-20 border border-slate-200/90 backdrop-blur-sm">
            {/* Tab switch with tactile pill indicator */}
            <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mb-4 border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => setActiveTab('find')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-[0.98] ${
                  activeTab === 'find'
                    ? 'bg-[#1B365D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="material-symbols-outlined text-[17px]">search</span>
                <span>Find a car</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sell')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-[0.98] ${
                  activeTab === 'sell'
                    ? 'bg-[#1B365D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="material-symbols-outlined text-[17px]">sell</span>
                <span>Sell my car</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('agent')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-[0.98] ${
                  activeTab === 'agent'
                    ? 'bg-[#1B365D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="material-symbols-outlined text-[17px]">badge</span>
                <span>Agent console</span>
              </button>
            </div>

            {/* Tab 1: Find A Car */}
            {activeTab === 'find' && (
              <div className="flex flex-col gap-3.5">
                <form onSubmit={handleFindSubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                      search
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Which car are you looking for? (e.g. Axio, Fit, Prado TX, Hilux)"
                      className="w-full pl-11 pr-3 py-3 bg-slate-50 rounded-xl text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1B365D] border border-slate-200 transition-all font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1B365D] hover:bg-[#10243E] text-white flex items-center justify-center gap-2 transition-all shadow-xs text-xs sm:text-sm font-bold cursor-pointer shrink-0 active:scale-[0.98]"
                  >
                    <span>Find My Car</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </form>

                {/* Live Demand Suggestions */}
                <div className="flex items-center gap-1.5 flex-wrap text-xs text-slate-500 pt-0.5">
                  <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">Trending in Lusaka:</span>
                  {quickSearches.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setSearchQuery(item.label);
                        onSearch(item.label);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#F0F4F8] hover:text-[#1B365D] text-slate-700 transition-colors cursor-pointer text-[11px] flex items-center gap-1 font-medium border border-slate-200/60"
                      title={item.count}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-slate-400 font-mono">({item.count.split(' ')[0]})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Sell My Car */}
            {activeTab === 'sell' && (
              <form onSubmit={handleSellSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-extrabold text-[10px] px-2 py-0.5 rounded shadow-xs font-mono">
                      ZM
                    </div>
                    <input
                      type="text"
                      value={sellPlate}
                      onChange={(e) => setSellPlate(e.target.value.toUpperCase())}
                      placeholder="ENTER REGISTRATION / MODEL (e.g. BAF 1234)"
                      className="w-full pl-12 pr-3 py-3 bg-yellow-50/70 rounded-xl text-base sm:text-sm uppercase tracking-wider text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B365D] border border-yellow-200 font-mono font-bold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1B365D] hover:bg-[#10243E] text-white transition-all font-bold text-xs sm:text-sm whitespace-nowrap shadow-xs cursor-pointer active:scale-[0.98]"
                  >
                    Submit vehicle details
                  </button>
                </div>
                <p className="text-center sm:text-left text-xs text-slate-500">
                  Connect your vehicle directly with qualified buyers and vetted agents across Zambia with clean RTSA transfer.
                </p>
              </form>
            )}

            {/* Tab 3: Become an Agent */}
            {activeTab === 'agent' && (
              <form onSubmit={handleAgentSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                      call
                    </span>
                    <input
                      type="tel"
                      value={agentPhone}
                      onChange={(e) => setAgentPhone(e.target.value)}
                      placeholder="Enter phone number (e.g. 097... or +260...)"
                      className="w-full pl-11 pr-3 py-3 bg-slate-50 rounded-xl text-base sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1B365D] border border-slate-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-[#10243E] text-white text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-[0.98]"
                  >
                    Access Agent Console
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-0.5 text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-[#1B365D] font-bold">
                    <span className="material-symbols-outlined text-[15px]">verified</span>
                    58 vetted Zambian agents online
                  </span>
                  <span className="text-slate-400">· Real-time demand queue matching</span>
                </div>
              </form>
            )}
          </div>

          {/* Taste Skill: Aligned Market Data Figures Ribbon */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-white text-xs">
            <div className="bg-[#10243E]/90 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Active Demand</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white">K24.8M ZMW</span>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[18px]">payments</span>
            </div>
            <div className="bg-[#10243E]/90 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">RTSA Clearance</span>
                <span className="font-mono text-sm sm:text-base font-bold text-emerald-400">100% Verified</span>
              </div>
              <span className="material-symbols-outlined text-emerald-400 text-[18px]">verified</span>
            </div>
            <div className="bg-[#10243E]/90 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Avg Match Speed</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white">2.4 Hours</span>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[18px]">bolt</span>
            </div>
            <div className="bg-[#10243E]/90 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Inspection Hubs</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white">4 Locations</span>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[18px]">location_on</span>
            </div>
          </div>

          {/* Quick Attribute Pill Navigation (Smooth horizontal swipe) */}
          <div className="mt-4 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar snap-scroll-x py-1 px-1">
            <button
              onClick={() => onFilterBudget('under-150k')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-800 hover:bg-[#F0F4F8] hover:text-[#1B365D] transition-colors shadow-xs shrink-0 cursor-pointer border border-slate-200 snap-item active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[15px] text-slate-500">payments</span>
              <span>Under K150k</span>
            </button>
            <button
              onClick={() => onFilterBudget('150k-300k')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-800 hover:bg-[#F0F4F8] hover:text-[#1B365D] transition-colors shadow-xs shrink-0 cursor-pointer border border-slate-200 snap-item active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[15px] text-slate-500">savings</span>
              <span>K150k - K300k</span>
            </button>
            <button
              onClick={() => onFilterBudget('300k-500k')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-800 hover:bg-[#F0F4F8] hover:text-[#1B365D] transition-colors shadow-xs shrink-0 cursor-pointer border border-slate-200 snap-item active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[15px] text-slate-500">account_balance_wallet</span>
              <span>K300k - K500k</span>
            </button>
            <button
              onClick={() => onFilterBudget('over-500k')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-800 hover:bg-[#F0F4F8] hover:text-[#1B365D] transition-colors shadow-xs shrink-0 cursor-pointer border border-slate-200 snap-item active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[15px] text-slate-500">diamond</span>
              <span>Over K500k</span>
            </button>
            <button
              onClick={() => onFilterCategory('SUV')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-800 hover:bg-[#F0F4F8] hover:text-[#1B365D] transition-colors shadow-xs shrink-0 cursor-pointer border border-slate-200 snap-item active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[15px] text-slate-500">directions_car</span>
              <span>SUVs</span>
            </button>
            <button
              onClick={() => onFilterCategory('Twin Cab')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-800 hover:bg-[#F0F4F8] hover:text-[#1B365D] transition-colors shadow-xs shrink-0 cursor-pointer border border-slate-200 snap-item active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[15px] text-slate-500">local_shipping</span>
              <span>Twin Cabs</span>
            </button>
            <button
              onClick={() => onFilterCategory('fuel-savers')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-800 hover:bg-[#F0F4F8] hover:text-[#1B365D] transition-colors shadow-xs shrink-0 cursor-pointer border border-slate-200 snap-item active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[15px] text-slate-500">eco</span>
              <span>Fuel Savers</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
