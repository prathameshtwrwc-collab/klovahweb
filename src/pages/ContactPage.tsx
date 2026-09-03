import { useState } from 'react';
import PageShell from '../components/layout/PageShell';
import { SITE } from '../data/site';

const NEEDS = ['Brand & Website', 'Ecommerce', 'Software Product', 'Mobile App', 'Data & Analytics', 'AI & Automation', 'SEO & Growth', 'Not Sure Yet'];
const BUDGETS = ['Under ₹1 Lakh', '₹1–3 Lakh', '₹3–7 Lakh', '₹7–15 Lakh', '₹15 Lakh+', "Let's Discuss"];
const TIMELINES = ['As Soon As Possible', '1–2 Months', '3–4 Months', '5+ Months', 'Flexible'];

interface FormState {
  name: string; email: string; company: string; need: string;
  summary: string; budget: string; timeline: string;
}

const initial: FormState = { name: '', email: '', company: '', need: '', summary: '', budget: '', timeline: '' };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = (): boolean => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email is required';
    if (!form.need) errs.need = 'Please select what you need';
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const first = document.querySelector(`[name="${Object.keys(errs)[0]}"]`) as HTMLElement;
      first?.focus();
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // PRODUCTION TODO: Replace this mailto approach with a real form endpoint
    const subject = encodeURIComponent(`Project Brief: ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nNeed: ${form.need}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nSummary:\n${form.summary}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <PageShell title="Contact" description="Tell us what you are building, improving or trying to understand.">
      <section className="contact-hero">
        <div className="contact-hero-bg" aria-hidden="true" />
        <div className="contact-hero-content">
          <span className="contact-meta">CONTACT / START SOMETHING</span>
          <h1 className="contact-title">
            <span className="contact-title-bodoni">WHAT SHOULD</span>
            <span className="contact-title-inter">WE MAKE NEXT?</span>
          </h1>
          <p className="contact-supporting">Tell us what you are building, improving or trying to understand.</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-panel">
          {submitted ? (
            <div className="contact-submitted">
              <p className="contact-submitted-msg">
                Your email app should open with the project brief prepared.
              </p>
              <button className="contact-reset-btn" onClick={() => setSubmitted(false)}>
                SEND ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="cf-field">
                <label htmlFor="cf-name">NAME</label>
                <input id="cf-name" name="name" type="text" autoComplete="name" value={form.name} onChange={set('name')} aria-describedby={errors.name ? 'err-name' : undefined} />
                {errors.name && <span id="err-name" className="cf-error">{errors.name}</span>}
              </div>
              <div className="cf-field">
                <label htmlFor="cf-email">WORK EMAIL</label>
                <input id="cf-email" name="email" type="email" autoComplete="email" value={form.email} onChange={set('email')} aria-describedby={errors.email ? 'err-email' : undefined} />
                {errors.email && <span id="err-email" className="cf-error">{errors.email}</span>}
              </div>
              <div className="cf-field">
                <label htmlFor="cf-company">COMPANY OR BRAND</label>
                <input id="cf-company" name="company" type="text" autoComplete="organization" value={form.company} onChange={set('company')} />
              </div>
              <div className="cf-field">
                <label htmlFor="cf-need">WHAT DO YOU NEED?</label>
                <select id="cf-need" name="need" value={form.need} onChange={set('need')} aria-describedby={errors.need ? 'err-need' : undefined}>
                  <option value="">Select…</option>
                  {NEEDS.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
                {errors.need && <span id="err-need" className="cf-error">{errors.need}</span>}
              </div>
              <div className="cf-field cf-field-full">
                <label htmlFor="cf-summary">PROJECT SUMMARY</label>
                <textarea id="cf-summary" name="summary" rows={4} value={form.summary} onChange={set('summary')} />
              </div>
              <div className="cf-field">
                <label htmlFor="cf-budget">APPROXIMATE BUDGET</label>
                <select id="cf-budget" name="budget" value={form.budget} onChange={set('budget')}>
                  <option value="">Select…</option>
                  {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="cf-field">
                <label htmlFor="cf-timeline">TARGET TIMELINE</label>
                <select id="cf-timeline" name="timeline" value={form.timeline} onChange={set('timeline')}>
                  <option value="">Select…</option>
                  {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <button type="submit" className="cf-submit">
                SEND PROJECT BRIEF <span aria-hidden="true">↗</span>
              </button>
            </form>
          )}
        </div>

        <div className="contact-direct">
          <h2 className="contact-direct-heading">PREFER EMAIL?</h2>
          <a href={`mailto:${SITE.email}`} className="contact-direct-email">{SITE.email}</a>
          <p className="contact-direct-location">BASED IN INDIA.<br />WORKING WORLDWIDE.</p>
        </div>
      </section>
    </PageShell>
  );
}
