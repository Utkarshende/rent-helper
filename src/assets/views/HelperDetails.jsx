import {useSearchParams} from "react-router"
import Navbar from "../components/Navbar.jsx"
import Heading from "../components/Heading.jsx"
import {MAIDS_CONFIG} from "../../config/maids.jsx"
import { useEffect, useState } from "react";
import RatingStars from "../components/RatingStars.jsx";
import { CategoryBadge } from "../components/CategoryBadge.jsx";
import Input from "../components/input.jsx";
import { COUPON_CODES } from "../../config/common.jsx";

function HelperDetails() {
  const [searchParams]=useSearchParams();
  const [bookingDetails, setBookingDetails]=useState({
    maidId:searchParams.get("id"),
    bookingDate:"",
    bookingTime:"",
    bookingDuration:"",
    userName:"",
    userEmail:"",
    userPhone:"",
    userAddess:"",
    useridType:"",
    userIdNumber:"",
    couponCode:"",
    couponDiscount:"",
    couponDescription:"",
    totalAmount:0,});

  const id =searchParams.get("id");
  const maid = MAIDS_CONFIG.find((maid)=>maid.id === parseInt(id));

    useEffect(()=>{
    const couponConfig=COUPON_CODES[bookingDetails.couponCode];
const discount=Math.floor((bookingDetails.totalAmount / 100) * (couponConfig ?.discount || 0 ));
const totalAmount=bookingDetails.bookingDuration * maid.charges;
setBookingDetails((prevDetails)=>({
  ...prevDetails,
  couponDiscount:discount,
  couponDescription:couponConfig?.description || "",
  totalAmount: discount > 0 ? totalAmount - discount : totalAmount,
}));
    },[
      bookingDetails.couponCode,
      bookingDetails.bookingDuration,
      bookingDetails.totalAmount
]);


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
      onClick={()=>{
        console.log(bookingDetails)
      }}
      className="h-full w-[250px] md:w-[500px] md:h-[350px] object-cover mb-4 rounded-lg"/>
      
      </div>
   </div>
   <p className="text-center text-xl">
    This maid has {maid.experience} years of experience and charges {maid.charges} per hour.
   </p>
   <div className="w-[600px] mx-auto px-10 py-8 mt-8 bg-red-300 shadow-lg text-black">
    <h2 className="text-3xl text-orange-500 ">Booking form</h2>
    <form name="maid-booking" method="POST" data-netlify="true">
    <Input type="date" 
    placeholder="Booking Date"
    value={bookingDetails.bookingDate}
    onChange={(value)=>{
      setBookingDetails({...bookingDetails,bookingDate: value,})
    }}
     className=" mt-4"
    />
 <Input type="time"
 placeholder="Booking Time"
 value={bookingDetails.bookingTime} 
  onChange={(value)=>{
    setBookingDetails({
      ...bookingDetails,
      bookingTime: value,
    })
  }}
  className=" mt-4"
/>
  <Input type="number"
  placeholder="Booking Duration (in hours)"
  value={bookingDetails.bookingDuration}  
  onChange={(value)=>{
    const duration = value;
    const totalAmount = duration * maid.charges;        
    setBookingDetails({
      ...bookingDetails,
      bookingDuration: duration,
      totalAmount: totalAmount,
      couponDiscount:0,
      couponDescription:""
    });
  }}
  className=" mt-4"
/>
<Input type="text"
placeholder="Your Name"
value={bookingDetails.userName}
onChange={(value)=>{
  setBookingDetails({
    ...bookingDetails, userName:value})
}}
className=""
/>
<Input type="email"
placeholder="Your Email"
value={bookingDetails.userEmail}  
onChange={(value)=>{
  setBookingDetails({
    ...bookingDetails, userEmail:value})
} }
className=""
/>
<Input type="number"
placeholder="Booking Duration (in hours)"
value={bookingDetails.totalAmount}  
onChange={(value)=>{
  setBookingDetails({
    ...bookingDetails, totalAmount:value})
}}
className=""
/>
<div className="text-xl mt-4 px-4">
 <p> 
  Total Amount = ₹ {""}
  {bookingDetails.totalAmount + bookingDetails.couponDiscount}{""}
</p>
{bookingDetails.couponDiscount > 0 ?(
<p>
  Applied Coupon : {bookingDetails.couponCode} - {""}
{bookingDetails.couponDescription}
</p> ): null}
  <p>
    Payable Amount :₹{""}
    {bookingDetails.totalAmount}
</p>
</div>
<Input type="text"
placeholder="Coupon Code (if any)"
value={bookingDetails.couponCode}
onChange={(value)=>{
  
  setBookingDetails({...bookingDetails,couponCode: value.toUppercase(),
  });
}}
className=""
/>
<Input type="tel" 
placeholder="Your Phone Number"
value={bookingDetails.userPhone}  
onChange={(value)=>{
  setBookingDetails({
    ...bookingDetails, userPhone:value})
  }}
className=""
/>
<Input type="text"
placeholder="Your Address"
value={bookingDetails.userAddress}  
onChange={(value)=>{    
  setBookingDetails({
    ...bookingDetails, userAddress:value})
}}
className=""    
/>
<Input type="text"
placeholder="ID Type (e.g., Aadhar, Passport)"
value={bookingDetails.userIdType}
onChange={(value)=>{
  setBookingDetails({
    ...bookingDetails, userIdType:value})
}}
className=""
/>
<Input type="text"  
placeholder="ID Number"
value={bookingDetails.userIdNumber}
onChange={(value)=>{
  setBookingDetails({
    ...bookingDetails, userIdNumber:value})
}}
className=""
/>
<button type="submit" className="bg-orange-500 text-2xl text-black m-auto p-2  ">
  Book Now</button>
  </form>
    </div>
    </div>
    
  );
}

export default HelperDetails
