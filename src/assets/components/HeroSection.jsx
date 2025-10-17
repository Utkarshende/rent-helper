import React from 'react'
import maidImg from '../../assets/maid.png'
import {Link} from 'react-router-dom';
function HeroSection() {
  return (
    <div className='mt-10'>
      <img src={maidImg}
      alt="Featured Maid"
      className='h-[200px] md:h-[200px] object-contain block mx-auto '/>
      <h1 className='text-center text-4xl my-4 text-gray-500'>
        Rent a maid with{""}
        <span className='bg-green-800 px-4 py-8 rounded-md 
        inline-block rotate-10 '>Ease </span>{""}
        and{""}
        <span className='bg-yellow-400 px-4 py-1 rounded-md inline-block
        mt-6 md:mt-0 rotate-0 md:rotate-10'>
          Convenience!
          </span> 
        </h1>
        <p className='text-center text-xl text-gray-400 mb-6'> 
        Experience top-notch cleaning services at your fingertips. Our
        platform connects you with professional maids for hassle-free
        home cleaning. Book now and enjoy a spotless home with ease!
        </p>
        <Link to="/explore" className='text-3xl block mx-auto bg-orange-400 text-white m-4 py-2 px-4
         rounded-md cursor-pointer w-fit'>
          Explore Now 🔍
          </Link>
    </div>
  );
}

export default HeroSection
