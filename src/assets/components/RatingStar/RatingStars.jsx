import React from 'react'

const StarIcon = ({sizeClass, colorClass}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`${sizeClass} ${colorClass} inline-block`}
        fill="currentColor" 
        viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const RatingStars = ({rating, size="md"}) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const emptyStars = totalStars - filledStars;

    let starSizeClass;
    switch (size) {
        case "sm":
            starSizeClass = "h-3 w-3";
            break;
        case "lg":
            starSizeClass = "h-8 w-8";
            break;
        default:
            starSizeClass = "h-5 w-5";
    }

    return(
        <span className="inline-flex items-center space-x-0.5">
            {[...Array(filledStars)].map((_, index) => (
                <StarIcon key={`filled-${index}`} sizeClass={starSizeClass} colorClass="text-yellow-400" />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <StarIcon key={`empty-${index}`} sizeClass={starSizeClass} colorClass="text-gray-300 opacity-60" />
            ))}
        </span>
    );
};

export default RatingStars;