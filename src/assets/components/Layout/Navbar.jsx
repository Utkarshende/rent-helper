import {Link} from "react-router"

function Navbar() {
    return (
        <div className='fixed top-0 w-full z-50 bg-white py-4 px-6 md:px-12 shadow-md'>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link 
                    className='text-2xl font-bold text-gray-800 flex items-center transition duration-300 hover:text-teal-600' 
                    to="/">
                    <span className="text-indigo-800">Rent A Maid</span>
                </Link>
                <div className='flex items-center space-x-4'>
                    <Link to="/explore" className='text-gray-600 hover:text-teal-600 font-medium transition duration-300 hidden sm:inline'>
                        Explore
                    </Link>
                    <Link to="/login" className='text-gray-600 hover:text-teal-600 font-medium transition duration-300'>
                        Login
                    </Link>
                    <Link to="/register" className='bg-teal-600 text-white px-4 py-2 rounded-full font-medium hover:bg-teal-700 transition duration-300'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;