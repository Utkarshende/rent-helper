import RatingStars from "./RatingStars";
import { useState } from "react";
import { Link } from "react-router"; 
import {MoveRight, MoveLeft} from "lucide-react";
import {CategoryBadge,CATEGORY_CONFIG} from "../components/CategoryBadge.jsx";


function MaidCard({id,name,experience,charges,category,rating,imgUrl,description}) {
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
        <div className='bg-white w-[350px] m-4 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:shadow-teal-400/50 hover:scale-[1.02]' key={id}>
                <div className="relative h-56 group">
                <img 
                    src={imgUrl[slideIndex]}
                    alt={name}
                    className='w-full h-full object-cover transition duration-500'/>
                <CategoryBadge category={category} className="absolute"/> 
                <span className="text-white absolute bottom-0 right-0 px-4 py-1 bg-teal-600 font-bold rounded-tl-xl text-lg shadow-md z-10" > 
                    ₹ {charges}/hr
                </span>
                {imgUrl.length > 1 && (
                    <div>
                        <button 
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-20" 
                            onClick={showPrevImg}
                            aria-label="Previous image">
                            <MoveLeft className="h-5 w-5"/>
                        </button>
                        <button 
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-20" 
                            onClick={showNextImg}
                            aria-label="Next image">              
                          <MoveRight className="h-5 w-5"/>
                        </button>
                    </div>
                )}
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                    <h2 className='text-2xl font-bold text-gray-800'>{name}</h2>
                    <div className="flex items-center space-x-1 p-1 bg-teal-50 rounded-full border border-teal-200">
                        <RatingStars rating={rating}/>
                        <span className="text-xs font-semibold text-gray-700">({rating})</span>
                    </div>
                </div>
                <p className='text-base text-teal-600 font-medium mb-1'>Experience: {experience} years</p>
                     <Link 
                    className="bg-teal-500 text-white font-semibold block text-center rounded-lg py-3 hover:bg-teal-600 
                    transition duration-300 ease-in-out shadow-lg hover:shadow-teal-500/50" 
                    to={`/maid-details?id=${id}`}>
                    View Details & Book
                </Link>
            </div>
        </div>
    )
}

export default MaidCard
