import React, { useState } from 'react';

interface SourcingRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillCar?: string;
  onSubmitSuccess?: (requestData: any) => void;
}

export const SourcingRequestModal: React.FC<SourcingRequestModalProps> = ({
  isOpen,
  onClose,
  prefillCar = '',
  onSubmitSuccess,
}) => {
  // Principle 1: Smart Defaults (No blank forms, pre-fill with most common Zambian choice)
  const [carName, setCarName] = useState(prefillCar || 'Toyota Axio 1.5L (2018)');
  const [budget, setBudget] = useState('K150,000 - K300,000');
  const [location, setLocation] = useState('Lusaka');
  const [timeline, setTimeline] = useState('Immediate (1-3 Days)');
  const [buyerName, setBuyerName] = useState('Chileshe');
  const [phone, setPhone] = useState('097 ');
  const [notes, setNotes] = useState('Original RTSA Whitebook & clean title required');
  const [includeYardInspection, setIncludeYardInspection] = useState(true);
  
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const popularCars = [
    'Toyota Axio (2018)',
    'Honda Fit Hybrid',
    'Prado TX Diesel',
    'Hilux D4D Double Cab',
    'Mazda CX-5'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `ZED-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setSubmitted(true);

    const payload = {
      refId: generatedRef,
      carName: carName || 'Custom Vehicle Sourcing',
      budget,
      location,
      timeline,
      buyerName,
      phone,
      notes,
      includeYardInspection,
      timestamp: new Date().toLocaleTimeString(),
    };

    onSubmitSuccess?.(payload);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
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
            {/* Principle 2: Goal Gradient Effect - Never start at 0%! Show 40% complete */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-[#1B365D] uppercase tracking-wider text-[11px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">trending_up</span>
                  Sourcing Progress: 40% Complete
                </span>
                <span className="text-slate-400 text-[11px] font-mono">Step 2 of 3</span>
              </div>
              
              {/* Progress bar with initial head start */}
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-[#1B365D] rounded-full transition-all duration-500 w-[40%]"></div>
              </div>

              {/* Goal gradient steps indicator */}
              <div className="flex items-center justify-between text-[10px] text-slate-500 pb-2 border-b border-slate-100">
                <span className="font-bold text-emerald-700 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  1. Intent Identified
                </span>
                <span className="font-bold text-[#1B365D] flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B365D]"></span>
                  2. Review &amp; Match
                </span>
                <span className="text-slate-400 flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  3. Direct Agent Dispatch
                </span>
              </div>
            </div>

            {/* Principle 3: Reciprocity - Free Instant Market Dossier first */}
            <div className="bg-[#F0F4F8] border border-blue-200 rounded-xl p-3 mb-4">
              <div className="flex items-center justify-between text-xs font-bold text-[#1B365D] mb-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">insights</span>
                  Instant Lusaka Market Intelligence
                </span>
                <span className="text-[10px] bg-white px-2 py-0.5 rounded text-slate-600 font-mono">
                  Updated Today
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-600 pt-1">
                <div>
                  <span className="text-slate-400 block text-[10px]">Avg Price</span>
                  <strong className="text-slate-900 font-bold">K195k - K240k</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Fuel Economy</span>
                  <strong className="text-slate-900 font-bold">18 km/L (Saver)</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Active Units</span>
                  <strong className="text-[#1B365D] font-bold">14 in Lusaka</strong>
                </div>
              </div>
            </div>

            {/* Form with Smart Defaults (Principle 1) */}
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-slate-800">
                    Target Vehicle Model
                  </label>
                  <span className="text-[11px] text-slate-400">Scan &amp; adjust</span>
                </div>
                
                <input
                  type="text"
                  required
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                  placeholder="e.g. Toyota Axio, Honda Fit Hybrid"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B365D] text-base sm:text-xs font-medium"
                />

                {/* 1-tap quick pick chips */}
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {popularCars.map((car) => (
                    <button
                      key={car}
                      type="button"
                      onClick={() => setCarName(car)}
                      className={`text-[10px] px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                        carName.toLowerCase().includes(car.toLowerCase().split(' ')[0])
                          ? 'bg-[#1B365D] text-white font-bold'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {car}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Kwacha Budget (ZMW)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer font-medium"
                  >
                    <option value="Under K150,000">Under K150,000 (Budget)</option>
                    <option value="K150,000 - K300,000">K150,000 - K300,000 (Recommended)</option>
                    <option value="K300,000 - K500,000">K300,000 - K500,000 (Family SUV)</option>
                    <option value="K500,000 - K750,000">K500,000 - K750,000 (4x4)</option>
                    <option value="Over K1,000,000">Over K1,000,000 (Executive)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Primary Sourcing Hub
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer font-medium"
                  >
                    <option value="Lusaka">Lusaka (Showgrounds &amp; Central)</option>
                    <option value="Kitwe (Copperbelt)">Kitwe (Copperbelt Hub)</option>
                    <option value="Ndola (Copperbelt)">Ndola (Broadway Hub)</option>
                    <option value="Livingstone">Livingstone Hub</option>
                  </select>
                </div>
              </div>

              {/* Principle 4: IKEA Effect / Endowment Effect - Personalization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    WhatsApp Number (for matched sheets)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 097 123 4567"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs"
                  />
                </div>
              </div>

              {/* Principle 5 (Loss Aversion & Cost of Inaction Toggle) */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeYardInspection}
                    onChange={(e) => setIncludeYardInspection(e.target.checked)}
                    className="rounded text-[#1B365D] focus:ring-[#1B365D] w-4 h-4 mt-0.5 cursor-pointer shrink-0"
                  />
                  <div>
                    <span className="font-bold text-amber-950 text-xs block">
                      Include Complimentary RTSA Whitebook &amp; Chassis VIN Check
                    </span>
                    <span className="text-[11px] text-amber-800 block mt-0.5 leading-tight">
                      Protects you from unverified vehicles with altered chassis numbers, unpaid ZRA duty, or hidden bank loans (avoids average loss of K35,000+).
                    </span>
                  </div>
                </label>
              </div>

              {/* Principle 6 (Anchoring & Contrast Effect) */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Buyer Service: 100% Free
                </span>
                <span className="text-slate-400">
                  Zero broker markup (Save ~K25,000 vs street brokers)
                </span>
              </div>

              {/* Principle 1 & 4 (Persuasive Button Copy) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1B365D] hover:bg-[#10243E] text-white rounded-xl font-bold transition-all shadow-md text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Confirm My Dossier &amp; Dispatch 12 Vetted Lusaka Agents</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            
            {/* Principle 4: Endowment Effect - Their personal dossier */}
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Sourcing Pass Activated
              </span>
              <h3 className="font-headline-md text-xl font-extrabold text-slate-900 mt-0.5">
                {buyerName}'s Sourcing Dossier Registered!
              </h3>
            </div>

            <div className="bg-[#F0F4F8] border border-blue-200 p-3.5 rounded-xl text-left text-xs max-w-sm mx-auto space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Reference:</span>
                <span className="font-mono font-bold text-[#1B365D]">{refId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Requested Car:</span>
                <span className="font-bold text-slate-900">{carName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Budget:</span>
                <span className="font-bold text-slate-900">{budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Assigned Inspection:</span>
                <span className="font-bold text-emerald-700">RTSA Verified Yard</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              2 verified local agents in {location} are currently reviewing matched inventory. You will receive 2-3 inspected vehicle options with photos on WhatsApp ({phone}) within 60 minutes.
            </p>

            <div>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-2.5 bg-[#0B192C] text-white rounded-xl text-xs font-bold hover:bg-black transition-colors cursor-pointer shadow-md"
              >
                Return to Marketplace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
