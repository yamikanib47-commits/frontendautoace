import React, { useState } from 'react';
import { VideoGuide } from '../../data/mockData.ts';

interface VideoPlayerModalProps {
  video: VideoGuide | null;
  onClose: () => void;
  onOpenSourcingModal: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  onClose,
  onOpenSourcingModal,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl relative border border-slate-200 my-auto max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Video Player Canvas */}
        <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden mb-4 bg-black flex items-center justify-center">
          <img
            src={video.image}
            alt={video.title}
            className={`w-full h-full object-cover transition-opacity ${isPlaying ? 'opacity-40' : 'opacity-80'}`}
            referrerPolicy="no-referrer"
          />

          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1B365D] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border border-white/20"
              aria-label="Play video"
            >
              <span className="material-symbols-outlined text-[32px] sm:text-[36px] ml-1">play_arrow</span>
            </button>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-3 bg-black/75 p-6 text-center">
              <span className="w-8 h-8 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              <p className="font-bold text-sm">Streaming AutoAce Walkthrough Reel...</p>
              <p className="text-xs text-slate-300 max-w-md">
                Featuring real inspection footage from Lusaka Showgrounds &amp; Great East Corridor.
              </p>
              <button
                onClick={() => setIsPlaying(false)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-full font-bold transition-colors cursor-pointer"
              >
                Pause Video
              </button>
            </div>
          )}

          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-mono">
            {video.duration}
          </div>
        </div>

        {/* Info */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <span className="font-bold text-[#1B365D]">{video.channel}</span>
            <span>·</span>
            <span>{video.views}</span>
          </div>
          <h3 className="font-headline-md text-base sm:text-lg font-bold text-slate-900">
            {video.title}
          </h3>
          <p className="font-body-sm text-xs text-slate-500 mt-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Inspection Steps / Chapters */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5 text-xs">
          <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#1B365D] text-[16px]">fact_check</span>
            Inspection Chapters Covered
          </h4>
          <div className="space-y-2">
            {video.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#1B365D]/10 text-[#1B365D] font-bold flex items-center justify-center text-[10px] shrink-0">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenSourcingModal();
            }}
            className="flex-1 py-2.5 bg-[#1B365D] hover:bg-[#10243E] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer text-center shadow-xs"
          >
            Request Sourcing for this Model
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
