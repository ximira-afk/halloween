import React from 'react';
import { X, Printer, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';

interface SheetPreviewModalProps {
  activityId: 'bingo' | 'scavenger' | 'challenges' | null;
  onClose: () => void;
  onCheckout: () => void;
  price: string;
}

export const SheetPreviewModal: React.FC<SheetPreviewModalProps> = ({
  activityId,
  onClose,
  onCheckout,
  price,
}) => {
  if (!activityId) return null;

  const dataMap = {
    bingo: {
      title: 'Halloween Bingo Printable Sheets',
      badge: 'Activity 01 · Family Favorite',
      image: '/src/assets/images/bingo_card_mockup_1793120041751.jpg',
      alt: 'Crisp Halloween Bingo printed sheet showing 5x5 grid with friendly Halloween icons',
      description:
        'A delightful, non-scary Halloween Bingo game designed for all family members. Features cheerful icons like friendly ghosts, jack-o\'-lanterns, candy corn, cauldrons, and black cats. Perfect to play with candy corn markers, coins, or dry-erase pens.',
      includedItems: [
        'Printable Halloween Bingo player cards (Color & Ink-Saving)',
        'Host calling sheet with matching icon tokens',
        'Standard 5x5 grid with FREE space',
        'Formatted for US Letter & A4 printing',
      ],
    },
    scavenger: {
      title: 'Halloween Scavenger Hunt Clues & Checklist',
      badge: 'Activity 02 · Official Printable Kit',
      image: '/halloween-scavenger-hunt-banner.jpeg',
      alt: 'Halloween Scavenger Hunt official banner showing 3 styles, point versions, and bonus printable cards',
      description:
        'An engaging scavenger hunt with printable clues and an item checklist. Gets kids and guests exploring and searching for pumpkins, ghosts, witch hats, black cats, spider webs, skeletons, bats, cauldrons, and treats. You can print them on paper or mark them off digitally on a tablet.',
      includedItems: [
        '3 Distinct Styles: festive orange, clean white, and ink-saving editions',
        '2 Play Versions: point-scoring competition (5 points per find) or casual exploration',
        'Bonus Printable Cards: ready to cut out and place as clues or tokens',
        'Print or play digitally on iPad/tablet or phone',
      ],
    },
    challenges: {
      title: 'Party Challenge & Charade Cards',
      badge: 'Activity 03 · Spontaneous Entertainment',
      image: '/src/assets/images/challenge_cards_mockup_1793120042884.jpg',
      alt: 'Halloween Party Challenge Cards and charades cards neatly arranged',
      description:
        'Quick, lighthearted Halloween challenges and charades designed to get everyone laughing. Includes fun prompts like the "Monster Mash Dance", "Hoot like an Owl", "Crawl like a Spider", and "Balance a Pumpkin on your head".',
      includedItems: [
        'Printable challenge cards with clean cutting guidelines',
        'Mixture of gentle charades, silly dares, and physical mini-games',
        'Requires zero special props or expensive materials',
        'Easy to deal out spontaneously at any point in the party',
      ],
    },
  };

  const item = dataMap[activityId];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sheet-preview-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-3xl bg-[#21152F] border-2 border-[#FF8A24]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#FFF3DE]/10 mb-4">
          <div>
            <div className="text-xs font-semibold text-[#6FC6BE] uppercase tracking-wider mb-1">
              {item.badge}
            </div>
            <h3 id="sheet-preview-title" className="font-display text-xl sm:text-2xl font-bold text-[#FFF3DE]">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#FFF3DE]/60 hover:text-[#FFF3DE] hover:bg-[#17151C] transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto pr-2 space-y-6 flex-1">
          {/* Mockup Image Preview */}
          <div className="rounded-2xl overflow-hidden border border-[#FFF3DE]/10 bg-[#17151C] shadow-lg">
            <img
              src={item.image}
              alt={item.alt}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[380px]"
            />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#FFF3DE]/85 leading-relaxed">
            {item.description}
          </p>

          {/* What is on this printable sheet */}
          <div className="bg-[#17151C] rounded-xl p-5 border border-[#FFF3DE]/10">
            <h4 className="font-display text-sm font-bold text-[#FFF3DE] uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#FF8A24]" />
              <span>Included in the PDF Kit</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.includedItems.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#FFF3DE]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#6FC6BE] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct Purchase CTA */}
        <div className="pt-4 mt-4 border-t border-[#FFF3DE]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#FFF3DE]/70">
            <Printer className="w-4 h-4 text-[#FF8A24]" />
            <span>Included in the complete 3-in-1 Rescue Kit for {price}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#FFF3DE]/80 hover:text-[#FFF3DE] bg-[#17151C] hover:bg-[#17151C]/80 rounded-lg border border-[#FFF3DE]/10 transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
            <button
              onClick={() => {
                onClose();
                onCheckout();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-extrabold text-[#17151C] bg-[#FF8A24] hover:bg-[#E87513] rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get Full Kit · {price}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
