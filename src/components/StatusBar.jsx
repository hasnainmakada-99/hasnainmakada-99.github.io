import React, { useState, useEffect } from 'react';

const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatted = time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
  });

  return (
    <div className="fixed bottom-4 right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] font-['JetBrains_Mono'] text-xs text-[var(--text-muted)]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span>open to work</span>
      <span className="text-[var(--border-color)]">|</span>
      <span>{formatted} IST</span>
    </div>
  );
};

export default StatusBar;
