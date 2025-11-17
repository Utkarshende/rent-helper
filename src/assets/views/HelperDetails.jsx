import React, { useState, useEffect } from 'react';
// We must import the necessary tools from react-router-dom
import { useSearchParams, Link } from 'react-router';
// Icons for the helper details page
import { Star, Clock, Briefcase, Phone, Mail, MapPin, X, CheckCircle, AlertTriangle ,DollarSign} from 'lucide-react';

// --- MOCK CONFIGURATION DATA (MAIDS_CONFIG & COUPON_CODES) ---

const MAIDS_CONFIG = [
    {
        id: 1,
        name: "Priya Sharma",
        charges: 450, // per hour
        imgUrl: [
            "https://placehold.co/600x450/34d399/ffffff?text=Priya%201",
            "https://placehold.co/600x450/22c55e/ffffff?text=Priya%202",
        ],
        rating: 4.9,
        experience: 8,
        category: "Deep Cleaning Expert",
        description: "A meticulous and highly experienced helper specializing in sanitizing homes and tackling heavy-duty cleaning projects. Highly recommended for end-of-lease cleans."
    },
    {
        id: 2,
        name: "Arjun Singh",
        charges: 320,
        imgUrl: [
            "https://placehold.co/600x450/60a5fa/ffffff?text=Arjun%201",
            "https://placehold.co/600x450/3b82f6/ffffff?text=Arjun%202",
            "https://placehold.co/600x450/1d4ed8/ffffff?text=Arjun%203",
        ],
        rating: 4.2,
        experience: 3,
        category: "Standard Housekeeping",
        description: "Reliable and punctual, providing daily or weekly basic housekeeping services. Excellent for routine maintenance and organizing small spaces."
    },
    {
        id: 3,
        name: "Neha Patel",
        charges: 580,
        imgUrl: [
            "https://placehold.co/600x450/f97316/ffffff?text=Neha%201",
        ],
        rating: 5.0,
        experience: 12,
        category: "Premium Executive Service",
        description: "The top tier of home assistance. Neha manages everything from complex laundry and wardrobe management to executive event prep and high-end surface care."
    },
];

const COUPON_CODES = {
    'NEWUSER20': { discount: 20, max_discount: 1000 },
    'FAMILY50': { discount: 50, max_discount: 500 }, // Max discount capped at 500
};

// --- MOCK UI COMPONENTS ---

const Heading = ({ heading, className = "" }) => (
    <h1 className={`text-4xl font-extrabold text-gray-800 ${className}`}>{heading}</h1>
);

const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-extrabold text-teal-700">MaidRental.io</Link>
            <div className="space-x-4">
                <Link to="/" className="text-gray-600 hover:text-teal-600 font-medium">Home</Link>
                {/* Link uses a default ID to ensure the details page loads */}
                <Link to="/details?id=1" className="bg-teal-600 text-white px-4 py-1.5 rounded-full hover:bg-teal-700 transition">Book Helper</Link>
            </div>
        </div>
    </nav>
);

const RatingStars = ({ rating, size = "md" }) => {
    const starCount = 5;
    const filledStars = Math.round(rating);
    const starSizeClass = size === "lg" ? "w-6 h-6" : "w-4 h-4";

    return (
        <div className="flex items-center space-x-0.5">
            {[...Array(starCount)].map((_, i) => (
                <Star
                    key={i}
                    className={`${starSizeClass} ${
                        i < filledStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                />
            ))}
            <span className={`ml-2 text-white font-semibold ${size === "lg" ? "text-xl" : "text-base"}`}>
                {rating.toFixed(1)}
            </span>
        </div>
    );
};

const CategoryBadge = ({ category, className = "" }) => (
    <span className={`inline-flex items-center px-4 py-1 text-sm font-semibold rounded-full shadow-md text-teal-800 bg-teal-200/90 backdrop-blur-sm ${className}`}>
        <Briefcase className="w-4 h-4 mr-2"/>
        {category}
    </span>
);

const Input = ({ type, placeholder, value, onChange, className, required, min }) => {
    // Standard input handles all types except date and time, which use default styling
    const inputClasses = `p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ${className}`;

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={inputClasses}
            required={required}
            min={min}
        />
    );
};

// Custom Modal component to replace alert()
const MessageModal = ({ message, onClose }) => {
    if (!message) return null;

    const Icon = message.type === 'success' ? CheckCircle : AlertTriangle;
    const colorClass = message.type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const textColorClass = message.type === 'success' ? 'text-green-800' : 'text-red-800';
    const borderColorClass = message.type === 'success' ? 'border-green-600' : 'border-red-600';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`bg-white rounded-xl shadow-2xl p-6 w-full max-w-md transform transition-all duration-300 border-t-8 ${borderColorClass}`}>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                        <Icon className={`w-8 h-8 mr-3 text-white p-1 rounded-full ${colorClass}`} />
                        <h3 className={`text-xl font-bold ${textColorClass}`}>
                            {message.type === 'success' ? 'Booking Confirmed' : 'Action Required'}
                        </h3>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <p className="text-gray-700 mb-6">{message.text}</p>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className={`px-6 py-2 rounded-lg font-semibold text-white transition ${colorClass} hover:opacity-90`}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- USER'S CORE COMPONENT (Renamed for clarity in routing) ---

function HelperDetails() {
    const [searchParams] = useSearchParams();
    // Default to '1' if id is missing to ensure the page loads initially
    const id = searchParams.get("id") || '1'; 
    
    // Find the maid based on ID, defaulting to the 'Unknown Helper' structure if not found
    const initialMaid = MAIDS_CONFIG.find((m) => m.id === parseInt(id)) || {
        id: parseInt(id), name: "Unknown Helper", charges: 0, imgUrl: [], rating: 0, experience: 0, category: "Unknown", description: "Details for this helper are not available."
    };
    
    const [currentMaid, setCurrentMaid] = useState(initialMaid);
    const maid = currentMaid; 

    // State for the custom message modal
    const [message, setMessage] = useState(null);

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

    // Update charges when maid switches
    useEffect(() => {
        setBookingDetails(prevDetails => ({
            ...prevDetails,
            helperCharges: currentMaid.charges,
            helperId: currentMaid.id,
            totalAmount: 0, // Reset total amount on helper switch
            couponDiscount: 0, // Reset discount
            couponCode: "", // Clear coupon code
        }));
        setCouponMessage("");
    }, [currentMaid]);

    // Calculate total amount and discount
    useEffect(() => {
        const duration = parseFloat(bookingDetails.bookingDuration) || 0;
        const baseTotalAmount = duration * bookingDetails.helperCharges; 
        
        let discount = 0;
        const coupon = bookingDetails.couponCode.toUpperCase();
        const couponConfig = COUPON_CODES[coupon];
        
        if (couponConfig) {
            discount = (baseTotalAmount * couponConfig.discount) / 100;
            
            // Check for max discount limit (e.g., FAMILY50)
            if (couponConfig.max_discount && discount > couponConfig.max_discount) {
                discount = couponConfig.max_discount;
            }
            
            setCouponMessage(`Coupon ${coupon} applied: ${couponConfig.discount}% off (Max ₹${couponConfig.max_discount || 'None'}).`);
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

    // Error handling for 'Helper Not Found'
    if (!maid || !maid.id || maid.name === "Unknown Helper") {
        return (
            <div>
                <Navbar/>
                <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-gray-50">
                    <Heading heading="Helper Not Found" className={"text-red-500"}/>
                    <p className="text-center text-xl mt-4 text-gray-600">
                        The helper ID was not found or is invalid. Please check the URL and try again.
                    </p>
                    <Link to="/" className="mt-6 text-teal-600 hover:text-teal-800 font-medium transition">
                        Go to Home
                    </Link>
                </div>
            </div>
        );
    }

    const handleDurationChange = (value) => {
        const numberValue = parseFloat(value);
        const durationString = value;

        if (durationString === "" || numberValue <= 0) {
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
        // Update URL search parameter when switching helpers
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('id', helper.id);
        window.history.pushState(null, '', `?${newSearchParams.toString()}`);
    };

    const handleInputChange = (key, value) => {
        setBookingDetails(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const isDurationValid = parseFloat(bookingDetails.bookingDuration) > 0;

        if (!bookingDetails.bookingDate || !bookingDetails.bookingTime || !isDurationValid || !bookingDetails.userName || !bookingDetails.userPhone) {
            setMessage({ 
                type: 'error', 
                text: "Please ensure Date, Time, Duration (> 0), Your Name, and Phone number are all filled out correctly before booking." 
            });
            return;
        }
        
        const successMsg = `Success! Your booking with ${maid.name} has been confirmed for ${bookingDetails.bookingDate} at ${bookingDetails.bookingTime} for ${bookingDetails.bookingDuration} hours. Total amount: ₹${bookingDetails.totalAmount.toFixed(2)}.`;
        
        setMessage({ type: 'success', text: successMsg });
        
        // No immediate redirect; wait for modal close, then optionally redirect
        // For now, we will simply reset the form after success.
        setBookingDetails(initialMaid);
    };
    
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <Navbar/>
            <MessageModal 
                message={message} 
                onClose={() => {
                    setMessage(null);
                    if (message && message.type === 'success') {
                        // Redirect to home or reset state fully after success modal closes
                        setBookingDetails(prev => ({ 
                             ...prev, 
                             bookingDate: "", bookingTime: "", bookingDuration: "", userName: "", 
                             userEmail: "", userPhone: "", userAddress: "", couponCode: "",
                             couponDiscount: 0, totalAmount: 0
                        }));
                    }
                }}
            />
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
                                    }`}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/cccccc/333333?text=N/A"; }}
                                />
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
                                        className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white transition-opacity duration-500"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x450/cccccc/333333?text=Image+Not+Available"; }}
                                    />
                                </div>
                                <CategoryBadge category={maid.category} className={"absolute top-4 left-4"}/>
                                <span className="text-white absolute top-4 right-4 px-4 py-1 bg-red-600 font-bold rounded-full shadow-lg flex items-center" > 
                                    <DollarSign className="w-4 h-4 mr-1"/> ₹ {maid.charges}/hr
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
                                                index === currentImageIndex ? 'border-4 border-teal-500 shadow-lg' : 'border border-gray-300 opacity-70 hover:opacity-100'
                                            }`}
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/cccccc/333333?text=N/A"; }}
                                        />
                                    ))}
                                </div>
                            )}
                            
                            <div className="mt-8 text-center max-w-xl mx-auto">
                                <p className="text-xl font-medium text-gray-700 flex items-center justify-center">
                                    <Clock className="w-5 h-5 mr-2 text-teal-600"/>
                                    **{maid.name}** has **{maid.experience} years** of experience.
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
                                        min="0.1"
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

// --- HOME PAGE PLACEHOLDER ---
const Home = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-20">
        <Navbar />
        <Heading heading="Welcome to MaidRental.io" className="text-teal-600 mb-6" />
        <p className="text-xl text-gray-600">Please navigate to the **Book Helper** link to view details and make a booking.</p>
        <Link to="/details?id=1" className="mt-6 text-indigo-600 font-bold hover:text-indigo-800 transition">
             Start Booking Now (ID 1)
        </Link>
    </div>
);

// --- MAIN APP COMPONENT FOR ROUTING ---



export default HelperDetails;