import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationButtons = ({ onPrev, onNext, disabledPrev, disabledNext }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={disabledPrev}
        aria-label="Scroll projects left"
        className="rounded-full border border-white/15 bg-slate-900/70 p-3 text-white transition hover:border-purple-400/50 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={disabledNext}
        aria-label="Scroll projects right"
        className="rounded-full border border-white/15 bg-slate-900/70 p-3 text-white transition hover:border-purple-400/50 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default NavigationButtons;
