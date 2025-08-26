import React from 'react'
import HeroSection from './Hero'
import AboutSection from './About'
import HomePageAdditions from './Other'

export default function Home() {
  return (
    <section>
        <HeroSection/>
        <AboutSection/>
        <HomePageAdditions/>
    </section>
  )
}
