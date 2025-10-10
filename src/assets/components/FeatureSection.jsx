import { HandCoins,Headset, LandPlot,Coins } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FEATURES_CONFIG = [
  {
    title:"Experienced Professionals",
    description:"Our maids are highly trained and experienced .",
    icon:<HandCoins className='h-10 w-10 text-green-500'/>
  },{
    title:"Affordable Pricing",
    description:"We offer competitive rates at best quality.",
    icon:<Coins  className='h-10 w-10 text-fuchsia-400'/>
  },
  {
    title:"Wide Service Area",
    description:"Our services cover a broad geographic area.",
    icon:<LandPlot className='h-10 w-10 text-red-400'/>
  },
  {
    title:"24/7 Customer Support",
    description:"We provide 24/7 customer support to assist you.",
    icon:<Headset className='h-10 w-10 text-emerald-500'/>
  },
  {
    title:"Flexible Scheduling",
    description:"We offer flexible scheduling options.",
    icon:<HandCoins className='h-10 w-10 text-blue-500'/>
  },
  {
    title:"Trusted and Verified Maids",
    description:"All our maids undergo thorough background checks.",
    icon:<Headset className='h-10 w-10 text-yellow-500'/>
  }
]
function FeatureSection() {
  return (
    <div className='text-center text-xl pt-[30px] '>
      <h2 className='font-bold text-gray-400 text-4xl'>Why choose Our Maid Rental Services ?</h2>
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
