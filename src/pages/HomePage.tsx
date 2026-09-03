import HeroSection from '../components/home/HeroSection';
import ValueStatementSection from '../components/home/ValueStatementSection';
import SelectedWorkSection from '../components/home/SelectedWorkSection';
import IntelligenceSection from '../components/home/IntelligenceSection';
import ConnectedCapabilitiesSection from '../components/home/ConnectedCapabilitiesSection';
import CollaborationSection from '../components/home/CollaborationSection';
import SocialProofSection from '../components/home/SocialProofSection';
import FinalContactSection from '../components/home/FinalContactSection';

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-[#F3E6D3]">
      <HeroSection />
      <ValueStatementSection />
      <SelectedWorkSection />
      <IntelligenceSection />
      <ConnectedCapabilitiesSection />
      <CollaborationSection />
      <SocialProofSection />
      <FinalContactSection />
    </main>
  );
}
