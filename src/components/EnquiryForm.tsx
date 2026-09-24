import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, Phone, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { courses } from '../data/courses';
import { contactInfo } from '../data/contact';

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputCls =
  'mt-1.5 w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/30 outline-none focus:border-[#00a8ff] focus:bg-white/[0.08] focus:ring-4 focus:ring-[#00a8ff]/15 transition';

export default function EnquiryForm() {
  const { t, lang } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [prefLang, setPrefLang] = useState<string>(t.enquiry.langBoth as string);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [err, setErr] = useState('');

  const submit = async (e: FormEvent) => {
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
    // Structured for future API: replace with fetch('/api/enquire', {...})
    const payload = { name, phone, course, preferredLanguage: prefLang, message, at: new Date().toISOString() };
    try {
      await new Promise((r) => setTimeout(r, 1100));
      void payload;
      // TODO: const res = await fetch('/api/enquire', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      setStatus('success');
    } catch {
      setErr(t.enquiry.errorD);
      setStatus('error');
    }
  };

  return (
    <div className="relative rounded-[28px] border border-white/12 bg-gradient-to-br from-[#0a1024] to-[#060f38] p-6 sm:p-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00a8ff] via-[#2f7bff] to-[#ff7a00]" />
      <div className="absolute inset-0 bg-blueprint-fine opacity-40" aria-hidden />
      <div className="relative">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div key="s" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
              <span className="mx-auto w-16 h-16 grid place-items-center rounded-full bg-[#00c853]/15 border border-[#00c853]/40 text-[#4ade80]">
                <CheckCircle2 size={32} />
              </span>
              <h3 className="font-display font-extrabold text-[24px] mt-4">{t.enquiry.successT}</h3>
              <p className="text-white/60 text-[14.5px] mt-2 max-w-md mx-auto leading-relaxed">{t.enquiry.successD}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a href={contactInfo.phoneLinks[0]} className="btn-tactile inline-flex items-center justify-center gap-2 font-bold text-white bg-gradient-to-r from-[#ff7a00] to-[#ffb000] px-6 py-3.5 rounded-full">
                  <Phone size={17} /> {t.enquiry.callInstead}
                </a>
                <button onClick={() => { setStatus('idle'); setName(''); setPhone(''); setCourse(''); setMessage(''); }} className="font-bold text-white/70 px-6 py-3.5 rounded-full border border-white/15 hover:bg-white/5">
                  ↺ <span className="ml-1">{lang === 'hi' ? 'नई पूछताछ' : 'New enquiry'}</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form key="f" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eq-name" className="text-[12px] font-extrabold tracking-widest text-white/60">{t.enquiry.name.toUpperCase()} *</label>
                <input id="eq-name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.enquiry.namePh} autoComplete="name" className={inputCls} />
              </div>
              <div>
                <label htmlFor="eq-phone" className="text-[12px] font-extrabold tracking-widest text-white/60">{t.enquiry.phone.toUpperCase()} *</label>
                <input id="eq-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.enquiry.phonePh} inputMode="tel" autoComplete="tel" className={inputCls} />
              </div>
              <div>
                <label htmlFor="eq-course" className="text-[12px] font-extrabold tracking-widest text-white/60">{t.enquiry.course.toUpperCase()} *</label>
                <select id="eq-course" value={course} onChange={(e) => setCourse(e.target.value)} className={`${inputCls} [&>option]:text-black`}>
                  <option value="">{t.enquiry.coursePh}</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{lang === 'hi' ? c.titleHi : c.titleEn}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="eq-lang" className="text-[12px] font-extrabold tracking-widest text-white/60">{t.enquiry.language.toUpperCase()}</label>
                <select id="eq-lang" value={prefLang} onChange={(e) => setPrefLang(e.target.value)} className={`${inputCls} [&>option]:text-black`}>
                  <option>{t.enquiry.langEn}</option>
                  <option>{t.enquiry.langHi}</option>
                  <option>{t.enquiry.langBoth}</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="eq-msg" className="text-[12px] font-extrabold tracking-widest text-white/60">{t.enquiry.message.toUpperCase()}</label>
                <textarea id="eq-msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.enquiry.messagePh} rows={4} className={`${inputCls} resize-y`} />
              </div>

              {status === 'error' && err && (
                <p role="alert" className="sm:col-span-2 flex items-center gap-2 text-[14px] font-semibold text-red-300 bg-red-500/10 border border-red-500/30 rounded-2xl px-4 py-3">
                  <AlertCircle size={17} /> {err}
                </p>
              )}

              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-1">
                <button type="submit" disabled={status === 'loading'}
                  className="btn-tactile btn-glow-blue flex-1 inline-flex items-center justify-center gap-2 font-extrabold text-white text-[15px] bg-gradient-to-r from-[#2456e6] to-[#00a8ff] px-6 py-4 rounded-full disabled:opacity-70 tracking-wide">
                  {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Send size={17} />}
                  {status === 'loading' ? t.enquiry.submitting : t.enquiry.submit.toUpperCase()}
                </button>
                <a href={contactInfo.phoneLinks[1]} className="btn-tactile inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-4 rounded-full border border-white/15 bg-white/5 hover:border-[#2f7bff]">
                  <Phone size={17} /> {t.contact.callNow}
                </a>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
