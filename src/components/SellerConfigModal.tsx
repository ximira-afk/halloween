import React, { useState } from 'react';
import { X, Settings, Link2, Mail, Store, Check, ExternalLink, Activity } from 'lucide-react';
import { SellerConfig } from '../types.ts';

interface SellerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SellerConfig;
  onSave: (newConfig: SellerConfig) => void;
}

export const SellerConfigModal: React.FC<SellerConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<SellerConfig>(config);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 900);
  };

  const handleTestLink = () => {
    if (formData.checkoutUrl) {
      window.open(formData.checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="seller-config-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-xl bg-[#21152F] border-2 border-[#FF8A24]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#FFF3DE]/10 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF8A24]/20 flex items-center justify-center text-[#FF8A24]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 id="seller-config-title" className="font-display text-lg sm:text-xl font-bold text-[#FFF3DE]">
                Seller Checkout &amp; Store Settings
              </h3>
              <p className="text-xs text-[#FFF3DE]/60">
                Configure your Kiwify checkout URL, support email, and Meta Pixel
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#FFF3DE]/60 hover:text-[#FFF3DE] hover:bg-[#17151C] transition-colors cursor-pointer"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto pr-1 space-y-4 flex-1">
          
          {/* Kiwify Checkout URL Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#FF8A24] mb-1.5">
              Kiwify Checkout URL *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#FFF3DE]/40">
                <Link2 className="w-4 h-4" />
              </div>
              <input
                type="url"
                required
                value={formData.checkoutUrl}
                onChange={(e) => setFormData({ ...formData, checkoutUrl: e.target.value })}
                placeholder="https://pay.kiwify.com/95ZFA9o"
                className="w-full bg-[#17151C] border border-[#FFF3DE]/20 focus:border-[#FF8A24] focus:ring-1 focus:ring-[#FF8A24] rounded-xl pl-9 pr-24 py-2.5 text-xs sm:text-sm text-[#FFF3DE] placeholder-[#FFF3DE]/30 outline-none transition-all"
              />
              <button
                type="button"
                onClick={handleTestLink}
                className="absolute inset-y-1 right-1 px-3 text-[11px] font-semibold text-[#FFF3DE]/80 hover:text-[#FF8A24] bg-[#21152F] hover:bg-[#21152F]/80 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                title="Test opening link in new tab"
              >
                <span>Test</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            <p className="text-[11px] text-[#FFF3DE]/60 mt-1">
              All &quot;Get Kit&quot; buttons on the landing page will immediately direct customers to this checkout address.
            </p>
          </div>

          {/* Support Email Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#FFF3DE]/80 mb-1.5">
              Customer Support Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#FFF3DE]/40">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={formData.supportEmail}
                onChange={(e) => setFormData({ ...formData, supportEmail: e.target.value })}
                placeholder="support@yourbrand.com"
                className="w-full bg-[#17151C] border border-[#FFF3DE]/20 focus:border-[#FF8A24] focus:ring-1 focus:ring-[#FF8A24] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#FFF3DE] placeholder-[#FFF3DE]/30 outline-none transition-all"
              />
            </div>
            <p className="text-[11px] text-[#FFF3DE]/60 mt-1">
              Displayed in the footer, legal modals, and customer inquiry notices.
            </p>
          </div>

          {/* Brand/Store Name Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#FFF3DE]/80 mb-1.5">
              Brand / Company Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#FFF3DE]/40">
                <Store className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={formData.storeName}
                onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                placeholder="Halloween Night Rescue Kit"
                className="w-full bg-[#17151C] border border-[#FFF3DE]/20 focus:border-[#FF8A24] focus:ring-1 focus:ring-[#FF8A24] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#FFF3DE] placeholder-[#FFF3DE]/30 outline-none transition-all"
              />
            </div>
          </div>

          {/* Optional Meta Pixel Field */}
          <div className="pt-2 border-t border-[#FFF3DE]/10">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6FC6BE] mb-1.5">
              Meta Pixel ID (Optional for Facebook / Instagram Ads)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#FFF3DE]/40">
                <Activity className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={formData.metaPixelId || ''}
                onChange={(e) => setFormData({ ...formData, metaPixelId: e.target.value })}
                placeholder="e.g. 123456789012345"
                className="w-full bg-[#17151C] border border-[#FFF3DE]/20 focus:border-[#6FC6BE] focus:ring-1 focus:ring-[#6FC6BE] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#FFF3DE] placeholder-[#FFF3DE]/30 outline-none transition-all font-mono"
              />
            </div>
            <p className="text-[11px] text-[#FFF3DE]/60 mt-1">
              Automatically fires an &apos;InitiateCheckout&apos; event when customers click the checkout CTA.
            </p>
          </div>

          {/* Action buttons */}
          <div className="pt-4 mt-4 border-t border-[#FFF3DE]/10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                const defaultConf: SellerConfig = {
                  checkoutUrl: 'https://pay.kiwify.com/95ZFA9o',
                  supportEmail: 'support@halloweennightrescue.com',
                  storeName: 'Halloween Night Rescue Kit',
                  metaPixelId: '',
                };
                setFormData(defaultConf);
              }}
              className="text-xs text-[#FFF3DE]/60 hover:text-[#FFF3DE] underline cursor-pointer"
            >
              Reset Defaults
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#FFF3DE]/80 hover:text-[#FFF3DE] bg-[#17151C] rounded-lg border border-[#FFF3DE]/10 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs sm:text-sm font-bold text-[#17151C] bg-[#FF8A24] hover:bg-[#E87513] rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                {savedNotice ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <span>Save Configuration</span>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
