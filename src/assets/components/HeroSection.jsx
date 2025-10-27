import React from 'react'
import {Link} from 'react-router-dom';

function HeroSection() {
	// Note: Replaced local image import with a themed placeholder URL to keep the file self-contained.
	const maidPlaceholderUrl = "https://placehold.co/150x150/2dd4bf/ffffff?text=Pro+Helper";

	return (
		// Systematic structure with clear padding and a light background
		<div className='py-16 md:py-24 bg-gray-50'>
			{/* Max width container, centered, for better responsiveness */}
			<div className='max-w-4xl mx-auto px-4 text-center'>
				
				{/* Visual Element: Placeholder for the maid image */}
				<div className='mb-8'>
					<img 
						src={maidPlaceholderUrl}
						alt="Professional Cleaning Helper"
						className='h-36 w-36 object-cover mx-auto rounded-full shadow-xl ring-4 ring-teal-300'
					/>
				</div>

				{/* Main Heading: Clean typography with color accents (Teal and Indigo theme) */}
				<h1 className='text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 leading-tight'>
					Rent a Maid with {""}
					{/* Teal accent for 'Ease' */}
					<span className='text-teal-600 border-b-4 border-teal-300 inline-block'>Ease</span> 
					{" "} and {""}
					{/* Indigo accent for 'Convenience' */}
					<span className='text-indigo-700'>Convenience</span>!
				</h1>
				
				{/* Sub-Text: Clean and easy to read */}
				<p className='text-xl text-gray-600 mb-10 max-w-2xl mx-auto'> 
					Experience **top-notch cleaning services** at your fingertips. Our
					platform connects you with professional, vetted helpers for **hassle-free**
					home care. Book now and enjoy a spotless home with peace of mind.
				</p>

				{/* Call-to-Action Button: Prominent, Teal-themed, and interactive */}
				<Link 
					to="/explore" 
					className='text-xl md:text-2xl inline-flex items-center 
								bg-teal-600 text-white font-semibold m-4 py-3 px-8 
								rounded-full shadow-xl transition duration-300 
								hover:bg-teal-700 hover:shadow-2xl transform hover:scale-105'
				>
					Explore Helpers Now 
					<span className='ml-3 text-2xl'>&rarr;</span>
				</Link>
			</div>
		</div>
	);
}

export default HeroSection
