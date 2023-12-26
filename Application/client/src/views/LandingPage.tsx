import {
  FeaturesGrid,
  MailSection,
  HeroSection,
  CompanyGrid,
  AboutFirst,
  AboutTwo,
  FreeTrial,
  Footer,
} from '../components/components';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CompanyGrid />
      <FeaturesGrid />
      <AboutFirst />
      <AboutTwo />
      <FreeTrial />
      <MailSection />
      <Footer />
    </div>
  );
};

export default LandingPage;