import PageShell from '../components/layout/PageShell';
import { SITE } from '../data/site';

// Legal copy requires professional legal review before production
export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" description="Klovah privacy policy.">
      <article className="legal-page">
        <header className="legal-header">
          <span className="legal-meta">PRIVACY POLICY</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: {SITE.legalLastUpdated}</p>
        </header>
        <div className="legal-body">
          <h2>Information We Collect</h2>
          <p>When you contact us through our website or email, we collect the information you provide, including your name, email address, company name, and project details. We do not collect information through tracking cookies or third-party analytics tools unless explicitly stated.</p>
          <h2>How We Use Your Information</h2>
          <p>We use the information you provide solely to respond to your enquiry, discuss potential projects, and deliver the services you engage us for. We do not sell, rent, or share your information with third parties for marketing purposes.</p>
          <h2>Data Storage and Security</h2>
          <p>Your information is stored securely and accessed only by team members who need it to respond to your enquiry or deliver your project. We take reasonable measures to protect your data from unauthorised access.</p>
          <h2>Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at {SITE.email}.</p>
          <h2>Changes to This Policy</h2>
          <p>We may update this policy from time to time. The most current version will always be available on this page with the date of the last update.</p>
          <h2>Contact</h2>
          <p>If you have any questions about this privacy policy, contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
        </div>
      </article>
    </PageShell>
  );
}
