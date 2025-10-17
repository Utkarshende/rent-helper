import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import FeatureSection from '../components/FeatureSection'
import ReviewSection from '../components/ReviewSection'

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
