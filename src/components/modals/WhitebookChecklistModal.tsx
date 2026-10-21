import React, { useState } from 'react';
import { WHITEBOOK_CHECKLIST_ITEMS } from '../../data/mockData.ts';

interface WhitebookChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSourcingModal: () => void;
}

export const WhitebookChecklistModal: React.FC<WhitebookChecklistModalProps> = ({
  isOpen,
  onClose,
  onOpenSourcingModal,
}) => {
  // Principle 2: Goal Gradient Effect - Start with 2 initial steps completed (25% progress)
  const [checkedIds, setCheckedIds] = useState<string[]>(['c1', 'c2']);

  if (!isOpen) return null;

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const total = WHITEBOOK_CHECKLIST_ITEMS.length;
  const count = checkedIds.length;
  const percentage = Math.round((count / total) * 100);

  let statusBadge = {
    color: 'bg-amber-100 text-amber-900 border-amber-300',
    text: 'Inspection In Progress (25% Head Start)',
    recommendation: 'Do NOT transfer cash until all critical points pass verification.'
  };

  if (percentage === 100) {
    statusBadge = {
      color: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      text: '100% Verified · Safe for Legal Ownership Transfer',
      recommendation: 'All statutory RTSA and ZRA documentation validated.'
    };
  } else if (percentage < 40) {
    statusBadge = {
      color: 'bg-rose-100 text-rose-900 border-rose-300',
      text: 'High Risk / Incomplete Documentation',
      recommendation: 'Request official RTSA printout before committing any Kwacha.'
    };
  }

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
            <span className="material-symbols-outlined text-[16px]">verified</span>
            RTSA Buyer Protection Checklist
          </div>
          <h2 className="font-headline-md text-xl font-extrabold text-slate-900">
            RTSA Whitebook &amp; Documentation Checklist
          </h2>
          <p className="font-body-sm text-xs text-slate-500 mt-1">
            We've pre-checked your first 2 initial document checks. Complete the remaining items to verify legal title.
          </p>
        </div>

        {/* Principle 5: Loss Aversion Warning */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 mb-4 text-xs text-rose-950">
          <div className="flex items-center gap-1.5 font-bold mb-0.5 text-rose-900">
            <span className="material-symbols-outlined text-[16px]">gavel</span>
            The Cost of Unverified Street Purchases in Zambia
          </div>
          <p className="text-rose-800 text-[11px] leading-tight">
            Buyers who skip chassis VIN and bank lien checks lose an average of <strong>K38,500</strong> in impound fines, forged document seizures, or repossession.
          </p>
        </div>

        {/* Principle 2: Score & Progress Bar with Initial Head Start */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2 text-xs">
            <span className="font-bold text-slate-800">Verification Progress</span>
            <span className="font-bold text-[#1B365D] font-mono">{count} of {total} Checked ({percentage}%)</span>
          </div>
          <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden mb-3">
            <div
              className={`h-full transition-all duration-300 ${
                percentage === 100 ? 'bg-emerald-600' : percentage >= 50 ? 'bg-[#1B365D]' : 'bg-amber-500'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className={`p-2.5 rounded-lg border text-xs font-bold ${statusBadge.color}`}>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="material-symbols-outlined text-[16px]">shield</span>
              {statusBadge.text}
            </div>
            <div className="text-[11px] font-normal text-slate-700">
              {statusBadge.recommendation}
            </div>
          </div>
        </div>

        {/* Checklist items */}
        <div className="space-y-2 mb-5">
          {WHITEBOOK_CHECKLIST_ITEMS.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <label
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer text-xs ${
                  isChecked
                    ? 'bg-[#F0F4F8] border-[#1B365D]/30 text-slate-900 font-medium'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="rounded text-[#1B365D] focus:ring-[#1B365D] w-4 h-4 mt-0.5 cursor-pointer shrink-0"
                />
                <span className="flex-1 leading-relaxed">
                  {item.text}
                  {item.mandatory && (
                    <span className="text-rose-600 font-bold ml-1.5 text-[10px] uppercase">
                      (Mandatory)
                    </span>
                  )}
                </span>
              </label>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenSourcingModal();
            }}
            className="flex-1 py-3 bg-[#1B365D] hover:bg-[#10243E] text-white rounded-xl text-xs font-bold transition-all cursor-pointer text-center shadow-xs flex items-center justify-center gap-1.5"
          >
            <span>Have an AutoAce Inspector Verify This Car On-Site</span>
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
