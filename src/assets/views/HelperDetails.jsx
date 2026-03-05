import {useSearchParams} from "react-router"
import Navbar from "../components/Layout/Navbar.jsx"
import Heading from "../components/Layout/Heading.jsx"
import RatingStars from "../components/RatingStar/RatingStars.jsx";
import { CategoryBadge } from "../components/Badge/CategoryBadge.jsx";
import Input from "../components/Input/input.jsx";
import { MAIDS_CONFIG } from "../../config/maids.jsx"
import { COUPON_CODES } from "../../config/common.jsx"
import { useState,useEffect } from "react";

function HelperDetails() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    
    const initialMaid = MAIDS_CONFIG.find((m) => m.id === parseInt(id)) || {
        id: parseInt(id), name: "Unknown Helper", charges: 0, imgUrl: [], rating: 0, experience: 0, category: "Unknown", description: "Details for this helper are not available."
    };
    const [currentMaid, setCurrentMaid] = useState(initialMaid);
    const maid = currentMaid; 

    const [bookingDetails, setBookingDetails] = useState({
        bookingDate: "",
        bookingTime: "",
        bookingDuration: "", 
        userName: "",
        userEmail: "",
        userPhone: "",
        userAddress: "", 
        useridType: "",
        userIdNumber: "",
        couponCode: "",
        couponDiscount: 0,
        totalAmount: 0,
        helperCharges: initialMaid.charges,
        helperId: initialMaid.id,
    });
    
    const [durationError, setDurationError] = useState("");
    const [couponMessage, setCouponMessage] = useState("");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setBookingDetails(prevDetails => ({
            ...prevDetails,
            helperCharges: currentMaid.charges,
            helperId: currentMaid.id,
        }));
    }, [currentMaid]);

    useEffect(() => {
        const duration = parseFloat(bookingDetails.bookingDuration) || 0;
        const baseTotalAmount = duration * bookingDetails.helperCharges; 
        
        let discount = 0;
        const coupon = bookingDetails.couponCode.toUpperCase();
        const couponConfig = COUPON_CODES[coupon];
        
        if (couponConfig) {
            discount = (baseTotalAmount * couponConfig.discount) / 100;
            if (coupon === 'FAMILY50' && discount > 500) {
                discount = 500;
            }
            setCouponMessage(`Coupon ${coupon} applied: ${couponConfig.discount}% off!`);
        } else if (bookingDetails.couponCode) {
            setCouponMessage("Invalid Coupon Code.");
        } else {
            setCouponMessage("");
        }

        const finalTotalAmount = Math.max(0, baseTotalAmount - discount);

        setBookingDetails((prevDetails) => ({
            ...prevDetails,
            couponDiscount: discount,
            totalAmount: finalTotalAmount,
        }));
    }, [
        bookingDetails.couponCode,
        bookingDetails.bookingDuration,
        bookingDetails.helperCharges
    ]);

    if (!maid || !maid.id || maid.name === "Unknown Helper") {
        return (
            <div>
                <Navbar/>
                <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-gray-50">
                    <Heading heading="Helper Not Found" className={"text-red-500"}/>
                    <p className="text-center text-xl mt-4 text-gray-600">The helper ID was not found or is invalid.</p>
                </div>
            </div>
        );
    }

    const handleDurationChange = (value) => {
        const numberValue = parseFloat(value);
        const durationString = value;

        if (durationString === "" || numberValue < 0) {
            setDurationError("Duration must be a positive number of hours (e.g., 2, 3.5).");
            setBookingDetails({
                ...bookingDetails,
                bookingDuration: durationString,
            });
            return;
        }
        
        setDurationError("");
        setBookingDetails({
            ...bookingDetails,
            bookingDuration: durationString,
        });
    };

    const handleHelperSwitch = (helper) => {
        setCurrentMaid(helper);
        setCurrentImageIndex(0); 
    };

    const handleInputChange = (key, value) => {
        setBookingDetails(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bookingDetails.bookingDate || !bookingDetails.bookingTime || !(parseFloat(bookingDetails.bookingDuration) > 0) || !bookingDetails.userName || !bookingDetails.userPhone) {
            alert("ERROR: Please ensure Date, Time, Duration (> 0), Name, and Phone are filled out correctly.");
            return;
        }
        const successMsg = `Success! Your booking with ${maid.name} has been confirmed for ${bookingDetails.bookingDate} at ${bookingDetails.bookingTime} for ${bookingDetails.bookingDuration} hours. Total amount: ₹${bookingDetails.totalAmount.toFixed(2)}. You will now be redirected to the home page.`;
        alert(successMsg);
        window.location.href = '/'; 
    };
    
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar/>
            <div className="pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <Heading 
                        heading={`Book ${maid.name} - ${maid.category} Expert`} 
                        className={"mb-8 text-center text-teal-600"}
                    />

                    <h2 className={"text-2xl font-semibold text-gray-700 mb-4"}>Explore Other Available Helpers</h2>
                    <div className="mb-10 flex flex-wrap justify-center gap-4 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                        {
                            MAIDS_CONFIG.map((helper) => (
                                <img
                                    key={helper.id}
                                    src={helper.imgUrl?.[0] || "https://placehold.co/80x80/cccccc/333333?text=N/A"}
                                    alt={helper.name}
                                    title={`View ${helper.name} (${helper.category})`}
                                    onClick={() => handleHelperSwitch(helper)}
                                    className={`w-20 h-20 object-cover cursor-pointer rounded-xl transition duration-300
                                    shadow-md 
                                    ${helper.id === maid.id 
                                        ? 'border-4 border-teal-500 scale-105' 
                                        : 'border-2 border-gray-300 opacity-80 hover:opacity-100'
                                    }`}/>
                            ))
                        }
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                            <div className="relative w-full max-w-xl mx-auto">
                                <div className="h-0 pb-[75%] relative w-full mb-4">
                                    <img 
                                        src={maid.imgUrl?.[currentImageIndex] || "https://placehold.co/600x450/cccccc/333333?text=Image+Not+Available"}
                                        alt={maid.name}
                                        className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                                    />
                                </div>
                                <CategoryBadge category={maid.category} className={"absolute top-4 left-4"}/>
                                <span className="text-white absolute top-4 right-4 px-4 py-1 bg-red-600 font-bold rounded-full shadow-lg" > 
                                    ₹ {maid.charges}/hr
                                </span>
                                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-black/70 p-3 rounded-full shadow-xl">
                                    <RatingStars rating={maid.rating} size={"lg"}/>
                                </div>
                            </div>

                            {maid.imgUrl.length > 1 && (
                                <div className="flex justify-center space-x-2 mt-10">
                                    {maid.imgUrl.map((url, index) => (
                                        <img
                                            key={index}
                                            src={url}
                                            onClick={() => setCurrentImageIndex(index)}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`w-16 h-16 object-cover rounded-md cursor-pointer transition duration-200 ${
                                                index === currentImageIndex ? 'border-4 border-teal-500' : 'border border-gray-300 opacity-70 hover:opacity-100'
                                            }`}/>
                                    ))}
                                </div>
                            )}
                            
                            <div className="mt-8 text-center max-w-xl mx-auto">
                                <p className="text-xl font-medium text-gray-700">
                                    **{maid.name}** has **{maid.experience} years** of experience and specializes in **{maid.category}**.
                                </p>
                                <p className="text-md mt-4 text-gray-500 p-4 rounded-lg bg-white shadow-inner italic border-l-4 border-teal-500">
                                    "{maid.description}"
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="w-full mx-auto p-10 bg-white border border-orange-300 rounded-xl shadow-2xl text-gray-800">
                                <h2 className="text-3xl text-orange-600 font-extrabold mb-8 text-center border-b pb-3 border-orange-100">Booking Form</h2>
                                
                                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                                    
                                    <Input 
                                        type="date" 
                                        placeholder="Booking Date*"
                                        value={bookingDetails.bookingDate}
                                        onChange={(value) => handleInputChange("bookingDate", value)}
                                        className="w-full border-gray-300 text-gray-700"
                                        required 
                                    />
                                    <Input 
                                        type="time"
                                        placeholder="Booking Time*"
                                        value={bookingDetails.bookingTime} 
                                        onChange={(value) => handleInputChange("bookingTime", value)}
                                        className="w-full border-gray-300 text-gray-700"
                                        required 
                                    />
                                    <Input 
                                        type="number"
                                        placeholder="Booking Duration (in hours)*"
                                        value={bookingDetails.bookingDuration}  
                                        onChange={handleDurationChange}
                                        className="w-full border-gray-300"
                                        min="1"
                                        required 
                                    />
                                    {durationError && (
                                        <p className="text-red-500 text-sm w-full mt-1 px-4 text-left">
                                            {durationError}
                                        </p>
                                    )}
                                    
                                    <Input 
                                        type="text"
                                        placeholder="Your Name*"
                                        value={bookingDetails.userName}
                                        onChange={(value) => handleInputChange("userName", value)}
                                        className="w-full border-gray-300"
                                        required 
                                    />
                                    <Input 
                                        type="tel" 
                                        placeholder="Your Phone Number*"
                                        value={bookingDetails.userPhone}    
                                        onChange={(value) => handleInputChange("userPhone", value)}
                                        className="w-full border-gray-300"
                                        required
                                    />
                                    
                                    <Input 
                                        type="text"
                                        placeholder="Coupon Code (if any)"
                                        value={bookingDetails.couponCode}
                                        onChange={(value) => handleInputChange("couponCode", value.toUpperCase())}
                                        className="w-full border-gray-300"
                                    />
                                    {couponMessage && (
                                        <p className={`text-sm w-full px-4 text-left ${couponMessage.startsWith('Invalid') ? 'text-red-500' : 'text-green-600'}`}>
                                            {couponMessage}
                                        </p>
                                    )}

                                    <div className="text-xl p-4 w-full bg-red-50 rounded-lg border border-red-300 mt-6">
                                        <p className="text-gray-700 flex justify-between"> 
                                            <span>Base Charge ({parseFloat(bookingDetails.bookingDuration) || 0} hrs @ ₹{maid.charges}/hr):</span>
                                            <span className="font-semibold">₹{(bookingDetails.totalAmount + bookingDetails.couponDiscount).toFixed(2)}</span>
                                        </p>
                                        {bookingDetails.couponDiscount > 0 && (
                                            <p className="text-green-700 border-t border-red-200 pt-2 mt-2 flex justify-between">
                                                <span>Discount ({bookingDetails.couponCode}):</span> 
                                                <span className="font-semibold">- ₹{bookingDetails.couponDiscount.toFixed(2)}</span>
                                            </p>
                                        )}
                                        <p className="font-bold text-2xl text-red-700 border-t-2 border-red-400 pt-3 mt-3 flex justify-between">
                                            <span>Payable Amount:</span>
                                            <span className="text-3xl">₹{bookingDetails.totalAmount.toFixed(2)}</span>
                                        </p>
                                        <input type="hidden" name="helperId" value={maid.id} />
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        className="bg-teal-600 hover:bg-teal-700 text-white text-2xl font-semibold mt-8 p-3 w-64 
                                        rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                                        Confirm Booking
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

export default HelperDetails;