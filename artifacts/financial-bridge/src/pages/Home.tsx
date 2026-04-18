import SmoothWrapper from '@/components/SmoothWrapper';
import HeroSection from '@/components/HeroSection';
import TrustStats from '@/components/TrustStats';
import StickyCardStack from '@/components/StickyCardStack';
import HorizontalGallery from '@/components/HorizontalGallery';
import HowItWorks from '@/components/HowItWorks';
import ComplianceSection from '@/components/ComplianceSection';
import ConversationalForm from '@/components/ConversationalForm';
import ArticleCards from '@/components/ArticleCards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothWrapper>
      <HeroSection />
      <TrustStats />
      <StickyCardStack />
      <HorizontalGallery />
      <HowItWorks />
      <ComplianceSection />
      <ConversationalForm />
      <ArticleCards />
      <Footer />
    </SmoothWrapper>
  );
}
