import {Link} from 'react-router';

function HeroSection() {
	const maidPlaceholderUrl = "https://cdn-icons-png.flaticon.com/128/10485/10485017.png";
	return (
		<div className='py-16 md:pt-20 md:pb-4 bg-gray-50'>
			<div className='max-w-4xl mx-auto px-4 text-center'>
				<div className='mb-8'>
					<img 
						src={maidPlaceholderUrl}
						alt="Professional Cleaning Helper"
						className='h-40 w-40 object-cover mx-auto rounded-full shadow-xl ring-4 ring-teal-300'
					/>
				</div>
				<h1 className='text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 leading-tight'>
					Rent a Maid with {""}
					<span className='text-teal-600 border-b-4 border-teal-300 inline-block'>Ease</span> 
					{" "} and {""}
					<span className='text-indigo-700'>Convenience</span>!
				</h1>
				<p className='text-xl text-gray-600 mb-10 max-w-2xl mx-auto'> 
					Experience <b>top-notch cleaning services</b> at your fingertips. Our
					platform connects you with professional, vetted helpers for <b>hassle-free</b>
					home care. Book now and enjoy a spotless home with peace of mind.
				</p>
				<Link 
					to="/explore" 
					className='text-xl md:text-2xl inline-flex items-center 
								bg-teal-600 text-white font-semibold m-4 py-3 px-8 
								rounded-full shadow-xl transition duration-300 
								hover:bg-teal-700 hover:shadow-2xl transform hover:scale-105'>
					Explore Helpers Now 
				</Link>
			</div>
		</div>
	);
}

export default HeroSection
