
import HeroBanner from "../components/HeroBanner";
import AboutSection from "../components/AboutSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsGrid from "../components/SkillsGrid";
import ProjectsSlider from "../components/ProjectsSlider";
import EducationSection from "../components/EducationSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroBanner />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsGrid />
      <ProjectsSlider />
      <EducationSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
