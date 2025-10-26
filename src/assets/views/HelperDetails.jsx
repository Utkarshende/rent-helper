import {useSearchParams} from "react-router"
import Navbar from "../components/Navbar.jsx"
import Heading from "../components/Heading.jsx"
import {MAIDS_CONFIG} from "../../config/maids.jsx"
import { useState } from "react";
import RatingStars from "../components/RatingStars.jsx";
import { CategoryBadge } from "../components/CategoryBadge.jsx";

function HelperDetails() {
  const [searchParams]=useSearchParams();
  const id =searchParams.get("id");

  const maid = MAIDS_CONFIG.find((maid)=>maid.id === parseInt(id));
const [currentImageIndex, setCurrentImageIndex]=useState(0);

 console.log(maid);
  return (
    <div>
      <Navbar/>
   <h1 className="text-2xl font-bold mb-4">Helper Details For ID - {id} </h1>
   <Heading heading={`Let's explore the maids`} className={"mt-4! mb-4!"}/>
   <div className="flex flex-col md:flex-row justify-center space-x-4
   items-center ">
    <div className="flex md:flex-col-reverse space-x-2 md:space-y-4">
      {
        maid.imgUrl.map((imgUrl, index)=>{
          return(
            <img
            key={index}
            src={imgUrl}
            alt={`Thumbnail ${index + 1}`}
            onClick={()=>setCurrentImageIndex(index)}
            className={ `w-16 h-16 object-cover mb-2 cursor-pointer rounded-md
            ${currentImageIndex === index ? 'border-2 border-red-800' : 'border-1 border-gray-400'}`}
            />
          )
        })
      }
    </div>
    <div className="relative">
      <span className="flex flex-col items-center">
      <RatingStars rating={maid.rating} size={"lg"}/></span>
      {/*category*/}
      <CategoryBadge category={maid.category} className={"top-0 left-0 mb-8"}/>
       {/* Charges*/}
       <span className="text-black absolute top-[150px]
       right-0 px-4 bg-white border-2 border-gray-400 rounded-l-full z-5" > 
       ₹ {maid.charges}/-</span>


      <img src={maid.imgUrl[currentImageIndex]}
      alt={maid.name}
      className="h-full w-[250px] md:w-[500px] md:h-[350px] object-cover mb-4 rounded-lg"/>
      
      </div>
   </div>
   <p className="text-center text-xl">
    This maid has {maid.experience} years of experience and charges {maid.charges} per hour.
   </p>
   <div className="w-[600px] mx-auto px-10 py-8 mt-8 bg-white shadow-lg text-black">
    <h2 className="text-3xl text-orange-500">
      Booking form</h2>
   </div>
    </div>
  )
}

export default HelperDetails
