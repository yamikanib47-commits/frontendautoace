import React, { useState } from 'react';
import { Vehicle } from '../data/mockData.ts';

interface PopularSourcingSectionProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  onOpenSourcingModal: (prefillVehicle?: string) => void;
}

export const PopularSourcingSection: React.FC<PopularSourcingSectionProps> = ({
  vehicles,
  onSelectVehicle,
  onOpenSourcingModal,
}) => {
  const [selectedSpotlightIndex, setSelectedSpotlightIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'editorial' | 'grid'>('editorial');

  const spotlightCar = vehicles[selectedSpotlightIndex] || vehicles[0];
  const companionVehicles = vehicles.filter((_, idx) => idx !== selectedSpotlightIndex).slice(0, 3);

  return (
    <section id="popular-sourcing" className="w-full bg-[#F8FAFC] py-12 sm:py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Taste Skill Aligned Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4 pb-4 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-2 text-[#1B365D] mb-1 font-bold text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              LIVE SOURCING DEMAND &amp; MARKET SPOTLIGHT
            </div>
            <h2 className="font-headline-lg text-slate-900 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              Vehicles actively requested by vetted buyers in Zambia
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real-time inventory coordination with physical RTSA inspections across Lusaka, Kitwe, and Ndola.
            </p>
          </div>

          {/* View Mode Toggle (Editorial Asymmetric vs Uniform Grid) */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setViewMode('editorial')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'editorial'
                    ? 'bg-white text-[#1B365D] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Taste Skill Asymmetric Spotlight Layout"
              >
                <span className="material-symbols-outlined text-[15px]">view_quilt</span>
                <span className="hidden sm:inline">Spotlight Layout</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#1B365D] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">grid_view</span>
                <span className="hidden sm:inline">All Vehicles</span>
              </button>
            </div>
          </div>
        </div>

        {/* MODE 1: Taste Skill Editorial Spotlight (Asymmetric Layout Variance) */}
        {viewMode === 'editorial' && spotlightCar && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Anchor Spotlight Card (7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#1B365D]/40 transition-colors">
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="inline-flex items-center gap-1 bg-[#F0F4F8] text-[#1B365D] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-blue-100 mb-2">
                      <span className="material-symbols-outlined text-[13px]">stars</span>
                      Market Spotlight Selection
                    </span>
                    <h3 className="font-headline-lg text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">
                      {spotlightCar.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Guide Budget</span>
                    <span className="font-mono text-lg sm:text-2xl font-extrabold text-[#1B365D] tracking-tight">
                      {spotlightCar.displayPrice.replace('Guide Budget: ', '')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 flex-wrap">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#1B365D]">location_on</span>
                    {spotlightCar.location}
                  </span>
                  <span>·</span>
                  <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-200">
                    RTSA Whitebook Verified
                  </span>
                  <span>·</span>
                  <span className="text-slate-600 font-medium">{spotlightCar.year} Model</span>
                </div>

                {/* Hero Car Showcase */}
                <div
                  onClick={() => onSelectVehicle(spotlightCar)}
                  className="w-full h-56 sm:h-72 bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl flex items-center justify-center p-4 my-2 border border-slate-100 cursor-pointer group relative overflow-hidden"
                >
                  <img
                    src={spotlightCar.image}
                    alt={spotlightCar.name}
                    className="max-h-48 sm:max-h-60 object-contain group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-xs border border-slate-200">
                    <span>Inspect Specs</span>
                    <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                  </div>
                </div>

                {/* Technical Figures (Taste Skill: Aligned Figures, Monospace Metrics) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Engine Displacement</span>
                    <strong className="font-mono text-slate-900 font-bold">{spotlightCar.engine}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Transmission</span>
                    <strong className="text-slate-900 font-bold">{spotlightCar.transmission}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Fuel System</span>
                    <strong className="text-slate-900 font-bold">{spotlightCar.fuelType}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Odometer</span>
                    <strong className="font-mono text-slate-900 font-bold">{spotlightCar.mileage}</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {spotlightCar.description}
                </p>
              </div>

              {/* Bottom Sourcing Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="w-9 h-9 rounded-full bg-[#1B365D] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Assigned Agent</span>
                    <span className="text-xs font-bold text-slate-900">{spotlightCar.agentName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/260971234567?text=Hi%2C%20I%20am%20interested%20in%20inspecting%20the%20${encodeURIComponent(spotlightCar.name)}%20on%20AutoAce%20Zed.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs active:scale-[0.98]"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>WhatsApp Agent</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onSelectVehicle(spotlightCar)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#1B365D] hover:bg-[#10243E] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs active:scale-[0.98]"
                  >
                    <span>Full Inspection Sheet</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Companion Queue (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Companion Sourced Models in Demand
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Tap to Spotlight
                </span>
              </div>

              {companionVehicles.map((car, idx) => {
                const originalIndex = vehicles.findIndex((v) => v.id === car.id);
                return (
                  <div
                    key={car.id}
                    onClick={() => setSelectedSpotlightIndex(originalIndex >= 0 ? originalIndex : 0)}
                    className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 hover:border-[#1B365D] hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group active:scale-[0.99]"
                  >
                    <div className="w-24 h-20 sm:w-28 sm:h-22 bg-slate-50 rounded-lg flex items-center justify-center p-1.5 shrink-0 border border-slate-100">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="max-h-16 sm:max-h-18 object-contain group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold font-mono">
                          {car.year}
                        </span>
                        <span className="text-[11px] text-slate-400 truncate">{car.location}</span>
                      </div>
                      <h4 className="font-headline-md text-sm font-bold text-slate-900 group-hover:text-[#1B365D] transition-colors truncate">
                        {car.name}
                      </h4>
                      <div className="font-mono text-xs sm:text-sm font-bold text-[#1B365D] mt-0.5">
                        {car.displayPrice.replace('Guide Budget: ', '')}
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-[#1B365D] shrink-0">
                      <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                      <span className="text-[9px] font-bold uppercase mt-0.5">Select</span>
                    </div>
                  </div>
                );
              })}

              {/* Sourcing Request Callout */}
              <div className="mt-auto bg-[#F0F4F8] border border-blue-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <span className="text-xs font-bold text-[#1B365D] block">Don't see your specific car?</span>
                  <span className="text-[11px] text-slate-600">Broadcast your custom requirements to 50+ local agents.</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenSourcingModal()}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#1B365D] text-white font-bold text-xs hover:bg-[#10243E] transition-colors shrink-0 shadow-xs active:scale-[0.98]"
                >
                  Broadcast Request
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: Standard Comprehensive Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {vehicles.map((car) => (
              <div
                key={car.id}
                onClick={() => onSelectVehicle(car)}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col justify-between group border border-slate-200 cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-headline-md text-slate-900 group-hover:text-[#1B365D] transition-colors text-base font-bold">
                      {car.name}
                    </h3>
                    <span className="bg-[#F0F4F8] text-[#1B365D] text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1 border border-blue-100">
                      {car.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-2.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#1B365D]">location_on</span>
                    {car.location}
                  </p>

                  <div className="inline-block bg-[#1B365D] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md mb-3 shadow-xs">
                    {car.matchType}
                  </div>
                </div>

                <div className="w-full h-32 sm:h-36 flex items-center justify-center my-1 bg-slate-50 rounded-xl p-2 border border-slate-100">
                  <img
                    className="max-h-28 sm:max-h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                    alt={car.name}
                    src={car.image}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-end justify-between mt-2">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Landed Budget</span>
                    <span className="font-mono font-bold text-[#1B365D] text-base sm:text-lg">
                      {car.displayPrice.replace('Guide Budget: ', '')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectVehicle(car);
                    }}
                    aria-label="Explore model details"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0B192C] group-hover:bg-[#1B365D] text-white flex items-center justify-center transition-colors shadow-xs shrink-0 cursor-pointer active:scale-[0.98]"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
