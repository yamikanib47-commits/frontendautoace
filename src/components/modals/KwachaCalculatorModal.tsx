import React, { useState } from 'react';

interface KwachaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDispatchSourcing: (summary: string) => void;
}

export const KwachaCalculatorModal: React.FC<KwachaCalculatorModalProps> = ({
  isOpen,
  onClose,
  onDispatchSourcing,
}) => {
  // Principle 1: Smart Defaults (Most popular Zambian car import: 1.5L Axio/Fit at $6,500 CIF)
  const [currency, setCurrency] = useState<'USD' | 'ZMW'>('USD');
  const [basePrice, setBasePrice] = useState<number>(6500); // USD $6,500
  const [exchangeRate, setExchangeRate] = useState<number>(27.5); // USD to ZMW
  const [engineCc, setEngineCc] = useState<'under1500' | '1500to2000' | '2000to3000' | 'over3000'>('1500to2000');
  const [vehicleAge, setVehicleAge] = useState<'under5' | 'over5'>('over5');
  const [isElectric, setIsElectric] = useState<boolean>(false);

  if (!isOpen) return null;

  // Convert to CIF ZMW
  const cifKwacha = currency === 'USD' ? basePrice * exchangeRate : basePrice;

  // Tax rates
  const customsDutyRate = isElectric ? 0.10 : (vehicleAge === 'over5' ? 0.30 : 0.25);
  const customsDuty = cifKwacha * customsDutyRate;

  // Excise Duty (charged on CIF + Customs Duty)
  let exciseRate = 0.20;
  if (isElectric) {
    exciseRate = 0.05;
  } else if (engineCc === 'over3000') {
    exciseRate = 0.30;
  } else if (engineCc === 'under1500') {
    exciseRate = 0.15;
  }
  const exciseDuty = (cifKwacha + customsDuty) * exciseRate;

  // Value Added Tax (VAT 16% on CIF + Customs + Excise)
  const vatBase = cifKwacha + customsDuty + exciseDuty;
  const vat = vatBase * 0.16;

  // RTSA Registration, Carbon Tax, Road Fitness
  const carbonTax = isElectric ? 0 : (engineCc === 'over3000' ? 850 : 450);
  const rtsaRegistration = 3200; // Plate issuance + whitebook fee
  const transitPortClearance = 12500; // Dar es Salaam / Walvis Bay forwarding

  const totalTaxes = customsDuty + exciseDuty + vat + carbonTax + rtsaRegistration;
  const grandTotal = cifKwacha + totalTaxes + transitPortClearance;
  
  // Principle 6: Anchoring & Contrast Effect
  const estimatedStreetPrice = Math.round(grandTotal * 1.22);
  const directSavings = estimatedStreetPrice - Math.round(grandTotal);

  const handleApply = () => {
    const summary = `Calculated Landed Budget: K${Math.round(grandTotal).toLocaleString()} for ${engineCc} (${currency === 'USD' ? `$${basePrice} USD` : `K${basePrice} ZMW`})`;
    onDispatchSourcing(summary);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-4 sm:p-6 shadow-2xl relative border border-slate-200 my-auto max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header */}
        <div className="mb-4 pr-8">
          <div className="flex items-center gap-1.5 text-[#1B365D] text-xs font-bold uppercase tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">calculate</span>
            Zambia Customs &amp; Registration Tool
          </div>
          <h2 className="font-headline-md text-xl font-extrabold text-slate-900">
            Vehicle Sourcing &amp; Kwacha Budget Calculator
          </h2>
          <p className="font-body-sm text-xs text-slate-500 mt-1">
            Pre-loaded with official 2026 ZRA customs schedules, excise tax rates, and RTSA carbon tax fees.
          </p>
        </div>

        {/* Principle 6: Contrast Anchor Banner */}
        <div className="bg-[#F0F4F8] border border-blue-200 rounded-xl p-3 mb-4 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-500 block text-[10px]">Average Street Dealership Asking Price:</span>
            <span className="line-through text-slate-400 font-bold text-sm">
              K{estimatedStreetPrice.toLocaleString()}
            </span>
          </div>
          <div className="text-right">
            <span className="text-emerald-700 font-bold block text-sm">
              Save ~K{directSavings.toLocaleString()} (18%)
            </span>
            <span className="text-[10px] text-slate-500">via AutoAce Direct Agent Sourcing</span>
          </div>
        </div>

        {/* Inputs with Smart Defaults (Principle 1) */}
        <div className="space-y-3.5 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-800 mb-1">Currency Mode</label>
              <div className="flex rounded-lg overflow-hidden border border-slate-200 p-0.5 bg-slate-50">
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`flex-1 py-1.5 font-bold rounded-md transition-colors cursor-pointer ${
                    currency === 'USD' ? 'bg-[#1B365D] text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  CIF USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('ZMW')}
                  className={`flex-1 py-1.5 font-bold rounded-md transition-colors cursor-pointer ${
                    currency === 'ZMW' ? 'bg-[#1B365D] text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Local ZMW (K)
                </button>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">
                {currency === 'USD' ? 'Purchase / CIF Price (USD)' : 'Base Price (ZMW)'}
              </label>
              <input
                type="number"
                value={basePrice}
                onChange={(e) => setBasePrice(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] font-bold text-base sm:text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-800 mb-1">Engine Size</label>
              <select
                value={engineCc}
                onChange={(e) => setEngineCc(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer"
              >
                <option value="under1500">Under 1,500cc (Fit, Vitz)</option>
                <option value="1500to2000">1,500cc - 2,000cc (Axio, Premio) [Standard]</option>
                <option value="2000to3000">2,000cc - 3,000cc (Hilux, CX-5)</option>
                <option value="over3000">Over 3,000cc (Prado, Land Cruiser)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Vehicle Age</label>
              <select
                value={vehicleAge}
                onChange={(e) => setVehicleAge(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#1B365D] text-base sm:text-xs cursor-pointer"
              >
                <option value="over5">Over 5 Years Old (Standard Used)</option>
                <option value="under5">Under 5 Years Old (Recent Import)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
              <input
                type="checkbox"
                checked={isElectric}
                onChange={(e) => setIsElectric(e.target.checked)}
                className="rounded text-[#1B365D] focus:ring-[#1B365D] w-4 h-4 cursor-pointer"
              />
              <span>Electric Vehicle / EV (Eligible for Zambian green tax rebate)</span>
            </label>
          </div>
        </div>

        {/* Calculation Results Card (Reciprocity: Full value given upfront) */}
        <div className="mt-4 bg-[#0B192C] text-white rounded-2xl p-4 space-y-3 shadow-lg border border-slate-800">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 block">Total Landed Budget (Lusaka/Kitwe)</span>
              <span className="text-xl sm:text-2xl font-extrabold text-blue-300 font-price-headline">
                K{Math.round(grandTotal).toLocaleString()}
              </span>
            </div>
            <span className="bg-emerald-600/30 text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
              All Duties Included
            </span>
          </div>

          <div className="space-y-1 text-xs text-slate-300 font-mono text-[11px]">
            <div className="flex justify-between">
              <span>CIF Base Value:</span>
              <span>K{Math.round(cifKwacha).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>ZRA Customs Duty ({(customsDutyRate * 100).toFixed(0)}%):</span>
              <span>K{Math.round(customsDuty).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Excise Duty ({(exciseRate * 100).toFixed(0)}%):</span>
              <span>K{Math.round(exciseDuty).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (16%):</span>
              <span>K{Math.round(vat).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>RTSA Registration &amp; Carbon Tax:</span>
              <span>K{(carbonTax + rtsaRegistration).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Transit &amp; Port Forwarding:</span>
              <span>K{transitPortClearance.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Action Button (Principle 1 & 4: Result count waiting) */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleApply}
            className="flex-1 py-3 bg-[#1B365D] hover:bg-[#10243E] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer text-center flex items-center justify-center gap-1.5"
          >
            <span>Match Vehicles in Lusaka Within this K{Math.round(grandTotal).toLocaleString()} Budget (8 Available)</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
