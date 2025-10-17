import avatar from 'daisyui/components/avatar'
import React from 'react'
import imgStar from '../../assets/star.png'
import imgUnstar from '../../assets/starGrey.png'


function ReviewCard({
    name,
    review,
    rating,
    avatar
}) {
  return (
    <div className='bg-red-800 m-4 px-6 py-2 rounded-md flex w-full md:max-w-fit'>
     <img src={avatar}
     alt={`${name}'s avatar`}
     className='rounded-full w-16 h-16'/>
     <div>
        <h3 className='text-lg font-semibold'>{name}</h3>
        
        {new Array(rating).fill(0).map((_,i)=>{
            return(<img src={imgStar} alt='star' className='inline h-5 w-5 mr-2 ml-2' key={i}/>)
        })}
         {new Array(5-rating).fill(0).map((_,i)=>{
            return(<img src={imgUnstar} alt='Unstar' className='inline h-5 w-5 mr-2 ml-2' key={i}/>)
        })}
        <p className='text-gray-400'>{review}</p>
     </div>
     
    </div>
  )
}

export default ReviewCard
