import HeroSection from '../components/Sections/HeroSection'
import Navbar from '../components/Layout/Navbar'
import ReviewSection from '../components/Sections/ReviewSection'
import HelperDetails from '../views/HelperDetails';
import FeatureSection from '../components/Sections/FeatureSection';


function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection />
             <ReviewSection/>
             <HelperDetails/>
        </div>
    );
}

export default Home;