import { useState, type FormEvent } from 'react';
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
    // Structured for a future backend — replace with fetch('/api/enquire', …).
    const payload = { name, phone, course, preferredLanguage: prefLang, message, at: new Date().toISOString() };
    try {
      await new Promise((r) => setTimeout(r, 900));
      void payload;
      // TODO: const res = await fetch('/api/enquire', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      setStatus('success');
    } catch {
      setErr(t.enquiry.errorD);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-[#e5e5e5] rounded-2xl p-8 sm:p-10 text-center">
        <span className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-[#eef4ec] text-[#2e7d32]">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="font-extrabold text-[22px] mt-4">{t.enquiry.successT}</h3>
        <p className="lede text-[14.5px] mt-2 max-w-md mx-auto">{t.enquiry.successD}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <a href={contactInfo.phoneLinks[0]} className="btn btn-dark">
            <Phone size={17} /> {t.enquiry.callInstead}
          </a>
          <button
            onClick={() => {
              setStatus('idle');
              setName('');
              setPhone('');
              setCourse('');
              setMessage('');
            }}
            className="btn btn-outline"
          >
            {lang === 'hi' ? 'नई पूछताछ' : 'New enquiry'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="bg-white border border-[#e5e5e5] rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-5">
      <div>
        <label htmlFor="eq-name" className="field-label">
          {t.enquiry.name} *
        </label>
        <input
          id="eq-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.enquiry.namePh}
          autoComplete="name"
          className="field-input"
        />
      </div>
      <div>
        <label htmlFor="eq-phone" className="field-label">
          {t.enquiry.phone} *
        </label>
        <input
          id="eq-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.enquiry.phonePh}
          inputMode="tel"
          autoComplete="tel"
          className="field-input"
        />
      </div>
      <div>
        <label htmlFor="eq-course" className="field-label">
          {t.enquiry.course} *
        </label>
        <select id="eq-course" value={course} onChange={(e) => setCourse(e.target.value)} className="field-input">
          <option value="">{t.enquiry.coursePh}</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {lang === 'hi' ? c.titleHi : c.titleEn}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="eq-lang" className="field-label">
          {t.enquiry.language}
        </label>
        <select id="eq-lang" value={prefLang} onChange={(e) => setPrefLang(e.target.value)} className="field-input">
          <option>{t.enquiry.langEn}</option>
          <option>{t.enquiry.langHi}</option>
          <option>{t.enquiry.langBoth}</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="eq-msg" className="field-label">
          {t.enquiry.message}
        </label>
        <textarea
          id="eq-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.enquiry.messagePh}
          rows={4}
          className="field-input resize-y"
        />
      </div>

      {status === 'error' && err && (
        <p role="alert" className="sm:col-span-2 flex items-start gap-2 text-[14px] font-semibold text-[#b3261e] bg-[#fdecea] border border-[#f5c6c0] rounded-xl px-4 py-3">
          <AlertCircle size={17} className="shrink-0 mt-0.5" /> {err}
        </p>
      )}

      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
        <button type="submit" disabled={status === 'loading'} className="btn btn-dark flex-1 disabled:opacity-70">
          {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
          {status === 'loading' ? t.enquiry.submitting : t.enquiry.submit}
        </button>
        <a href={contactInfo.phoneLinks[1]} className="btn btn-outline">
          <Phone size={17} /> {t.contact.callNow}
        </a>
      </div>
    </form>
  );
}
