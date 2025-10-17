import {BrushCleaning,PawPrint,Cross,Baby,CookingPot,Armchair,Trash} from "lucide-react";



const CATEGORY_STYLE = {
    "Cleaning": {icon:<BrushCleaning className="text-white inline-block h-[16px] w-[16px] bg-emerald-400"/>},
    "Pet Care":{icon:<PawPrint className="text-white inline-block h-[16px] w-[16px] bg-blue-500"/>} ,
    "Elderly Care":{icon:<Cross className="text-white inline-block h-[16px] w-[16px] bg-amber-400"/>} , 
    "Babysitting": {icon:<Baby className="text-white inline-block h-[16px] w-[16px] bg-fuchsia-700"/>},
    "Housekeeping": {icon:<Trash className="text-white inline-block h-[16px] w-[16px] bg-red-600"/>},
    "Cooking": {icon:<CookingPot className="text-white inline-block h-[16px] w-[16px]"/>},
    "Furniture Assembly":{icon:<Armchair className="text-white inline-block h-[16px] w-[16px]"/>} 
};

function maidCard({id,name,experience,category,rating,imgUrl}) {

const styleObj=CATEGORY_STYLE[category] || {};

  return (
    <div className='bg-white w-[350px] m-4 px-6 py-6 rounded-md relative' key={id}>
       <span className={`${styleObj?.bgColor} bg-black text-white rounded-full p-2 
       text-sm absolute top-4 right-4 flex items-center`}>
    {styleObj?.icon}
    <span className="ml-2">{category}</span>
       </span>
       <span>{}</span>
        <img src="https://www.flaticon.com/free-icon/mother_10032075?term=maid&page=1&position=64&origin=search&related_id=10032075"
        alt={name}
        className='w-full h-48 object-contain'/>
        <h2 className='text-lg md:text-xl font-semibold text-slate-600'>{name}</h2>
        <p className='text-md text-slate-500'>{experience}</p>
    </div>
  )
}

export default maidCard
