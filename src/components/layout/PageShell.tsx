import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SiteFooter from './SiteFooter';

interface Props {
  children: React.ReactNode;
  noFooter?: boolean;
  title?: string;
  description?: string;
}

export default function PageShell({ children, noFooter, title, description }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title ? `${title} | Klovah` : 'Klovah | Ideas, Made Real.';
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [pathname, title, description]);

  return (
    <>
      {children}
      {!noFooter && <SiteFooter />}
    </>
  );
}
