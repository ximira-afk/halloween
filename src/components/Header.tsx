import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onCheckout: () => void;
  price: string;
}

export const Header: React.FC<HeaderProps> = ({ onCheckout, price }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#17151C]/90 backdrop-blur-md border-b border-[#21152F]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#FFF3DE] hover:text-[#FF8A24] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A24] shrink-0" aria-hidden="true" />
          <span>Halloween Night Rescue Kit</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#FFF3DE]/80">
          <a
            href="#included"
            className="hover:text-[#FF8A24] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            What&apos;s Included
          </a>
          <a
            href="#previews"
            className="hover:text-[#FF8A24] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Previews
          </a>
          <a
            href="#benefits"
            className="hover:text-[#FF8A24] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Benefits
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#FF8A24] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="hover:text-[#FF8A24] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onCheckout}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#17151C] bg-[#FF8A24] hover:bg-[#E87513] active:scale-[0.98] rounded-lg transition-all shadow-sm hover:shadow-[#FF8A24]/20 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Get Kit · {price}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#FFF3DE]/80 hover:text-[#FFF3DE] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#21152F] border-b border-[#FF8A24]/20 px-4 pt-3 pb-5 space-y-3">
          <a
            href="#included"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#FFF3DE] hover:bg-[#17151C] rounded-md"
          >
            What&apos;s Included
          </a>
          <a
            href="#previews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#FFF3DE] hover:bg-[#17151C] rounded-md"
          >
            Previews
          </a>
          <a
            href="#benefits"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#FFF3DE] hover:bg-[#17151C] rounded-md"
          >
            Benefits
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#FFF3DE] hover:bg-[#17151C] rounded-md"
          >
            How It Works
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#FFF3DE] hover:bg-[#17151C] rounded-md"
          >
            FAQ
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCheckout();
              }}
              className="w-full text-center px-4 py-2.5 font-bold text-sm bg-[#FF8A24] text-[#17151C] rounded-lg shadow cursor-pointer"
            >
              Get Kit · {price}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
