import AboutSection from './about'
import AchievementsSection from './achievements'
import HeroSection from './hero'
import ProjectsSection from './projects'

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection />
    </>
  )
}

export default HomePage
