import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <div className="wrap py-20 sm:py-28 text-center">
      <p className="font-extrabold text-[64px] leading-none text-[#17324d]">404</p>
      <h1 className="h-display text-[24px] mt-3">{t.common.notFoundT}</h1>
      <p className="lede mt-2">{t.common.notFoundD}</p>
      <Link to="/" className="btn btn-dark mt-6">
        {t.common.backHome}
      </Link>
    </div>
  );
}
