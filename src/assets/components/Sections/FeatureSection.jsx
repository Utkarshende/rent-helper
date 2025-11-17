import FeatureCard from '../Cards/FeatureCard.jsx'
import { FEATURES_CONFIG} from '../../../config/common.jsx'
import Heading from '../Layout/Heading.jsx'; 

function FeatureSection() {
    return (
        <div className='text-center pt-8 pb-12 bg-teal-900'>
            <Heading heading="Why Choose Our Maid Rental Services?" className="text-teal-400 mb-8"/>
            <div className='flex flex-wrap justify-center max-w-7xl mx-auto p-4'>  
                {FEATURES_CONFIG.map((featureObj) => (
                    <FeatureCard
                        key={featureObj.title}
                        title={featureObj.title}
                        description={featureObj.description}
                        icon={featureObj.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeatureSection;