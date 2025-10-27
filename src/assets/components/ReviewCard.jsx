import React from 'react'
import RatingStars from './RatingStars.jsx'
function ReviewCard({
    name,
    review,
    rating,
    avatar
}) {
  return (
    <div className='bg-teal-900 m-4 px-6 py-4 rounded-md flex w-full md:max-w-fit hover:translate-y-1/12 cursor-pointer'>
     <img src={avatar}
     alt={`${name}'s avatar`}
     className='rounded-full w-16 h-16'/>
     <div >
        <h3 className='text-lg font-semibold'>{name}</h3>
        <RatingStars rating={rating} />
        <p className='text-gray-400'>{review}</p>
     </div>
     
    </div>
  )
}

export default ReviewCard
