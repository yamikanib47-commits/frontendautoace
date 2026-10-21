import React from 'react';
import { EditorialArticle, NewsArticle } from '../../data/mockData.ts';

interface ArticleReaderModalProps {
  article: EditorialArticle | NewsArticle | null;
  onClose: () => void;
  onOpenSourcingModal: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onOpenSourcingModal,
}) => {
  if (!article) return null;

  const isEditorial = 'score' in article;
  const editorial = article as EditorialArticle;
  const news = article as NewsArticle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl relative border border-slate-200 my-auto max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header */}
        <div className="mb-4 pr-8">
          <div className="flex items-center gap-2 mb-1.5 text-xs">
            <span className="font-bold text-[#1B365D] uppercase tracking-wider">
              {isEditorial ? editorial.category : news.tag}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500">{isEditorial ? editorial.readTime : news.readTime}</span>
            {isEditorial && (
              <>
                <span className="text-slate-300">·</span>
                <span className="bg-[#1B365D] text-white font-bold px-1.5 py-0.2 rounded text-[11px]">
                  Score {editorial.score}
                </span>
              </>
            )}
          </div>
          <h2 className="font-headline-md text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
            {article.title}
          </h2>
          {isEditorial && (
            <div className="text-xs text-slate-500 mt-2 font-medium">
              By {editorial.author} · {editorial.date}
            </div>
          )}
        </div>

        {/* Cover image if editorial */}
        {isEditorial && (
          <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-5 bg-slate-100">
            <img
              src={editorial.image}
              alt={editorial.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-body-md">
          {isEditorial ? (
            <>
              {editorial.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-5">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[#1B365D] text-[18px]">lightbulb</span>
                  Key Advice for Zambian Buyers
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {editorial.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#1B365D] font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-900">{news.description}</p>
              {news.details.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  {item}
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer Sourcing CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenSourcingModal();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#1B365D] hover:bg-[#10243E] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs text-center"
          >
            Connect with a Vetted Sourcing Agent
          </button>
          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 font-bold cursor-pointer py-1"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
