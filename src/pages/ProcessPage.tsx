import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';

const E: any = [0.22, 1, 0.36, 1];

const STEPS = [
  { num: '01', title: 'ASK', body: 'We define the real business problem, audience and measure of success.' },
  { num: '02', title: 'MAKE', body: 'Strategy, design and engineering move together from the beginning.' },
  { num: '03', title: 'TEST', body: 'We validate assumptions early and improve the system with evidence.' },
  { num: '04', title: 'GROW', body: 'We launch, learn and continue improving what creates value.' },
];

const PRINCIPLES = ['VISIBLE PROGRESS', 'SMALLER DECISIONS', 'SHARED OWNERSHIP'];

export default function ProcessPage() {
  const reduce = useReducedMotion();
  return (
    <PageShell title="Process" description="No black box. No big reveal. You see the work. You shape the work.">
      <section className="proc-hero">
        <div className="proc-hero-bg" aria-hidden="true" />
        <div className="proc-hero-content">
          <span className="proc-meta">PROCESS / COLLABORATION</span>
          <h1 className="proc-title">
            <span className="proc-title-line">NO BLACK BOX.</span>
            <span className="proc-title-line">NO BIG REVEAL.</span>
          </h1>
          <p className="proc-supporting">You see the work. You shape the work.</p>
        </div>
      </section>

      <section className="proc-steps">
        <div className="proc-steps-grid">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="proc-step-card"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: E, delay: i * 0.06 }}
            >
              <span className="proc-step-num">{step.num}</span>
              <h2 className="proc-step-title">{step.title}</h2>
              <p className="proc-step-body">{step.body}</p>
              <div className="proc-step-connector" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="proc-principles">
        <div className="proc-principles-grid">
          {PRINCIPLES.map(p => (
            <div key={p} className="proc-principle-col">
              <h3 className="proc-principle-title">{p}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="proc-cta-section">
        <h2 className="proc-cta-heading">
          <span>CLOSE COLLABORATION.</span>
          <span>BETTER WORK.</span>
        </h2>
        <Link to="/contact" className="proc-cta-btn">
          START A PROJECT <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </PageShell>
  );
}
