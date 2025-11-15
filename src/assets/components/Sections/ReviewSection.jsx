import React from 'react'
import Heading from '../Layout/Heading.jsx'
import { REVIEWS_CONFIG } from '../../../config/common.jsx'
import ReviewCard from '../Cards/ReviewCard.jsx' 

function ReviewSection() {
  return (
    <div className='pb-6 bg-white'>
      <h1>
      <Heading heading={"What our customer says !!!!!!!!!"} className={" m-2 p-8  "}/>
      <div className='flex flex-wrap justify-center'>
      {REVIEWS_CONFIG.map((reviewObj)=>{
        const{name, review,rating}=reviewObj;
        return(<ReviewCard
        key={name}
        name={name}
        review={review}
        rating={rating}
        />)
      })}
        </div>
      </h1>
    </div>
  )
}

export default ReviewSection