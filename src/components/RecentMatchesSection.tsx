import React from 'react';
import { SourcingMatch } from '../data/mockData.ts';

interface RecentMatchesSectionProps {
  matches: SourcingMatch[];
  onRequestSimilar: (match: SourcingMatch) => void;
  onExploreAllMatches: () => void;
}

export const RecentMatchesSection: React.FC<RecentMatchesSectionProps> = ({
  matches,
  onRequestSimilar,
  onExploreAllMatches,
}) => {
  return (
    <section id="recent-matches" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="text-[11px] font-bold text-[#1B365D] uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            LIVE COORDINATED DISPATCH
          </div>
          <h2 className="font-headline-lg text-slate-900 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
            Recent Sourcing Requests &amp; Verified Matches
          </h2>
          <p className="font-body-md text-xs sm:text-sm text-slate-500 mt-0.5">
            Real buyer transactions managed and physically verified across our local automotive agent network
          </p>
        </div>
        <button
          onClick={onExploreAllMatches}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B365D] hover:text-[#10243E] cursor-pointer self-start sm:self-auto group active:scale-[0.98]"
        >
          <span>Explore recent matches ledger</span>
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
        </button>
      </div>

      {/* Taste Skill Editorial Split-Ledger Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Live Verification Ticker Ledger (4 Columns) */}
        <div className="lg:col-span-4 bg-[#0B192C] text-white rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-300">
              Active Coordination Ledger
            </span>
            <span className="bg-[#1B365D] text-slate-200 font-mono text-[10px] px-2 py-0.5 rounded font-bold">
              Zambia Real-Time
            </span>
          </div>

          <div className="space-y-3">
            {matches.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onRequestSimilar(item)}
                className="p-3 rounded-xl bg-[#10243E] hover:bg-[#152E4E] border border-slate-700/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span className="font-mono text-slate-300 font-semibold">Ref #{item.id}</span>
                  <span className="text-emerald-400 font-semibold">{item.verificationBadge}</span>
                </div>
                <div className="font-bold text-white text-xs sm:text-sm group-hover:text-blue-300 transition-colors">
                  {item.carName}
                </div>
                <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-slate-700/50">
                  <span className="text-slate-400 font-medium">{item.location}</span>
                  <span className="font-mono font-bold text-white">{item.targetBudget}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Verified Agents Handling:</span>
            <span className="font-bold text-emerald-400">100% Guaranteed</span>
          </div>
        </div>

        {/* Right Column: Visual Matched Cards (8 Columns) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {matches.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between border border-slate-200 group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-headline-md text-slate-900 group-hover:text-[#1B365D] transition-colors text-sm sm:text-base font-bold">
                    {item.carName}
                  </h3>
                  <span className="bg-[#1B365D] text-white text-xs px-2 py-0.5 rounded-lg flex items-center gap-1 font-bold shadow-xs shrink-0">
                    <span className="material-symbols-outlined text-[12px]">grade</span>
                    {item.score.toFixed(1)}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#F0F4F8] text-[#1B365D] text-[11px] px-2 py-0.5 rounded font-bold border border-blue-100">
                    Verified Match
                  </span>
                  <span className="text-slate-500 text-xs truncate">
                    {item.matchSubtitle}
                  </span>
                </div>

                <div className="w-full h-32 flex items-center justify-center my-2 bg-slate-50 rounded-xl p-2 border border-slate-100">
                  <img
                    className="max-h-24 sm:max-h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                    alt={item.carName}
                    src={item.image}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Quiet Aligned Data Box */}
                <div className="bg-slate-50 rounded-xl p-3 my-2 text-xs flex flex-col gap-1.5 text-slate-600 border border-slate-200/80">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Location:</span>
                    <strong className="text-slate-900">{item.location}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Coordination:</span>
                    <strong className="text-slate-900 truncate max-w-[150px]">{item.coordination}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">RTSA Status:</span>
                    <strong className={item.verificationColor}>
                      {item.verificationBadge}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[11px] text-slate-400 font-semibold uppercase">Target Budget</span>
                  <span className="font-mono text-[#1B365D] font-bold text-base sm:text-lg">
                    {item.targetBudget}
                  </span>
                </div>
                <button
                  onClick={() => onRequestSimilar(item)}
                  className="w-full py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#1B365D] text-white text-xs text-center block transition-colors cursor-pointer font-bold shadow-xs active:scale-[0.98]"
                >
                  Request Similar Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
