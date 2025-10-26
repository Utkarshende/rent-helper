const  RatingStars=({rating, size})=>{
  const totalStars=5;
  const filledStars=Math.floor(rating);
  const emptyStars=totalStars-filledStars;

  let  starSize;
if (size==="sm"){
  starSize="h-3 w-3";
} else if (size==="lg"){
  starSize="h-8 w-8";
}
else{
  starSize="h-5 w-5";
}

  return(
    <span className="inline-block items-center ">
      {[...Array(filledStars)].map((_,index)=>(
        <svg
         key={index} 
         xmlns="http://www.w3.org/2000/svg" 
         className={`${starSize} text-yellow-400 inline-block`}
         fill="currentColor" 
         viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_,index)=>(
        <svg key={index}
         xmlns="http://www.w3.org/2000/svg"
          className={` ${starSize} text-gray-300 inline-block`}
          fill="currentColor"
          viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
};
export default RatingStars;