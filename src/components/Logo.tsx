export default function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const text = tone === 'dark' ? 'text-[#111]' : 'text-white';
  const sub = tone === 'dark' ? 'text-[#666]' : 'text-white/60';
  return (
    <span className="flex items-center gap-2 min-[400px]:gap-2.5 select-none" aria-label="Vikas IT Institute">
      <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#17324d] shrink-0" aria-hidden>
        <svg viewBox="0 0 32 32" className="w-5 h-5 min-[400px]:w-6 min-[400px]:h-6">
          <path d="M5 6 L16 27 L27 6" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6 L26 6" fill="none" stroke="#e8b64c" strokeWidth="3.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-extrabold tracking-tight text-[12.5px] min-[400px]:text-[16px] ${text}`}>
          VIKAS <span className="text-[#b97f1f]">IT</span> INSTITUTE
        </span>
        <span className={`hidden min-[400px]:block text-[10px] font-medium tracking-[0.08em] mt-1 ${sub}`}>
          A Step Towards Bright Future
        </span>
      </span>
    </span>
  );
}
