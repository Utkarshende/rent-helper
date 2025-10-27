import FeatureCard from './FeatureCard';
import { FEATURES_CONFIG } from '../../config/common';
import Heading from './Heading';
function FeatureSection() {
  return (
    <div className='text-center text-xl pt-[30px] bg-teal-900 '>
      <Heading heading="Why choose Our Maid Rental Services ?"/>
    <div className='flex flex-wrap justify-center m-4 p-4'>  
      {FEATURES_CONFIG.map((featureObj)=>{
        const {title,description,icon} = featureObj;
        return(
          <FeatureCard
          title={title}
          description={description}
          icon={icon}
          key={title}/>
        )
      })}
    </div>
    </div>
  )
}

export default FeatureSection
