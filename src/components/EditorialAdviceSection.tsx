import React from 'react';
import {
  EDITORIAL_ARTICLES,
  NEWS_ARTICLES,
  VIDEO_GUIDES,
  EditorialArticle,
  NewsArticle,
  VideoGuide
} from '../data/mockData.ts';

interface EditorialAdviceSectionProps {
  onSelectArticle: (article: EditorialArticle | NewsArticle) => void;
  onSelectVideo: (video: VideoGuide) => void;
  onOpenSourcingModal: () => void;
}

export const EditorialAdviceSection: React.FC<EditorialAdviceSectionProps> = ({
  onSelectArticle,
  onSelectVideo,
  onOpenSourcingModal,
}) => {
  const leadArticle = EDITORIAL_ARTICLES[0];
  const secondaryArticles = EDITORIAL_ARTICLES.slice(1);

  return (
    <section id="editorial-advice" className="w-full bg-[#0B192C] text-white py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Presenter / Advice Banner */}
        <div className="bg-[#10243E] rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row items-center gap-5 sm:gap-6 mb-12 shadow-xl border border-slate-700/60">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B365D] p-1 shrink-0 shadow-md">
            <img
              className="w-full h-full rounded-full object-cover"
              alt="Automotive presenter"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIhbWvXLXm2V3paXUuEpJTLTIjo_nezsZmFZGvplRF0dnGeDvfzPXuom4G1Ws8NC8wDwVNJbhKpCk9o9a5Hw0wzluT2woAht56zSXaiHNeIgUV8liBQcZsIZJbXGv9N1UvGCCvhvVSqxzniWlz99OTicCVsD-_1YFO8oJgtiBcixGy_K2AhzahaXpbnfSWquY6wqcnMW9dfRFI-BaiCU7V-D4qx06NNPeZSrv0YDPSqbpefXMVqW4Eqg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="text-xs uppercase tracking-wider text-slate-300 mb-1 font-bold flex items-center justify-center md:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              ZAMBIAN AUTOMOTIVE EDITORIAL ADVICE
            </div>
            <h2 className="font-headline-lg text-white text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              Independent automotive guidance for Zambian roads and regulations
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
              Whether you need a fuel-efficient daily commuter for Lusaka traffic, a rugged 4x4 for the Copperbelt, or step-by-step guidance on RTSA whitebook compliance and ZRA valuation, our local editors break it down transparently.
            </p>
          </div>
        </div>

        {/* Subsection 1: Taste Skill Editorial Lead Feature + Companion Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 border-b border-slate-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Independent Reviews</span>
              <h3 className="font-headline-md text-white text-lg sm:text-xl font-bold">
                Helpful Buyer Advice &amp; Inspection Guides
              </h3>
            </div>
            <button
              onClick={() => onSelectArticle(leadArticle)}
              className="text-slate-300 hover:text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-colors group active:scale-[0.98]"
            >
              <span>Explore all reviews</span>
              <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Lead Article (7 Cols) */}
            {leadArticle && (
              <div
                onClick={() => onSelectArticle(leadArticle)}
                className="lg:col-span-7 group bg-[#10243E] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-slate-700/70 hover:border-slate-500 flex flex-col justify-between active:scale-[0.99]"
              >
                <div>
                  <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-slate-900">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={leadArticle.title}
                      src={leadArticle.image}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#1B365D] text-white px-2.5 py-1 rounded-md font-bold text-xs shadow-md border border-white/10 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">star</span>
                      Score {leadArticle.score}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-slate-200 px-2.5 py-1 rounded text-xs font-mono">
                      Lead Market Investigation
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="text-[11px] font-bold text-blue-300 uppercase tracking-wider mb-1">
                      {leadArticle.category} · By {leadArticle.author}
                    </div>
                    <h4 className="font-title-md text-white group-hover:text-blue-200 transition-colors text-base sm:text-xl font-extrabold leading-snug">
                      {leadArticle.title}
                    </h4>
                    <p className="font-body-sm text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {leadArticle.summary}
                    </p>
                  </div>
                </div>
                <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/50">
                  <span className="font-mono">{leadArticle.readTime}</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                    Read Full Guide &rarr;
                  </span>
                </div>
              </div>
            )}

            {/* Secondary Articles (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {secondaryArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="group bg-[#10243E] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-700/60 hover:border-slate-500 p-4 flex flex-col justify-between flex-1 active:scale-[0.99]"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                      <span className="text-blue-300 font-bold uppercase">{article.category}</span>
                      <span className="bg-[#1B365D] text-white px-1.5 py-0.5 rounded font-mono font-bold text-[10px]">
                        ★ {article.score}
                      </span>
                    </div>
                    <h4 className="font-title-md text-white group-hover:text-blue-200 transition-colors text-sm sm:text-base font-bold leading-snug">
                      {article.title}
                    </h4>
                    <p className="font-body-sm text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-mono">{article.readTime}</span>
                    <span className="text-slate-300 font-bold">Read &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection 2: News & Market Guidance */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 border-b border-slate-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Zambia Automotive Wire</span>
              <h3 className="font-headline-md text-white text-lg sm:text-xl font-bold">
                Import Duties, RTSA Policies &amp; Fuel Updates
              </h3>
            </div>
            <button
              onClick={() => onSelectArticle(NEWS_ARTICLES[0])}
              className="text-slate-300 hover:text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-colors group active:scale-[0.98]"
            >
              <span>View all news</span>
              <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {NEWS_ARTICLES.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectArticle(item)}
                className="group bg-[#10243E] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all p-4 sm:p-5 cursor-pointer border border-slate-700/60 hover:border-slate-500 flex flex-col justify-between active:scale-[0.98]"
              >
                <div>
                  <div className="text-[11px] font-bold text-blue-300 uppercase tracking-wider mb-1.5">
                    {item.tag}
                  </div>
                  <h4 className="font-title-md text-white group-hover:text-blue-200 transition-colors text-sm sm:text-base font-bold leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono">{item.date}</span>
                  <span className="text-slate-200 font-bold">{item.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 3: Video Guides & Vehicle Walkthroughs */}
        <div>
          <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <h3 className="font-headline-md text-white text-lg sm:text-xl font-bold">
                AutoAce Video Guides &amp; Physical Walkthroughs
              </h3>
            </div>
            <button
              onClick={() => onSelectVideo(VIDEO_GUIDES[0])}
              className="text-slate-300 hover:text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-colors group active:scale-[0.98]"
            >
              <span>View video archive</span>
              <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">open_in_new</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {VIDEO_GUIDES.map((video) => (
              <div
                key={video.id}
                onClick={() => onSelectVideo(video)}
                className="group relative rounded-xl overflow-hidden bg-[#10243E] shadow-md cursor-pointer border border-slate-700/60 hover:border-slate-500 active:scale-[0.98]"
              >
                <div className="relative w-full h-44 sm:h-48 bg-slate-900">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    alt={video.title}
                    src={video.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#1B365D] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border border-white/20">
                      <span className="material-symbols-outlined text-[26px] ml-0.5">play_arrow</span>
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                    {video.duration}
                  </span>
                </div>
                <div className="p-3.5">
                  <h4 className="font-title-md text-white group-hover:text-blue-200 transition-colors text-xs sm:text-sm font-bold line-clamp-2">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                    <span>{video.channel}</span>
                    <span className="font-mono">{video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
