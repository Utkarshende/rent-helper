import Navbar from '../components/Navbar.jsx'
import imgExploreMainHeader from '../../assets/cleaner.png'
import Heading from '../components/Heading.jsx'
import { MAIDS_CONFIG } from '../../config/maids.jsx'
import MaidCard from '../components/maidCard.jsx'

function AllMaid() {
  return (
    <div>
      <Navbar/>
      <img src={imgExploreMainHeader}
      alt="Explore Maid"
      className='w-full h-[200px] md:h-[300px] object-contain my-4'/>
<Heading heading={"This is All Maid Page."}/>
      <p className='text-center text-lg md:text-xl px-4 md:px-8 mt-4'>
        Welcome to the Explore Maids page! Here, you can find a wide range of
        professional maids ready to assist you with your cleaning needs.
        Our maids are well trained and experienced in
        providing top-notch cleaning services. Whether you need regular housekeeping,
        deep cleaning, or specialized services, our maids are here to help.
      </p>
      <div className='flex flex-wrap justify-center mt-8'>
          {MAIDS_CONFIG.map((maidData)=>{
            const {id,name,experience,charges,category,rating,imgUrl}=maidData;
return(<MaidCard 
key={id}
id={id}
name={name}
experience={experience}
charges={charges}
category={category}
rating={rating}
imgUrl={imgUrl}
/> ) })}
      </div>
    </div>
  )
}

export default AllMaid
