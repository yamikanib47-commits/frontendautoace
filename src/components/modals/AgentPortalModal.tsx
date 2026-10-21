import React, { useState } from 'react';

interface AgentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillPhone?: string;
}

export const AgentPortalModal: React.FC<AgentPortalModalProps> = ({
  isOpen,
  onClose,
  prefillPhone = '',
}) => {
  const [activeTab, setActiveTab] = useState<'board' | 'register' | 'standards'>('board');
  const [claimedLeads, setClaimedLeads] = useState<string[]>([]);
  const [phone, setPhone] = useState(prefillPhone);
  const [agencyName, setAgencyName] = useState('');
  const [hub, setHub] = useState('Lusaka Hub');
  const [registered, setRegistered] = useState(false);

  if (!isOpen) return null;

  const sampleDemands = [
    {
      id: 'd-101',
      buyer: 'Chanda M.',
      car: 'Toyota Prado TX 3.0D (2016-2019)',
      budget: 'K750,000 - K850,000',
      location: 'Kitwe, Copperbelt',
      urgency: 'Immediate (Cash ready)',
      notes: 'Must have genuine mileage under 100k km, original whitebook, clean 1KD engine.',
      postedTime: '18 mins ago'
    },
    {
      id: 'd-102',
      buyer: 'Mulenga K.',
      car: 'Honda Fit Hybrid or Axio',
      budget: 'K180,000 - K240,000',
      location: 'Lusaka Central / Woodlands',
      urgency: 'Within 3 days',
      notes: 'Daily school run & office commuter. Looking for immediate test drive.',
      postedTime: '42 mins ago'
    },
    {
      id: 'd-103',
      buyer: 'Agritec Logistics Ltd',
      car: 'Toyota Hilux GD-6 Double Cab 4x4',
      budget: 'K850,000 - K950,000',
      location: 'Lusaka / Kafue Corridor',
      urgency: 'Within 7 days',
      notes: 'Corporate procurement. Must have valid ZRA VAT clearance and dealer service record.',
      postedTime: '2 hours ago'
    },
    {
      id: 'd-104',
      buyer: 'Dr. Mwansa',
      car: 'Mazda CX-5 or Volvo XC60',
      budget: 'K400,000 - K520,000',
      location: 'Ndola, Copperbelt',
      urgency: 'Browsing (2 weeks)',
      notes: 'Prefers leather interior, reverse camera, duty fully paid.',
      postedTime: '3 hours ago'
    }
  ];

  const handleClaim = (id: string) => {
    if (!claimedLeads.includes(id)) {
      setClaimedLeads([...claimedLeads, id]);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-4 sm:p-6 shadow-2xl relative border border-slate-200 my-auto max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header */}
        <div className="mb-5 pr-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs uppercase font-extrabold text-[#1B365D] tracking-wider">
              AUTOACE ZED AGENT CONSOLE
            </span>
          </div>
          <h2 className="font-headline-md text-xl sm:text-2xl font-extrabold text-slate-900">
            Vetted Automotive Agent Portal
          </h2>
          <p className="font-body-sm text-xs text-slate-500 mt-1">
            Connecting Zambia's verified vehicle agents with qualified buyer demand across Lusaka, Copperbelt, and nationwide.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 mb-5 border-b border-slate-100 pb-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('board')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'board'
                ? 'bg-[#1B365D] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Live Demand Board ({sampleDemands.length})
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'register'
                ? 'bg-[#1B365D] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Agent Accreditation Form
          </button>
          <button
            onClick={() => setActiveTab('standards')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'standards'
                ? 'bg-[#1B365D] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Code of Conduct
          </button>
        </div>

        {/* Tab Content 1: Live Buyer Demand Board */}
        {activeTab === 'board' && (
          <div className="space-y-4">
            <div className="bg-[#F0F4F8] border border-blue-200 p-3 rounded-xl flex items-center justify-between text-xs text-[#1B365D]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">campaign</span>
                Real-time buyer requests broadcasted across verified agents in Lusaka &amp; Copperbelt.
              </span>
              <span className="font-bold">{claimedLeads.length} Claimed</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleDemands.map((demand) => {
                const isClaimed = claimedLeads.includes(demand.id);
                return (
                  <div
                    key={demand.id}
                    className={`rounded-xl p-4 border transition-all text-xs flex flex-col justify-between ${
                      isClaimed
                        ? 'bg-emerald-50/60 border-emerald-300 ring-1 ring-emerald-200'
                        : 'bg-white border-slate-200 shadow-xs hover:border-[#1B365D]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="font-bold text-slate-900 text-sm">{demand.car}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono">
                          {demand.postedTime}
                        </span>
                      </div>

                      <div className="font-bold text-[#1B365D] text-sm mb-2">
                        {demand.budget}
                      </div>

                      <div className="space-y-1 text-slate-600 text-[11px] mb-3">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-slate-400">location_on</span>
                          <span>{demand.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-slate-400">timer</span>
                          <span className="font-semibold text-slate-800">{demand.urgency}</span>
                        </div>
                        <p className="text-slate-500 italic mt-1.5 line-clamp-2">
                          "{demand.notes}"
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      {isClaimed ? (
                        <div className="flex items-center justify-between">
                          <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
                            <span className="material-symbols-outlined text-[16px]">check_circle</span>
                            Lead Unlocked
                          </span>
                          <a
                            href="https://wa.me/260971234567"
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700"
                          >
                            Open WhatsApp
                          </a>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleClaim(demand.id)}
                          className="w-full py-2 bg-[#0B192C] hover:bg-[#1B365D] text-white font-bold rounded-lg transition-colors cursor-pointer text-xs shadow-xs"
                        >
                          Claim Lead &amp; Dispatch Vehicle
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab Content 2: Registration */}
        {activeTab === 'register' && (
          <div>
            {!registered ? (
              <form onSubmit={handleRegister} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Agent / Agency Legal Name</label>
                    <input
                      type="text"
                      required
                      value={agencyName}
                      onChange={(e) => setAgencyName(e.target.value)}
                      placeholder="e.g. Copperbelt Premier Motors Ltd"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">WhatsApp Sourcing Hotline</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +260 97 123 4567"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">Primary Operating Hub</label>
                    <select
                      value={hub}
                      onChange={(e) => setHub(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer"
                    >
                      <option value="Lusaka Hub">Lusaka Hub (Showgrounds &amp; Great East)</option>
                      <option value="Copperbelt Hub">Copperbelt Hub (Kitwe &amp; Ndola)</option>
                      <option value="Southern Hub">Southern Hub (Livingstone &amp; Choma)</option>
                      <option value="North-Western Hub">North-Western Hub (Solwezi)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">PACRA / RTSA Accreditation Status</label>
                    <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer">
                      <option>Registered Zambian Business (PACRA)</option>
                      <option>Certified Automotive Dealership</option>
                      <option>Independent Professional Vehicle Agent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Specialist Sourcing Categories</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {['Budget Commuters', '4x4 Twin Cabs & SUVs', 'Electric & Hybrids', 'Commercial Trucks'].map((cat) => (
                      <label key={cat} className="flex items-center gap-1.5 cursor-pointer bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <input type="checkbox" defaultChecked className="rounded text-[#1B365D]" />
                        <span className="text-[11px] text-slate-800 font-medium">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1B365D] hover:bg-[#10243E] text-white rounded-xl font-bold shadow-md cursor-pointer text-xs sm:text-sm"
                  >
                    Submit Agent Application for Verification
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px]">verified</span>
                </div>
                <h3 className="font-headline-md text-lg font-bold text-slate-900">
                  Accreditation Application Received!
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Our regional onboarding manager for {hub} will review your credentials and contact {phone} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setRegistered(false);
                    setActiveTab('board');
                  }}
                  className="px-5 py-2 bg-[#0B192C] text-white rounded-xl text-xs font-bold hover:bg-black"
                >
                  Return to Demand Board
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab Content 3: Standards */}
        {activeTab === 'standards' && (
          <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#1B365D] text-[18px]">gavel</span>
                1. Mandatory Whitebook &amp; Chassis Verification
              </h4>
              <p>
                Agents must physically inspect every vehicle chassis number (VIN) against the RTSA Whitebook before introducing a buyer. Vehicles with altered or unverified stampings will lead to immediate agent delisting.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#1B365D] text-[18px]">verified_user</span>
                2. Zero Hidden Broker Markups
              </h4>
              <p>
                All pricing must be transparently quoted in Zambian Kwacha (ZMW). Sourcing commission agreements must be disclosed to buyers upfront without predatory inflating of seller asking prices.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#1B365D] text-[18px]">security</span>
                3. Secure Payment &amp; Escrow Compliance
              </h4>
              <p>
                Transactions must be executed through verifiable bank transfers or designated escrow channels. Cash handling in street locations is strictly prohibited.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
