import RatingStars from "./RatingStars";
import { useState } from "react";
import { Link } from "react-router";
import {MoveRight, MoveLeft} from "lucide-react";
import {CATEGORY_STYLE, CategoryBadge} from "../components/CategoryBadge.jsx";

function maidCard({id,name,experience,charges,category,rating,imgUrl}) {
console.log(charges);

const [ slideIndex, setSlideIndex ] = useState(0);

const showPrevImg = ()=>{
  if(slideIndex > 0){
setSlideIndex(slideIndex - 1);
  }
  else{
    setSlideIndex(imgUrl.length - 1);
  }
};

const showNextImg = ()=>{
  if(slideIndex < imgUrl.length - 1){
    setSlideIndex(slideIndex + 1);
  }
  else{
    setSlideIndex(0);
  }
}

  return (
    <div className='bg-white w-[350px] m-4 px-6 py-6 rounded-md relative shadow-lg' key={id}>
      {/*Category*/}

      <CategoryBadge category={category}/>
       {/*<span className={`${styleObj?.bgColor} text-white rounded-full p-2 
       text-sm absolute top-12 right-0 flex items-center z-5`}>
    {styleObj?.icon}
    <span className="ml-2">{category}</span>
       </span>*/}

       {/* Rating*/}
       <span className="absolute top-2 right-4 flex text-black bg-slate-500 
       p-1 rounded-full">
        <RatingStars rating={rating}/>({rating})</span>

       {/* Charges*/}
       <span className="text-black absolute top-[150px]
       right-0 px-4 bg-white border-2 border-gray-400 rounded-l-full z-5" > 
       ₹ {charges}/hr</span>
       <div className="shadow-lg rounded-md relative">   
        {slideIndex > 0 ? (<MoveLeft className="text-black absolute top-18 left-0 bg-amber-400 h-8 w-8" onClick={showPrevImg}/>) : null } 
        { slideIndex < imgUrl.length - 1 ? (<MoveRight className="text-black absolute top-18 right-0 bg-amber-400 h-8 w-8" onClick={showNextImg}/>) : null }
        <img src={imgUrl[slideIndex]}
        alt={name}
        className='w-full h-48 object-cover rounded-md'/>
        </div>

        {/*Name*/}
        <h2 className='text-lg md:text-xl font-semibold text-slate-600'>{name}</h2>
        {/*Experience*/}
        <p className='text-md text-slate-500'>{experience}</p>
        <Link className="bg-amber-700 block mx-auto rounded-md mt-4 hover:bg-orange-600
        transition-color duration-200 cursor-pointer p-1 w-fit" to={`/maid-details?id=${id}` }>Book Now</Link>
    </div>
  )
}

export default maidCard
