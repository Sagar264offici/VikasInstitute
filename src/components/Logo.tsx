export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 select-none" aria-label="Vikas IT Institute">
      <span className="relative grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0a1a5c] via-[#1a33a3] to-[#2f7bff] shadow-lg shadow-blue-900/30 shrink-0">
        <svg viewBox="0 0 32 32" className="w-6 h-6" aria-hidden>
          <path d="M5 6 L16 27 L27 6" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6 L26 6" fill="none" stroke="#ffb020" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="20.5" cy="13.5" r="1.6" fill="#7db4ff" />
          <path d="M16.5 11.5 Q20.5 9.5 24.5 11.5" fill="none" stroke="#7db4ff" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ff8a1e] border-2 border-white" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display font-800 font-extrabold tracking-tight text-[17px] text-[#0a1a5c]">
            VIKAS <span className="text-[#ff7a1a]">IT</span> INSTITUTE
          </span>
          <span className="block text-[10.5px] font-medium tracking-[0.08em] text-slate-500 mt-1">
            A Step Towards Bright Future
          </span>
        </span>
      )}
    </span>
  );
}
