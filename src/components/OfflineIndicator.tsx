import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="no-print fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-lg bg-[#2A1D12] border border-[#D4A017]/60 px-3 py-2 text-xs font-medium text-[#F4C94D] shadow-xl">
      <WifiOff className="w-3.5 h-3.5 shrink-0" />
      <span>Mode Offline — Data lokal tetap tersimpan</span>
    </div>
  );
};
