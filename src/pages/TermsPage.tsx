import PageShell from '../components/layout/PageShell';
import { SITE } from '../data/site';

// Legal copy requires professional legal review before production
export default function TermsPage() {
  return (
    <PageShell title="Terms of Service" description="Klovah terms of service.">
      <article className="legal-page">
        <header className="legal-header">
          <span className="legal-meta">TERMS OF SERVICE</span>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Last updated: {SITE.legalLastUpdated}</p>
        </header>
        <div className="legal-body">
          <h2>Scope of Services</h2>
          <p>Klovah provides digital strategy, design, engineering, data and growth services as agreed with each client through individual project proposals and statements of work.</p>
          <h2>Intellectual Property</h2>
          <p>Upon full payment, clients receive ownership of the deliverables produced during their project, except for any pre-existing tools, libraries, or frameworks that remain the property of Klovah or their respective licensors.</p>
          <h2>Payment</h2>
          <p>Payment terms are specified in individual project agreements. Unless otherwise agreed, invoices are due within 14 days of issue.</p>
          <h2>Confidentiality</h2>
          <p>Both parties agree to keep confidential any proprietary information shared during the course of the engagement.</p>
          <h2>Limitation of Liability</h2>
          <p>Klovah's liability for any claim arising from the services shall not exceed the total fees paid by the client for the specific project in question.</p>
          <h2>Amendments</h2>
          <p>These terms may be updated from time to time. Continued use of our services after updates constitutes acceptance of the revised terms.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
        </div>
      </article>
    </PageShell>
  );
}
