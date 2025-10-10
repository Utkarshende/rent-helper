import React from 'react'
import { useState,useEffect } from 'react'

function HeroSection() {
const [isMounted, setIsMounted] = useState(false);

useEffect(()=>{
setIsMounted(true);},[]);

const headingClasses=` text-center text-3xl font-bold mt-10 mb-5 h-20 ${isMounted ?  'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`;
  return (
    <div>
      
    </div>
  )
}

export default HeroSection
