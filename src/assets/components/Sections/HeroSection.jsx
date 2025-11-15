// Inside src/assets/components/Layout/PrimaryButton.jsx

import { Link } from 'react-router';

const PrimaryButton = ({ to, children }) => (
  <Link 
    to={to} 
    className='text-xl md:text-2xl inline-flex items-center 
               bg-teal-600 text-white font-semibold m-4 py-3 px-8 
               rounded-full shadow-xl transition duration-300 
               hover:bg-teal-700 hover:shadow-2xl transform hover:scale-105'>
    {children}
  </Link>
);

export default PrimaryButton;