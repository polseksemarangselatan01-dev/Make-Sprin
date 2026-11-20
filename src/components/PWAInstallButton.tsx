import React, { useState } from 'react';
import { Check, Copy, Share, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'header' | 'sidebar';
  onInstalled?: () => void;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'header',
  onInstalled,
}) => {
  const { isInstallable, isInstalled, isIOS, inIframe, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (accepted) {
        onInstalled?.();
      }
      return;
    }
    setShowGuideModal(true);
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      window.setTimeout(() => setCopiedUrl(false), 2200);
    } catch {
      // ignore clipboard restrictions
    }
  };

  return (
    <>
      {variant === 'header' ? (
        <button
          type="button"
          onClick={handleClick}
          title="Instal SIPRIN sebagai Aplikasi Android / Desktop"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#4A3D2C] bg-[#241C14] hover:bg-[#2F251A] hover:border-[#D4A017]/60 text-xs font-semibold text-[#F5F0E6] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Smartphone className="w-3.5 h-3.5 text-[#D4A017]" />
          <span>Instal App</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-[#F4C94D] bg-[#D4A017]/10 hover:bg-[#D4A017]/20 border border-[#D4A017]/40 transition-colors whitespace-nowrap cursor-pointer"
        >
          <Smartphone className="w-4 h-4 text-[#D4A017] shrink-0" />
          <span>Instal Aplikasi (Android/PC)</span>
        </button>
      )}

      {showGuideModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setShowGuideModal(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-[#1E1812] border border-[#4A3D2C] p-5 shadow-2xl space-y-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#D4A017]/15 border border-[#D4A017]/40 flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#F7F2E8] uppercase tracking-wide">
                    Instal Aplikasi SIPRIN
                  </h3>
                  <p className="text-[11px] text-[#9E907A]">
                    Aplikasi Layar Utama (Android WebAPK · iOS · Desktop)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGuideModal(false)}
                aria-label="Tutup panduan instalasi"
                className="p-1.5 rounded-lg text-[#9E907A] hover:text-[#F5F0E6] hover:bg-[#2A2218] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isIOS ? (
              <div className="rounded-lg bg-[#15110C] border border-[#32291E] p-3.5 space-y-2 text-xs text-[#D6CCBC] leading-relaxed">
                <p className="font-semibold text-[#F4C94D]">Cara Instal di iPhone / iPad (Safari):</p>
                <ol className="list-decimal list-inside space-y-1.5">
                  <li>
                    Ketuk ikon <strong className="inline-flex items-center gap-1 text-[#F5F0E6]"><Share className="w-3.5 h-3.5 text-[#D4A017]" /> Bagikan (Share)</strong> pada bilah Safari.
                  </li>
                  <li>
                    Gulir ke bawah lalu pilih <strong className="text-[#F5F0E6]">Tambahkan ke Layar Utama (Add to Home Screen)</strong>.
                  </li>
                  <li>
                    Ketuk <strong className="text-[#F5F0E6]">Tambah (Add)</strong> untuk memasang ikon SIPRIN Polri.
                  </li>
                </ol>
              </div>
            ) : (
              <div className="rounded-lg bg-[#15110C] border border-[#32291E] p-3.5 space-y-2.5 text-xs text-[#D6CCBC] leading-relaxed">
                <p className="font-semibold text-[#F4C94D]">
                  {inIframe
                    ? 'Buka di Tab Browser Terpisah untuk Memasang Aplikasi:'
                    : 'Cara Instal di Android (Chrome) / Laptop (Chrome & Edge):'}
                </p>
                <ol className="list-decimal list-inside space-y-1.5">
                  {inIframe && (
                    <li>
                      Mode pratinjau masih berada di dalam jendela iframe editor sehingga prompt instalasi otomatis belum aktif di sini.
                    </li>
                  )}
                  <li>
                    Buka alamat aplikasi ini di <strong className="text-[#F5F0E6]">Google Chrome / Microsoft Edge</strong> pada tab penuh.
                  </li>
                  <li>
                    Tekan tombol <strong className="text-[#F5F0E6]">Instal App</strong> atau buka menu titik tiga browser (<strong className="text-[#F5F0E6]">⋮</strong>) lalu pilih <strong className="text-[#F5F0E6]">Instal Aplikasi / Tambahkan ke layar utama</strong>.
                  </li>
                  <li>
                    Android akan memasang aplikasi sebagai ikon mandiri di layar utama dan dapat berjalan saat offline.
                  </li>
                </ol>
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopyUrl}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#4A3D2C] bg-[#241C14] hover:border-[#D4A017] text-xs font-semibold text-[#F5F0E6] transition-colors cursor-pointer"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tautan Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#D4A017]" />
                    <span>Salin Tautan Aplikasi</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowGuideModal(false)}
                className="px-4 py-2 rounded-lg bg-[#D4A017] hover:bg-[#E5B022] text-xs font-bold text-[#14100C] transition-colors cursor-pointer"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
