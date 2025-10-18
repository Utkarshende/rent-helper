const  RatingStars=({rating})=>{
  const totalStars=5;
  const filledStars=Math.floor(rating);
  const emptyStars=totalStars-filledStars;
  return(
    <span className="inline-block items-center">
      {[...Array(filledStars)].map((_,index)=>(
        <svg
         key={index} 
         xmlns="http://www.w3.org/2000/svg" 
         className="h-4 w-4 text-yellow-400 inline-block" 
         fill="currentColor" 
         viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_,index)=>(
        <svg key={index}
         xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-300 inline-block" 
          fill="currentColor"
          viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
};
export default RatingStars;