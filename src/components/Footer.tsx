import React from 'react';
import { Mail, Settings, Shield } from 'lucide-react';
import { SellerConfig } from '../types.ts';

interface FooterProps {
  sellerConfig: SellerConfig;
  onOpenLegal: (type: 'privacy' | 'terms' | 'refund') => void;
  onOpenSellerSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  sellerConfig,
  onOpenLegal,
  onOpenSellerSettings,
}) => {
  return (
    <footer className="bg-[#17151C] border-t border-[#21152F] text-[#FFF3DE]/70 text-xs sm:text-sm py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-[#21152F]">
          
          {/* Brand & Digital Disclosure */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A24]" aria-hidden="true" />
              <span className="font-display text-lg font-bold text-[#FFF3DE]">Halloween Night Rescue Kit</span>
            </div>
            <p className="text-xs text-[#FFF3DE]/60 leading-relaxed max-w-sm">
              A collection of three festive printable activities for family gatherings, Halloween parties, and home entertainment.
            </p>
            <div className="pt-2 text-[11px] text-[#FFF3DE]/50 bg-[#21152F]/60 p-3 rounded-lg border border-[#FFF3DE]/5">
              <strong className="text-[#FFF3DE]/70 block mb-0.5">Digital Product Notice:</strong>
              This product consists entirely of digital PDF printable files. No physical boxed item or printed sheets will be shipped to your address. A printer and standard paper are required to use the files.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#FFF3DE] mb-3">
              Explore Kit
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#included" className="hover:text-[#FF8A24] transition-colors">What&apos;s Included</a>
              </li>
              <li>
                <a href="#previews" className="hover:text-[#FF8A24] transition-colors">Printable Previews</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#FF8A24] transition-colors">Key Benefits</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#FF8A24] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FF8A24] transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Legal Policies & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#FFF3DE] mb-3">
              Support &amp; Policies
            </h4>
            
            <div className="flex items-center gap-2 text-xs text-[#FFF3DE]/80">
              <Mail className="w-4 h-4 text-[#FF8A24] shrink-0" />
              <span>Contact: {sellerConfig.supportEmail || '[Seller Support Email Pending]'}</span>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-xs">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-[#FF8A24] transition-colors underline underline-offset-4 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenLegal('terms')}
                className="hover:text-[#FF8A24] transition-colors underline underline-offset-4 cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <button
                onClick={() => onOpenLegal('refund')}
                className="hover:text-[#FF8A24] transition-colors underline underline-offset-4 cursor-pointer"
              >
                Refund Policy
              </button>
            </div>

            {/* Seller Checkout Configuration Link */}
            <div className="pt-4">
              <button
                onClick={onOpenSellerSettings}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#21152F] hover:bg-[#21152F]/80 text-[#FFF3DE]/70 hover:text-[#FF8A24] text-xs font-medium border border-[#FFF3DE]/10 transition-colors cursor-pointer"
                title="Configure seller checkout link and business details"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Seller Settings &amp; Kiwify Checkout URL</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF3DE]/50">
          <div>
            &copy; {new Date().getFullYear()} {sellerConfig.storeName || 'Halloween Night Rescue Kit'}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#6FC6BE]" />
            <span>Secure Digital Delivery via Kiwify</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
