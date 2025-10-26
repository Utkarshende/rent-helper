import {BrushCleaning,PawPrint,Cross,Baby,CookingPot,Armchair,Trash,MoveRight,MoveLeft} from "lucide-react";


const CATEGORY_STYLE = {
    "Cleaning": {icon:<BrushCleaning className="text-white inline-block h-[16px] w-[16px]"/>, bgColor:"bg-green-600"} ,
    "Pet Care":{icon:<PawPrint className="text-white inline-block h-[16px] w-[16px]"/>,bgColor:"bg-blue-600"} ,
    "Elderly Care":{icon:<Cross className="text-white inline-block h-[16px] w-[16px]"/>, bgColor:"bg-purple-600"} , 
    "Babysitting": {icon:<Baby className="text-white inline-block h-[16px] w-[16px] "/>,  bgColor:"bg-pink-600"} ,
    "Housekeeping": {icon:<Trash className="text-white inline-block h-[16px] w-[16px]"/>, bgColor:"bg-yellow-600"} ,
    "Cooking": {icon:<CookingPot className="text-white inline-block h-[16px] w-[16px]"/>, bgColor:"bg-red-600"} ,
    "Furniture Assembly":{icon:<Armchair className="text-white inline-block h-[16px] w-[16px]"/>, bgColor:"bg-indigo-600"} ,
};

function CategoryBadge({category, className}) {
    const styleObj=CATEGORY_STYLE[category] || {};
  return (
     <span className={`${styleObj.bgColor}flex items-center z-5 rounded-full text-white absolute top-4 left-6
     ${className}`}>
    {styleObj?.icon}
   <span className="ml-2">{category}</span>
     {""} Category
    </span>
  )
}

export {CategoryBadge ,CATEGORY_STYLE};