import AboutSection from './about'
import AchievementsSection from './achievements'
import HeroSection from './hero'

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
    </>
  )
}

export default HomePage
