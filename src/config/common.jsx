import { HandCoins,Headset, LandPlot,Coins } from 'lucide-react';
import FeatureCard from './../assets/components/FeatureCard.jsx';
import avatar from 'daisyui/components/avatar/index.js';

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
const REVIEWS_CONFIG=[
  {
    name:"Anjali",
    review:"The maid service was exceptional.",
    rating:5,
   avatar:"https://i.pravatar.cc/150?img=3"
  },
  {
    name:"Rohit",
    review:"Professional and reliable maids.",
    rating:4,
    avatar:"https://i.pravatar.cc/150?img=3"
  },
  {
    name:"Sneha",
    review:"Highly recommend their services.",
    rating:5,
    avatar:"https://i.pravatar.cc/150?img=4"
  }
]
export {FEATURES_CONFIG, REVIEWS_CONFIG};