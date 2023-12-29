import {
  FeaturesGrid,
  MailSection,
  HeroSection,
  CompanyGrid,
  AboutFirst,
  AboutTwo,
  FreeTrial,
  Footer,
  ModeSwitch,
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
      <ModeSwitch />
      <Footer />
    </div>
  );
};

export default LandingPage;