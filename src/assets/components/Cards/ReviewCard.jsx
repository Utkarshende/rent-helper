import React from 'react'
import RatingStars from '../RatingStar/RatingStars.jsx'

function ReviewCard({name, review, rating, avatar}) {
    return (
        <div className='bg-teal-900 m-4 px-6 py-4 rounded-xl flex items-start space-x-4 w-full md:max-w-md cursor-pointer transition-transform duration-300 hover:translate-y-[-4px] shadow-lg'>
            <img 
                src={avatar}
                alt={`${name}'s avatar`}
                className='rounded-full w-16 h-16 object-cover flex-shrink-0 border-2 border-teal-500'
            />
            <div className='flex-1'>
                <h3 className='text-xl font-bold text-teal-200'>{name}</h3>
                <RatingStars rating={rating} />
                <p className='text-gray-300 mt-2 text-sm italic'>"{review}"</p>
            </div>
        </div>
    );
}

export default ReviewCard;