import React from 'react'
import HeroSection from '../components/Sections/HeroSection'
import Navbar from '../components/Layout/Navbar'
import FeatureSection from '../components/Sections/FeatureSection'
import ReviewSection from '../components//Sections/ReviewSection'

function Home() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <FeatureSection />
    <ReviewSection/>
    </div>
  )
}

export default Home
