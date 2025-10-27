import {Link} from "react-router-dom"
// import imgLogo from '../../assets/helperLogo.png' // Removed to use inline SVG for self-contained component

function Navbar() {
  // TealLogoSVG has been removed as requested.

  return (
    // Fixed Navbar: w-full, z-50 to stay on top, white background, shadow
    <div className='fixed top-0 w-full z-50 bg-white py-4 px-6 md:px-12 shadow-lg'>
      {/* Container for navigation items (currently just the logo/brand) */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo/Brand Link */}
        <Link 
          className='text-2xl font-bold text-gray-800 flex items-center transition duration-300 hover:text-teal-600' 
          to="/"
        >
          {/* Removed {TealLogoSVG} */}
          <span className="text-indigo-800">Rent A Maid</span>
        </Link>
        
        {/* Navigation Links (Add links here if needed later) */}
        <nav>
          {/* Example Link: <Link to="/about" className="text-gray-600 hover:text-teal-600 ml-6">About</Link> */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
