import {BrushCleaning,PawPrint,Cross,Baby,CookingPot,Armchair,Trash} from "lucide-react";
import RatingStars from "./RatingStars";


const CATEGORY_STYLE = {
    "Cleaning": {icon:<BrushCleaning className="text-white inline-block h-[16px] w-[16px] bg-emerald-400"/>},
    "Pet Care":{icon:<PawPrint className="text-white inline-block h-[16px] w-[16px] bg-blue-500"/>} ,
    "Elderly Care":{icon:<Cross className="text-white inline-block h-[16px] w-[16px] bg-amber-400"/>} , 
    "Babysitting": {icon:<Baby className="text-white inline-block h-[16px] w-[16px] bg-fuchsia-700"/>},
    "Housekeeping": {icon:<Trash className="text-white inline-block h-[16px] w-[16px] bg-red-600"/>},
    "Cooking": {icon:<CookingPot className="text-white inline-block h-[16px] w-[16px]"/>},
    "Furniture Assembly":{icon:<Armchair className="text-white inline-block h-[16px] w-[16px]"/>} 
};



function maidCard({id,name,experience,charges,category,rating,imgUrl}) {
console.log(charges);
const styleObj=CATEGORY_STYLE[category] || {};

  return (
    <div className='bg-white w-[350px] m-4 px-6 py-6 rounded-md relative shadow-lg' key={id}>
      {/*Category*/}
       <span className={`${styleObj?.bgColor} bg-black text-white rounded-full p-2 
       text-sm absolute top-12 right-0 flex items-center`}>
    {styleObj?.icon}
    <span className="ml-2">{category}</span>
       </span>
       {/* Rating*/}
       <span className="absolute top-2 right-4 flex text-black bg-slate-500 
       p-1 rounded-full">
        <RatingStars rating={rating}/>({rating})</span>
       {/* Charges*/}
       <span className="text-black absolute top-[150px]
       right-0 px-4 bg-white border-2 border-gray-400 rounded-l-full" >{charges}</span>
        <img src="https://www.flaticon.com/free-icon/mother_10032075?term=maid&page=1&position=64&origin=search&related_id=10032075"
        alt={name}
        className='w-full h-48 object-contain'/>
        {/*Name*/}
        <h2 className='text-lg md:text-xl font-semibold text-slate-600'>{name}</h2>
        {/*Experience*/}
        <p className='text-md text-slate-500'>{experience}</p>
        <button className="bg-amber-700 block mx-auto rounded-md mt-4 hover:bg-orange-600
        transition-color duration-200 cursor-pointer p-1">Book Now</button>
    </div>
  )
}

export default maidCard
