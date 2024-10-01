import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection';
import CategoryCarousel from '../components/CategoryCarousel'

const Home = () => {
  return (
	<div>
		<Navbar />
		<HeroSection />
		<CategoryCarousel />
	</div>
  )
}

export default Home