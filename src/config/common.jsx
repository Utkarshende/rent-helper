import { HandCoins, Headset, LandPlot, Coins, CalendarCheck, UserCheck } from 'lucide-react';

const FEATURES_CONFIG = [
    {
        title: "Experienced Professionals",
        description: "Our maids are highly trained and experienced for excellent service.",
        icon: <UserCheck className='h-10 w-10 text-green-500'/>
    },
    {
        title: "Affordable Pricing",
        description: "We offer competitive rates with no hidden costs.",
        icon: <Coins className='h-10 w-10 text-fuchsia-400'/>
    },
    {
        title: "Wide Service Area",
        description: "Our services cover a broad geographic area for your convenience.",
        icon: <LandPlot className='h-10 w-10 text-red-400'/>
    },
    {
        title: "24/7 Customer Support",
        description: "We provide round-the-clock support to assist you with any query.",
        icon: <Headset className='h-10 w-10 text-emerald-500'/>
    },
    {
        title: "Flexible Scheduling",
        description: "Choose a time and duration that perfectly fits your schedule.",
        icon: <CalendarCheck className='h-10 w-10 text-blue-500'/>
    },
    {
        title: "Trusted and Verified Maids",
        description: "All our maids undergo thorough background checks for safety.",
        icon: <HandCoins className='h-10 w-10 text-yellow-500'/>
    }
];

const REVIEWS_CONFIG = [
    {
        name: "Anjali",
        review: "The maid service was exceptional and professional. Highly impressed!",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "Rohit",
        review: "Professional and reliable maids. They completed the job perfectly on time.",
        rating: 4,
        avatar: "https://avatar.iran.liara.run/public/41"
    },
    {
        name: "Sneha",
        review: "Highly recommend their services. My home is spotless and I feel safe.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=4"
    }
];

const COUPON_CODES = {
    SAVE10: {
        discount: 10,
        description: "Get 10% off on your first booking."
    },
    FREERIDE: { 
        discount: 20, 
        description: "Get 20% off on bookings over ₹2000." 
    },
    FAMILY50: {
        discount: 50,
        description: "Get 50% off during the festive season (Max ₹500 discount)."
    }
};

export {FEATURES_CONFIG, REVIEWS_CONFIG, COUPON_CODES};