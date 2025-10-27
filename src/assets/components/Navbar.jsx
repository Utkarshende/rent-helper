import {Link} from "react-router"


function Navbar() {
  return (
    <div className='fixed top-0 w-full z-50 bg-white py-4 px-6 md:px-12 shadow-lg'>
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <Link 
          className='text-2xl font-bold text-gray-800 flex items-center transition duration-300 hover:text-teal-600' 
          to="/">
          <span className="text-indigo-800 ">Rent A Maid</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
