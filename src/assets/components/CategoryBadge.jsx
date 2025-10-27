import {BrushCleaning,PawPrint,Cross,Baby,CookingPot,Armchair,Trash,Car,Package,Tractor,Briefcase} from "lucide-react";

const CATEGORY_CONFIG = {
    "Cleaning": {icon:BrushCleaning, bgColor:"bg-green-600"} ,
    "Pet Care":{icon:PawPrint, bgColor:"bg-blue-600"} ,
    "Elderly Care":{icon:Cross, bgColor:"bg-purple-600"} , 
    "Babysitting": {icon:Baby, bgColor:"bg-pink-600"} ,
    "Housekeeping": {icon:Trash, bgColor:"bg-yellow-600"} ,
    "Cooking": {icon:CookingPot, bgColor:"bg-red-600"} ,
    "Furniture Assembly":{icon:Armchair, bgColor:"bg-indigo-600"} ,
    "Driving": {icon:Car, bgColor:"bg-gray-700"} ,

    "Gardening": {icon:Tractor, bgColor:"bg-lime-600"},
    "Personal Assistant": {icon:Briefcase, bgColor:"bg-orange-500"} ,
};

function CategoryBadge({category, className}) {
    const config = CATEGORY_CONFIG[category] || {};
    const IconComponent = config.icon;

    return (
        <span className={`${config.bgColor} flex items-center z-5 rounded-full text-white px-3 py-1 text-sm font-medium absolute top-4 left-6 ${className}`}>
            {IconComponent && <IconComponent className="h-4 w-4 mr-2 inline-block"/>}
            {category} Category
        </span>
    );
}

export {CategoryBadge ,CATEGORY_CONFIG};
