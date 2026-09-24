import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-xl mx-auto px-5 py-36 text-center bg-[#050816]">
      <p className="font-display font-extrabold text-[90px] leading-none text-gradient-blue">404</p>
      <h1 className="font-display font-extrabold text-[26px] text-white mt-2">{t.common.notFoundT}</h1>
      <p className="text-white/55 mt-2">{t.common.notFoundD}</p>
      <Link to="/" className="btn-tactile inline-block mt-6 font-bold text-white bg-gradient-to-r from-[#2456e6] to-[#00a8ff] px-7 py-3.5 rounded-full">
        {t.common.backHome}
      </Link>
    </div>
  );
}
