import Blog from "../components/Blog";
import DiscoverSection from "../components/DiscoverSection";
import ExploreApartments from "../components/ExploreApartments";
import FeaturedProperty from "../components/FeaturedProperty";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";

export default function HomePage() {
  return (
    <div> 
      <HeroSection />
      <IntroSection /> 
      <FeaturedProperty />
      <ExploreApartments />  
      <FeedBack />
      <Blog />
      <DiscoverSection /> 
      <Footer />
    </div>
  )
}
