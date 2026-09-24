import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <p className="font-display font-extrabold text-[72px] leading-none text-gradient-blue">404</p>
      <h1 className="font-display font-extrabold text-[24px] text-[#0a1a5c] mt-2">{t.common.notFoundT}</h1>
      <p className="text-slate-600 mt-2">{t.common.notFoundD}</p>
      <Link to="/" className="inline-block mt-6 font-bold text-white bg-[#0a1a5c] px-7 py-3.5 rounded-full">
        {t.common.backHome}
      </Link>
    </div>
  );
}
