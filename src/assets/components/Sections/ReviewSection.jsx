import Heading from '../Layout/Heading.jsx'
import { REVIEWS_CONFIG } from '../../../config/common.jsx'
import ReviewCard from '../Cards/ReviewCard.jsx' 

function ReviewSection() {
    return (
        <div className='py-12 bg-white'>
            <Heading heading={"What Our Customers Say"} className={"mb-8"}/>
            <div className='flex flex-wrap justify-center max-w-7xl mx-auto px-4'>
                {REVIEWS_CONFIG.map((reviewObj) => (
                    <ReviewCard
                        key={reviewObj.name}
                        name={reviewObj.name}
                        review={reviewObj.review}
                        rating={reviewObj.rating}
                        avatar={reviewObj.avatar}
                    />
                ))}
            </div>
        </div>
    );
}

export default ReviewSection;