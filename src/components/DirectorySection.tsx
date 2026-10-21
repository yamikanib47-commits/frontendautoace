import React, { useState } from 'react';
import { CAR_MANUFACTURERS, POPULAR_MODELS_ZAMBIA } from '../data/mockData.ts';

interface DirectorySectionProps {
  onSelectType: (type: string) => void;
  onSelectBrand: (brand: string) => void;
  onSelectModel: (model: string) => void;
  selectedBrand?: string | null;
}

export const DirectorySection: React.FC<DirectorySectionProps> = ({
  onSelectType,
  onSelectBrand,
  onSelectModel,
  selectedBrand,
}) => {
  const [makerSearch, setMakerSearch] = useState('');

  const vehicleTypes = [
    { name: 'SUVs', type: 'SUV', icon: 'airport_shuttle', count: '48 avail' },
    { name: 'Hatchbacks', type: 'Hatchback', icon: 'directions_car', count: '32 avail' },
    { name: 'Sedans', type: 'Sedan', icon: 'time_to_leave', count: '41 avail' },
    { name: 'Twin Cabs', type: 'Twin Cab', icon: 'local_shipping', count: '29 avail' },
    { name: 'Station Wagons', type: 'Station Wagon', icon: 'luggage', count: '14 avail' },
    { name: 'Minibuses', type: 'Minibus', icon: 'groups', count: '18 avail' },
    { name: 'Executive', type: 'Executive', icon: 'speed', count: '12 avail' },
    { name: 'Commercial', type: 'Commercial', icon: 'front_loader', count: '22 avail' },
  ];

  const filteredMakers = CAR_MANUFACTURERS.filter((m) =>
    m.toLowerCase().includes(makerSearch.toLowerCase().trim())
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2 pb-3 border-b border-slate-200">
        <div>
          <div className="text-[11px] font-bold text-[#1B365D] uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            COMPREHENSIVE DIRECTORY
          </div>
          <h2 className="font-headline-lg text-slate-900 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
            Explore Vehicles by Body Type &amp; Manufacturer
          </h2>
          <p className="font-body-md text-xs sm:text-sm text-slate-500 mt-0.5">
            Index of registered vehicle categories, 44 car brands, and popular models supported across Zambian service centers
          </p>
        </div>
      </div>

      {/* 1. Browse by Vehicle Type */}
      <div className="mb-10 sm:mb-12">
        <h3 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
          Browse by vehicle body profile
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2.5 sm:gap-3">
          {vehicleTypes.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => onSelectType(item.type)}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white hover:bg-[#F0F4F8] text-slate-800 hover:text-[#1B365D] hover:border-[#1B365D]/40 transition-all group shadow-xs text-center border border-slate-200 cursor-pointer active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[28px] sm:text-[30px] text-slate-500 group-hover:text-[#1B365D] mb-1">
                {item.icon}
              </span>
              <span className="font-label-md text-xs font-bold leading-tight">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                {item.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Browse by Car Manufacturer with search filter */}
      <div className="mb-10 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Browse by car manufacturer ({CAR_MANUFACTURERS.length})
            </h3>
            {selectedBrand && (
              <button
                onClick={() => onSelectBrand('')}
                className="text-xs text-[#1B365D] font-bold hover:underline cursor-pointer"
              >
                Clear filter ({selectedBrand})
              </button>
            )}
          </div>

          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
              search
            </span>
            <input
              type="text"
              value={makerSearch}
              onChange={(e) => setMakerSearch(e.target.value)}
              placeholder="Search Toyota, Honda, Nissan..."
              className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#1B365D]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-1.5 text-slate-700 font-body-sm text-xs max-h-64 overflow-y-auto p-2 border border-slate-200/80 rounded-xl bg-slate-50/60">
          {filteredMakers.map((maker) => {
            const isSelected = selectedBrand?.toLowerCase() === maker.toLowerCase();
            return (
              <button
                key={maker}
                type="button"
                onClick={() => onSelectBrand(maker)}
                className={`p-2 rounded-lg hover:bg-white hover:text-[#1B365D] flex items-center gap-2 text-left cursor-pointer transition-colors text-xs font-medium active:scale-[0.98] ${
                  isSelected ? 'bg-[#1B365D] text-white font-bold shadow-xs' : ''
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    isSelected ? 'bg-white' : 'bg-[#1B365D]'
                  }`}
                ></span>
                <span className="truncate">{maker}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Popular Models Row */}
      <div className="bg-[#F1F5F9] rounded-2xl p-5 sm:p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900 text-sm sm:text-base font-bold">
            Most demanded models in Zambia
          </h3>
          <span className="text-[11px] text-slate-400 font-mono">20 Popular References</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {POPULAR_MODELS_ZAMBIA.map((model) => (
            <button
              key={model}
              type="button"
              onClick={() => onSelectModel(model)}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#1B365D] hover:text-white font-body-sm text-xs text-slate-800 transition-colors shadow-2xs border border-slate-200 cursor-pointer active:scale-[0.98]"
            >
              {model}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
