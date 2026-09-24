import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { courses } from '../data/courses';
import { contactInfo } from '../data/contact';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function EnquiryForm() {
  const { t, lang } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [prefLang, setPrefLang] = useState('Both / Either');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [err, setErr] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setErr('');
    if (name.trim().length < 2) {
      setErr(t.enquiry.validationName);
      setStatus('error');
      return;
    }
    const digits = phone.replace(/\D/g, '').replace(/^91/, '');
    if (digits.length !== 10) {
      setErr(t.enquiry.validationPhone);
      setStatus('error');
      return;
    }
    if (!course) {
      setErr(t.enquiry.validationCourse);
      setStatus('error');
      return;
    }
    setStatus('loading');
    // Frontend-only: simulate, structured for future API
    const payload = { name, phone, course, preferredLanguage: prefLang, message, at: new Date().toISOString() };
    void payload;
    setTimeout(() => {
      // TODO: replace with fetch('/api/enquire', {method:'POST', body: JSON.stringify(payload)})
      setStatus('success');
    }, 1100);
  };

  return (
    <div className="relative bg-white rounded-[26px] border border-slate-200 shadow-[0_30px_80px_-30px_rgba(10,26,92,0.4)] p-6 sm:p-9 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1a33a3] via-[#2f7bff] to-[#ff8a1e]" />
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div key="s" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
            <span className="mx-auto w-16 h-16 grid place-items-center rounded-full bg-green-100 text-green-700">
              <CheckCircle2 size={32} />
            </span>
            <h3 className="font-display font-extrabold text-[22px] text-[#0a1a5c] mt-4">{t.enquiry.successT}</h3>
            <p className="text-slate-600 text-[14.5px] mt-2 max-w-md mx-auto leading-relaxed">{t.enquiry.successD}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a href={contactInfo.phoneLinks[0]} className="btn-tactile inline-flex items-center justify-center gap-2 font-bold text-white bg-[#0a1a5c] px-6 py-3.5 rounded-full">
                <Phone size={17} /> {t.enquiry.callInstead}
              </a>
              <button onClick={() => { setStatus('idle'); setName(''); setPhone(''); setCourse(''); setMessage(''); }} className="font-bold text-slate-600 px-6 py-3.5 rounded-full border border-slate-200 hover:bg-slate-50">
                {'↺'}
                <span className="ml-1">{lang === 'hi' ? 'नई पूछताछ' : 'New enquiry'}</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form key="f" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label htmlFor="eq-name" className="text-[13px] font-bold text-[#0a1a5c]">{t.enquiry.name} *</label>
              <input id="eq-name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.enquiry.namePh} autoComplete="name"
                className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-[15px] outline-none focus:border-[#2f7bff] focus:bg-white focus:ring-4 focus:ring-[#2f7bff]/15 transition" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="eq-phone" className="text-[13px] font-bold text-[#0a1a5c]">{t.enquiry.phone} *</label>
              <input id="eq-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.enquiry.phonePh} inputMode="tel" autoComplete="tel"
                className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-[15px] outline-none focus:border-[#2f7bff] focus:bg-white focus:ring-4 focus:ring-[#2f7bff]/15 transition" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="eq-course" className="text-[13px] font-bold text-[#0a1a5c]">{t.enquiry.course} *</label>
              <select id="eq-course" value={course} onChange={(e) => setCourse(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-[15px] outline-none focus:border-[#2f7bff] focus:bg-white focus:ring-4 focus:ring-[#2f7bff]/15 transition">
                <option value="">{t.enquiry.coursePh}</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>{lang === 'hi' ? c.titleHi : c.titleEn}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="eq-lang" className="text-[13px] font-bold text-[#0a1a5c]">{t.enquiry.language}</label>
              <select id="eq-lang" value={prefLang} onChange={(e) => setPrefLang(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-[15px] outline-none focus:border-[#2f7bff] focus:bg-white focus:ring-4 focus:ring-[#2f7bff]/15 transition">
                <option>{t.enquiry.langEn}</option>
                <option>{t.enquiry.langHi}</option>
                <option>{t.enquiry.langBoth}</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="eq-msg" className="text-[13px] font-bold text-[#0a1a5c]">{t.enquiry.message}</label>
              <textarea id="eq-msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.enquiry.messagePh} rows={4}
                className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-[15px] outline-none focus:border-[#2f7bff] focus:bg-white focus:ring-4 focus:ring-[#2f7bff]/15 transition resize-y" />
            </div>

            {status === 'error' && err && (
              <p role="alert" className="sm:col-span-2 flex items-center gap-2 text-[14px] font-semibold text-red-700 bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
                <AlertCircle size={17} /> {err || t.enquiry.errorD}
              </p>
            )}

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-1">
              <button type="submit" disabled={status === 'loading'}
                className="btn-tactile flex-1 inline-flex items-center justify-center gap-2 font-bold text-white text-[16px] bg-gradient-to-r from-[#1a33a3] to-[#2f7bff] px-6 py-4 rounded-full shadow-xl shadow-blue-900/25 disabled:opacity-70">
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'loading' ? t.enquiry.submitting : t.enquiry.submit}
              </button>
              <a href={contactInfo.phoneLinks[1]} className="btn-tactile inline-flex items-center justify-center gap-2 font-bold text-[#0a1a5c] px-6 py-4 rounded-full border border-slate-200 bg-white hover:border-[#2f7bff]">
                <Phone size={17} /> {t.contact.callNow}
              </a>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
