import HeroSection from '../components/layout/HeroSection'
import FeaturedSection from '../components/layout/FeaturedSection'
import SectionCardGrid from '../components/layout/SectionCardGrid'
import CardGridSection from '../components/layout/CardGridSection'
export default function Home() {
  return (
    <div className="">
        <HeroSection />
        <FeaturedSection />
        <SectionCardGrid />
        <CardGridSection />
        <SectionCardGrid />
    </div>
  );
}
