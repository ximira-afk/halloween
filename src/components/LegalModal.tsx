import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { SellerConfig } from '../types.ts';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
  sellerConfig: SellerConfig;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  onClose,
  sellerConfig,
}) => {
  if (!type) return null;

  const email = sellerConfig.supportEmail || 'support@halloweennightrescue.com';
  const store = sellerConfig.storeName || 'Halloween Night Rescue Kit';

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#FFF3DE]/80 leading-relaxed">
          <p>
            At <strong>{store}</strong>, we respect your privacy. This Privacy Policy outlines how your personal information is collected, used, and protected when you purchase our digital printable products.
          </p>
          <h4 className="font-bold text-[#FFF3DE] text-sm">1. Information We Collect</h4>
          <p>
            When you complete a purchase through our checkout provider (Kiwify), basic contact and transaction details (such as your name and email address) are processed to deliver your digital printable files and purchase receipts. We do not store or process your credit card numbers directly on our website.
          </p>
          <h4 className="font-bold text-[#FFF3DE] text-sm">2. How Information Is Used</h4>
          <p>
            Your information is used solely to deliver your printable digital downloads, provide customer assistance regarding file access, and comply with legal accounting obligations. We never sell, rent, or trade your personal information to third parties.
          </p>
          <h4 className="font-bold text-[#FFF3DE] text-sm">3. Contact Us</h4>
          <p>
            If you have questions about your data or this policy, please email our support team at <strong className="text-[#FF8A24]">{email}</strong>.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms and Conditions',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#FFF3DE]/80 leading-relaxed">
          <p>
            By purchasing the <strong>Halloween Night Rescue Kit</strong> from <strong>{store}</strong>, you agree to the following terms:
          </p>
          <h4 className="font-bold text-[#FFF3DE] text-sm">1. Digital Printable License</h4>
          <p>
            The Halloween Night Rescue Kit is a downloadable digital product consisting of printable PDF files. Upon purchase, you are granted a non-exclusive, non-transferable personal license to print and use the materials for personal, household, or family gathering purposes. Commercial resale, redistribution, sublicensing, or public file-sharing of the digital files is strictly prohibited.
          </p>
          <h4 className="font-bold text-[#FFF3DE] text-sm">2. Delivery and Equipment Requirements</h4>
          <p>
            No physical items are shipped. Delivery instructions are provided after checkout. Access to a printer (or commercial printing service) and standard paper (US Letter or A4) is required to print and play the activities.
          </p>
          <h4 className="font-bold text-[#FFF3DE] text-sm">3. Adult Supervision</h4>
          <p>
            The activities are intended for family-friendly Halloween entertainment. Adults should review all activities and provide supervision when children participate in scavenger hunts or party games.
          </p>
          <h4 className="font-bold text-[#FFF3DE] text-sm">4. Contact</h4>
          <p>
            For support inquiries or clarification, please reach out to <strong className="text-[#FF8A24]">{email}</strong>.
          </p>
        </div>
      ),
    },
    refund: {
      title: 'Refund Policy',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#FFF3DE]/80 leading-relaxed">
          <p>
            Because the <strong>Halloween Night Rescue Kit</strong> is an intangible digital printable product delivered immediately upon payment, traditional physical returns are not possible.
          </p>
          <h4 className="font-bold text-[#FFF3DE] text-sm">Digital Product Guarantee &amp; File Support</h4>
          <p>
            We want your Halloween gathering to be a success. If you encounter any technical difficulty downloading, opening, or printing your PDF files, please contact us immediately at <strong className="text-[#FF8A24]">{email}</strong> with your order receipt. Our team will promptly assist you with direct alternative download links or formatted replacement files.
          </p>
          <p>
            Refund requests submitted through our checkout platform (Kiwify) will be reviewed in accordance with standard consumer protection regulations and Kiwify checkout platform policies.
          </p>
        </div>
      ),
    },
  };

  const activeContent = contentMap[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl bg-[#21152F] border border-[#FF8A24]/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#FFF3DE]/10 mb-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#FF8A24]" />
            <h3 id="legal-modal-title" className="font-display text-xl font-bold text-[#FFF3DE]">
              {activeContent.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#FFF3DE]/60 hover:text-[#FFF3DE] hover:bg-[#17151C] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 flex-1">
          {activeContent.content}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-[#FFF3DE]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#FF8A24] text-[#17151C] hover:bg-[#E87513] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
