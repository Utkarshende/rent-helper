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
	
	const id =searchParams.get("id");
	
	const initialMaid = MAIDS_CONFIG.find((m)=>m.id === parseInt(id)) || {
		id: parseInt(id), name: "Unknown", charges: 0, imgUrl: [], rating: 0, experience: 0, category: "Unknown", description: "Details not available."
	};
	const [currentMaid, setCurrentMaid] = useState(initialMaid);
	const maid = currentMaid; 

	const [bookingDetails, setBookingDetails]=useState({
		bookingDate:"",
		bookingTime:"",
		bookingDuration: 0, 
		userName:"",
		userEmail:"",
		userPhone:"",
		userAddress:"", 
		useridType:"",
		userIdNumber:"",
		couponCode:"",
		couponDiscount:0,
		totalAmount:0,
		helperCharges: currentMaid.charges,
		helperId: currentMaid.id, // Using helperId as the final identifier
	});
	
	const [durationError, setDurationError] = useState("");
	// Removed submissionMessage state as we are now using native alert()

	// State for managing the currently displayed image index of the selected helper
	const [currentImageIndex, setCurrentImageIndex]=useState(0);

	useEffect(()=>{
		// When the selected helper changes, update the booking charges and reset image index
		setBookingDetails(prevDetails => ({
			...prevDetails,
			helperCharges: currentMaid.charges,
			helperId: currentMaid.id,
		}));
	}, [currentMaid]);

	useEffect(()=>{
		const duration = parseFloat(bookingDetails.bookingDuration) || 0;
		const baseTotalAmount = duration * bookingDetails.helperCharges; 
		
		const couponConfig = COUPON_CODES[bookingDetails.couponCode];
		
		// Calculate discount (ensure it's an integer as charges are likely integers)
		const discount = Math.floor((baseTotalAmount / 100) * (couponConfig?.discount || 0 ));
		
		const finalTotalAmount = baseTotalAmount - discount;

		setBookingDetails((prevDetails)=>({
			...prevDetails,
			couponDiscount: discount,
			totalAmount: finalTotalAmount,
		}));
	},[
		bookingDetails.couponCode,
		bookingDetails.bookingDuration,
		bookingDetails.helperCharges 
	]);


	if (!maid || !maid.id) {
		return (
			<div>
				<Navbar/>
				{/* Content wrapper with necessary top padding */}
				<div className="pt-16">
					<Heading heading="Helper Not Found" className={"mt-4! mb-4!"}/>
					<p className="text-center text-xl">The helper ID was not found.</p>
				</div>
			</div>
		);
	}

	const handleDurationChange = (value) => {
		const numberValue = parseFloat(value);

		if (numberValue < 0) {
			setDurationError("Duration must be 0 or a positive number.");
			return;
		}
		
		setDurationError("");
		setBookingDetails({
			...bookingDetails,
			bookingDuration: value,
		});
	};

	const handleHelperSwitch = (helper) => {
		setCurrentMaid(helper);
		setCurrentImageIndex(0); // Reset image index when switching helper
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Basic validation check for core required fields
		if (!bookingDetails.bookingDate || !bookingDetails.bookingTime || bookingDetails.bookingDuration <= 0 || !bookingDetails.userName || !bookingDetails.userPhone) {
			// Using native alert for validation error as requested
			alert("ERROR: Please fill in the required booking details: Date, Time, Duration (must be > 0), Name, and Phone.");
			return;
		}

		// Using native alert for successful submission as requested
		const successMsg = `Success! Your booking with ${maid.name} has been scheduled for ${bookingDetails.bookingDate} at ${bookingDetails.bookingTime}. You will now be redirected to the home page.`;
		alert(successMsg);
		
		// Redirect immediately after user closes the alert
		window.location.href = '/'; 
	};
	
	return (
		<div>
			<Navbar/>
			
			{/* Content Wrapper: Added pt-16 to clear the fixed/sticky Navbar and pb-8 for general bottom spacing */}
			<div className="pt-16 pb-8">
				
				{/* Main Content Container: Centered, Responsive */}
				<div className="max-w-6xl mx-auto px-4 md:px-8">
				
					{/* Main Heading: Centered and spaced correctly */}
					<Heading 
						heading={`Book ${maid.name} - ${maid.category} Expert`} 
						className={"mt-4! mb-6! text-center"}
					/>
					
					{/* Helper Selection Thumbnail Strip (Gallery for switching helpers) */}
					<Heading 
						heading={`Explore Other Available Helpers`} 
						className={"mb-4! text-lg font-semibold"}
					/>
					<div className="mb-8 flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-xl shadow-inner">
						{
							MAIDS_CONFIG.map((helper)=>{
								return(
									<img
									key={helper.id}
									src={helper.imgUrl?.[0] || "https://placehold.co/80x80/cccccc/333333?text=N/A"}
									alt={helper.name}
									title={`View ${helper.name} (${helper.category})`}
									onClick={()=>handleHelperSwitch(helper)}
									className={`w-20 h-20 object-cover cursor-pointer rounded-xl transition duration-300
									shadow-lg 
									${helper.id === maid.id 
										? 'border-4 border-teal-500 scale-105' 
										: 'border-2 border-gray-300 opacity-80 hover:opacity-100'
									}`}
									/>
								)
							})
						}
					</div>

					{/* Helper Details Section (Image and Booking Form) - Two-column layout on desktop */}
					<div className="flex flex-col lg:flex-row lg:space-x-8">

						{/* Left Column: Image and Details */}
						<div className="lg:w-1/2 w-full mb-8 lg:mb-0">

							{/* Main Image Container */}
							<div className="relative w-full max-w-lg mx-auto">
								<div className="h-0 pb-[75%] relative w-full mb-4">
									<img 
										src={maid.imgUrl?.[currentImageIndex] || "https://placehold.co/600x450/cccccc/333333?text=Image+Not+Available"}
										alt={maid.name}
										className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-gray-200"
									/>
								</div>

								{/* Overlays */}
								<CategoryBadge category={maid.category} className={"absolute top-4 left-4"}/>
								<span className="text-white absolute top-4 right-4 px-4 py-1 bg-red-600 font-bold rounded-full shadow-lg" > 
									₹ {maid.charges}/-
								</span>
								<div className="absolute bottom-2 right-[-80px] transform -translate-x-1/2 bg-black/60 p-2 rounded-full shadow-xl">
									<RatingStars rating={maid.rating} size={"lg"}/>
								</div>
								
							</div>

							{/* Image Sub-Gallery */}
							{maid.imgUrl.length > 1 && (
								<div className="flex justify-center space-x-2 mt-4">
									{maid.imgUrl.map((url, index) => (
										<img
											key={index}
											src={url}
											onClick={() => setCurrentImageIndex(index)}
											alt={`Thumbnail ${index + 1}`}
											className={`w-16 h-16 object-cover rounded-md cursor-pointer transition duration-200 ${
												index === currentImageIndex ? 'border-4 border-teal-500' : 'border border-gray-300 opacity-70 hover:opacity-100'
											}`}
										/>
									))}
								</div>
							)}
							
							{/* Helper Summary */}
							<p className="text-center text-xl mt-6 font-medium text-gray-700 max-w-xl mx-auto">
								**{maid.name}** has **{maid.experience} years** of experience and specializes in **{maid.category}**.
							</p>
							<p className="text-center text-md mt-2 text-gray-500 max-w-xl mx-auto p-2 rounded-lg bg-gray-50 italic">
								"{maid.description}"
							</p>

						</div>

						{/* Right Column: Booking Form */}
						<div className="lg:w-1/2 w-full">
							<div className="w-full mx-auto px-10 py-8 bg-white border border-red-300 rounded-xl shadow-2xl text-black lg:mt-0 mt-8">
								<h2 className="text-3xl text-orange-500 font-extrabold mb-6 text-center">Book Helper: {maid.name}</h2>
								
								{/* Removed the custom submission message display */}
								
								<form onSubmit={handleSubmit} className="flex flex-col items-center">
									
									<Input type="date" 
										placeholder="Booking Date*"
										value={bookingDetails.bookingDate}
										onChange={(value)=>{
											setBookingDetails({...bookingDetails,bookingDate: value,})
										}}
										className=" mt-4 w-full border-gray-400 bg-black/50 text-white"
										required 
									/>
									<Input type="time"
										placeholder="Booking Time*"
										value={bookingDetails.bookingTime} 
										onChange={(value)=>{
											setBookingDetails({
												...bookingDetails,
												bookingTime: value,
											})
										}}
										className=" mt-4 w-full border-gray-400 bg-black/50 text-white"
										required 
									/>
									<Input type="number"
										placeholder="Booking Duration (in hours)*"
										value={bookingDetails.bookingDuration} 	
										onChange={handleDurationChange}
										className=" mt-4 w-full border-gray-400"
										min="1"
										required 
									/>
									{durationError && (
										<p className="text-red-500 text-sm w-full mt-1 px-4">
											{durationError}
										</p>
									)}
									<Input type="text"
										placeholder="Your Name*"
										value={bookingDetails.userName}
										onChange={(value)=>{
											setBookingDetails({
												...bookingDetails, userName:value})
										}}
										className=" w-full border-gray-400"
										required 
									/>
									<Input type="email"
										placeholder="Your Email"
										value={bookingDetails.userEmail} 	
										onChange={(value)=>{
											setBookingDetails({
												...bookingDetails, userEmail:value})
											} }
										className=" w-full border-gray-400"
									/>
									
									{/* Price Summary */}
									<div className="text-xl mt-4 p-4 w-full bg-red-100 rounded-lg border border-red-300">
										<p className="text-gray-700"> 
											Total Base Amount: <span className="float-right font-semibold">₹{(bookingDetails.totalAmount + bookingDetails.couponDiscount).toFixed(2)}</span>
										</p>
										{bookingDetails.couponDiscount > 0 && (
											<p className="text-green-700 border-t border-red-200 pt-2 mt-2">
												Discount ({bookingDetails.couponCode}): <span className="float-right font-semibold">- ₹{bookingDetails.couponDiscount.toFixed(2)}</span>
											</p>
										)}
										<p className="font-bold text-2xl text-red-700 border-t border-red-400 pt-3 mt-3">
											Payable Amount: <span className="float-right">₹{bookingDetails.totalAmount.toFixed(2)}</span>
										</p>
										<input type="hidden" name="helperId" value={maid.id} />
									</div>
									
									<Input type="text"
										placeholder="Coupon Code (if any)"
										value={bookingDetails.couponCode}
										onChange={(value)=>{
											setBookingDetails({...bookingDetails,
												couponCode: value.toUpperCase(),
											});
										}}
										className=" w-full mt-4 border-gray-400"
									/>
									<Input type="tel" 
										placeholder="Your Phone Number*"
										value={bookingDetails.userPhone} 	
										onChange={(value)=>{
											setBookingDetails({
												...bookingDetails, userPhone:value})
										}}
										className=" w-full border-gray-400"
										required
									/>
									<Input type="text"
										placeholder="Your Address"
										value={bookingDetails.userAddress} 	
										onChange={(value)=>{ 	 	
											setBookingDetails({
												...bookingDetails, userAddress:value})
										}}
										className=" w-full border-gray-400" 	 	
									/>
									<Input type="text"
										placeholder="ID Type (e.g., Aadhar, Passport)"
										value={bookingDetails.userIdType}
										onChange={(value)=>{
											setBookingDetails({
												...bookingDetails, userIdType:value})
										}}
										className=" w-full border-gray-400"
									/>
									<Input type="text"
										placeholder="ID Number"
										value={bookingDetails.userIdNumber}
										onChange={(value)=>{
											setBookingDetails({
												...bookingDetails, userIdNumber:value})
										}}
										className=" w-full border-gray-400"
									/>
									<button type="submit" 
										className="bg-teal-500 hover:bg-teal-600 text-white text-2xl font-semibold mt-8 p-3 w-64 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
									>
										Book Now
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HelperDetails
