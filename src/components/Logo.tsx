export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 select-none" aria-label="Vikas IT Institute">
      <span className="relative grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1a33a3] via-[#2f7bff] to-[#00a8ff] shadow-lg shadow-blue-900/50 shrink-0 border border-white/20">
        <svg viewBox="0 0 32 32" className="w-6 h-6" aria-hidden>
          <path d="M5 6 L16 27 L27 6" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6 L26 6" fill="none" stroke="#ffb020" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="20.5" cy="13.5" r="1.6" fill="#bfe0ff" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ff7a00] border-2 border-[#050816]" />
      </span>
      {!compact && (
        <span className="leading-none hidden min-[400px]:block">
          <span className="block font-display font-extrabold tracking-tight text-[16px] text-white">
            VIKAS <span className="text-[#ffab2e]">IT</span> INSTITUTE
          </span>
          <span className="block text-[10px] font-semibold tracking-[0.14em] text-white/50 mt-1 uppercase">
            A Step Towards Bright Future
          </span>
        </span>
      )}
    </span>
  );
}
