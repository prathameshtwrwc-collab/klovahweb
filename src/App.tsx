import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SiteHeader from './components/layout/SiteHeader';

import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import CasesPage from './pages/CasesPage';
import CaseDetailPage from './pages/CaseDetailPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

function AppRoutes() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {!isHome && <SiteHeader />}
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/cases/:slug" element={<CaseDetailPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          {/* Redirects */}
          <Route path="/work" element={<Navigate to="/works" replace />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/services" element={<Navigate to="/capabilities" replace />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
