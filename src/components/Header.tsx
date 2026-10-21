import React, { useState } from 'react';

interface HeaderProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
  onOpenSourcingModal: (prefillCar?: string) => void;
  onOpenSellModal: () => void;
  onOpenAgentModal: () => void;
  onOpenCalculator?: () => void;
  onOpenChecklist?: () => void;
  onFilterCategory?: (category: string) => void;
  unreadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  onOpenSourcingModal,
  onOpenSellModal,
  onOpenAgentModal,
  onOpenCalculator,
  onOpenChecklist,
  onFilterCategory,
  unreadCount = 2,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'suv' | 'twin' | 'sedan' | 'budget'>('all');

  const notifications = [
    {
      id: 1,
      title: 'New Vehicle Match in Woodlands',
      desc: 'Jaecoo E5 SUV matches your K650k budget criteria in Lusaka.',
      time: '15m ago',
    },
    {
      id: 2,
      title: 'RTSA Clearance Verified',
      desc: 'Toyota Axio documentation verified by Agent Mweembe.',
      time: '1h ago',
    }
  ];

  const handleQuickFilter = (type: string, tabKey: any) => {
    setActiveTab(tabKey);
    onFilterCategory?.(type);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200">
        {/* Top Announcement Bar */}
        <aside className="w-full bg-[#0B192C] text-white px-3 sm:px-6">
          <div className="max-w-7xl mx-auto h-8 flex items-center justify-between text-xs">
            <span className="text-slate-300 truncate text-[11px] sm:text-xs">
              Zambia's automotive marketplace · Verified agents &amp; RTSA whitebook clearance
            </span>
            <button
              onClick={() => onOpenSourcingModal()}
              className="inline-flex items-center gap-1 bg-[#1B365D] hover:bg-[#10243E] text-white transition-colors text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 cursor-pointer shadow-xs border border-white/10"
            >
              <span>Find a vehicle</span>
              <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
            </button>
          </div>
        </aside>

        {/* Main Brand & Nav Bar */}
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6">
          <div className="h-14 sm:h-16 flex items-center justify-between gap-3">
            {/* Left Brand & Desktop Links */}
            <div className="flex items-center gap-5 lg:gap-8">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-0.5 text-left cursor-pointer select-none"
              >
                <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-none">
                  autoace<span className="text-[#1B365D]">zed</span>
                </span>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                <button
                  onClick={() => onNavigate('home')}
                  className={`text-xs font-bold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeScreen === 'home'
                      ? 'text-[#1B365D] bg-[#F0F4F8]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Find a Car
                </button>
                <button
                  onClick={() => {
                    onNavigate('home');
                    document.getElementById('popular-sourcing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Popular Models
                </button>
                <button
                  onClick={() => {
                    onNavigate('home');
                    document.getElementById('browse-need')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Browse Budgets
                </button>
                <button
                  onClick={() => {
                    onNavigate('home');
                    document.getElementById('market-guides')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Sourcing Guide
                </button>
                <button
                  onClick={onOpenSellModal}
                  className="text-slate-600 hover:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Sell a Car
                </button>
                <button
                  onClick={onOpenAgentModal}
                  className="text-slate-600 hover:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  For Agents
                </button>
                <button
                  onClick={() => {
                    onNavigate('home');
                    document.getElementById('editorial-advice')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Buying Guide
                </button>
              </nav>
            </div>

            {/* Right Action Icons & Badges */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <nav className="hidden sm:flex items-center gap-2.5 mr-1 text-xs font-bold">
                <button
                  onClick={() => onOpenSourcingModal()}
                  className="text-[#1B365D] hover:underline cursor-pointer"
                >
                  Buyers
                </button>
                <button
                  onClick={onOpenSellModal}
                  className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Sellers
                </button>
                <button
                  onClick={() => {
                    document.getElementById('recent-matches')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-600 hover:text-slate-900 transition-colors relative flex items-center cursor-pointer"
                >
                  Matching
                  <span className="inline-block w-2 h-2 rounded-full bg-[#1B365D] ml-1"></span>
                </button>
              </nav>

              <div className="flex items-center gap-1">
                <a
                  href="https://wa.me/260971234567"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Concierge"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                  title="WhatsApp Support"
                >
                  <span className="material-symbols-outlined text-[19px]">chat_bubble</span>
                </a>

                {/* Notifications Bell */}
                <div className="relative">
                  <button
                    aria-label="Notifications"
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors relative cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[19px]">notifications</span>
                    {unreadCount > 0 && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#1B365D]"></span>
                    )}
                  </button>

                  {notificationsOpen && (
                    <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="font-bold text-slate-900 text-xs">Live Notifications</span>
                        <span className="text-[10px] bg-[#F0F4F8] text-[#1B365D] px-2 py-0.5 rounded font-bold">
                          Zambia Network
                        </span>
                      </div>
                      <div className="divide-y divide-slate-100 max-h-56 overflow-y-auto mt-1">
                        {notifications.map((n) => (
                          <div key={n.id} className="py-2 text-left">
                            <div className="text-xs font-bold text-slate-900">{n.title}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">{n.desc}</div>
                            <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setNotificationsOpen(false)}
                        className="w-full mt-2 text-center text-xs font-bold text-[#1B365D] hover:underline cursor-pointer pt-1"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={onOpenAgentModal}
                  className="hidden md:inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Agent Portal
                </button>

                <button
                  onClick={onOpenAgentModal}
                  className="w-8 h-8 rounded-full bg-[#1B365D] hover:bg-[#10243E] flex items-center justify-center cursor-pointer shadow-xs text-white"
                  title="Account"
                >
                  <span className="material-symbols-outlined text-[17px]">person</span>
                </button>

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-100 cursor-pointer ml-0.5"
                  aria-label="Open Navigation Menu"
                >
                  <span className="material-symbols-outlined text-[24px]">menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Quick Filter & Navigation Strip */}
        <div className="w-full bg-[#F8FAFC] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar snap-scroll-x">
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => {
                  onNavigate('home');
                  document.getElementById('hero-search')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#1B365D] text-white hover:bg-[#10243E] transition-colors cursor-pointer shadow-xs snap-item"
              >
                <span className="material-symbols-outlined text-[15px]">search</span>
                Find a Car
              </button>
              <button
                onClick={() => {
                  document.getElementById('browse-need')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer snap-item"
              >
                <span className="material-symbols-outlined text-[15px] text-[#1B365D]">payments</span>
                Browse Budgets
              </button>
              <button
                onClick={onOpenAgentModal}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer snap-item"
              >
                <span className="material-symbols-outlined text-[15px] text-[#1B365D]">verified</span>
                Verified Agents
              </button>
              <button
                onClick={onOpenSellModal}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer snap-item"
              >
                <span className="material-symbols-outlined text-[15px] text-[#1B365D]">sell</span>
                Submit Vehicle
              </button>
              <button
                onClick={() => {
                  document.getElementById('market-guides')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer snap-item"
              >
                <span className="material-symbols-outlined text-[15px] text-[#1B365D]">lightbulb</span>
                Sourcing Advice
              </button>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 text-slate-500 text-xs">
              <span className="hidden sm:inline font-bold text-[10px] uppercase tracking-wider text-slate-400">
                Filter:
              </span>
              <button
                onClick={() => handleQuickFilter('SUV', 'suv')}
                className={`px-2.5 py-0.5 rounded-full text-xs transition-colors cursor-pointer font-medium snap-item ${
                  activeTab === 'suv'
                    ? 'bg-[#1B365D] text-white font-bold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                SUVs
              </button>
              <button
                onClick={() => handleQuickFilter('Twin Cab', 'twin')}
                className={`px-2.5 py-0.5 rounded-full text-xs transition-colors cursor-pointer font-medium snap-item ${
                  activeTab === 'twin'
                    ? 'bg-[#1B365D] text-white font-bold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Twin Cabs
              </button>
              <button
                onClick={() => handleQuickFilter('Sedan', 'sedan')}
                className={`px-2.5 py-0.5 rounded-full text-xs transition-colors cursor-pointer font-medium snap-item ${
                  activeTab === 'sedan'
                    ? 'bg-[#1B365D] text-white font-bold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Sedans
              </button>
              <button
                onClick={() => handleQuickFilter('under-250k', 'budget')}
                className={`px-2.5 py-0.5 rounded-full text-xs transition-colors cursor-pointer font-medium snap-item ${
                  activeTab === 'budget'
                    ? 'bg-[#1B365D] text-white font-bold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Under K250k
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Slide-Over Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-[#0B192C] text-white">
              <span className="font-display text-xl font-extrabold tracking-tight">
                autoace<span className="text-blue-300">zed</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                aria-label="Close Navigation"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4 text-sm">
              <div className="bg-[#F0F4F8] p-3 rounded-xl border border-blue-100">
                <div className="text-xs font-bold text-[#1B365D] uppercase tracking-wider mb-1">
                  Zambia Sourcing Network
                </div>
                <p className="text-xs text-slate-600">
                  Connect directly with vetted agents in Lusaka, Kitwe, and Ndola.
                </p>
              </div>

              {/* Primary Actions */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    onOpenSourcingModal();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2.5 p-3 rounded-xl bg-[#1B365D] text-white font-bold text-xs shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">search</span>
                  <span>Find a Car / Sourcing Request</span>
                </button>
                <button
                  onClick={() => {
                    onOpenSellModal();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2.5 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#1B365D]">sell</span>
                  <span>Sell My Vehicle (Zambian Plate)</span>
                </button>
                <button
                  onClick={() => {
                    onOpenAgentModal();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2.5 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#1B365D]">badge</span>
                  <span>Agent Portal &amp; Live Demand Board</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="pt-2 border-t border-slate-100 space-y-1 text-slate-700 text-xs font-semibold">
                <button
                  onClick={() => {
                    document.getElementById('popular-sourcing')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Popular Models in Zambia</span>
                  <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('browse-need')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Browse by Budget in Kwacha</span>
                  <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('market-guides')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>RTSA &amp; Market Guides</span>
                  <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('recent-matches')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Recent Coordinated Matches</span>
                  <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
                </button>
                <button
                  onClick={() => {
                    onOpenCalculator?.();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-slate-50 flex items-center justify-between text-[#1B365D]"
                >
                  <span className="font-bold">Kwacha Duty Calculator</span>
                  <span className="material-symbols-outlined text-[16px]">calculate</span>
                </button>
                <button
                  onClick={() => {
                    onOpenChecklist?.();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-slate-50 flex items-center justify-between text-[#1B365D]"
                >
                  <span className="font-bold">RTSA Whitebook Checklist</span>
                  <span className="material-symbols-outlined text-[16px]">fact_check</span>
                </button>
              </div>

              {/* Direct Support */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://wa.me/260971234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold"
                >
                  <span className="material-symbols-outlined text-[18px] text-emerald-600">chat</span>
                  <span>WhatsApp Sourcing Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
