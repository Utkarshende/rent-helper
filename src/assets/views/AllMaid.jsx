import React, { useState } from 'react';
import { Link } from 'react-router';
import { Search, Home as HomeIcon, CheckCircle, MapPin, DollarSign, Star } from 'lucide-react';

function AllMaid() {
    const maids = [
        {
        id: 101,
        name: "Raja Shree",
        charges: 250,
        experience: 5,
        rating: 4.8,
        category: "Cleaning",
        description: "Specializes in deep cleaning and disinfection. Uses eco-friendly products and is highly reliable.",
        imgUrl: [
            "https://t4.ftcdn.net/jpg/03/53/89/07/360_F_353890760_4TJwWPFZkG0C2EbHdAPQ1JNKokPbKQGE.jpg",
            "https://t3.ftcdn.net/jpg/03/52/78/33/360_F_352783305_u2p93tU6z06n8V9E5544Hw8zWv6D4G9s.jpg",
            "https://t4.ftcdn.net/jpg/04/41/27/94/360_F_441279434_9c294tP1Dk7D0jD2cRj3pXW7mG0Tz7oG.jpg"
        ],
    },
    {
        id: 102,
        name: "Kavita Singh",
        charges: 300,
        experience: 8,
        rating: 4.9,
        category: "Housekeeping",
        description: "An expert in general house upkeep, organization, and efficient chore management. Very detail-oriented.",
        imgUrl: [
            "https://t4.ftcdn.net/jpg/03/89/53/16/360_F_389531653_o2eNn0K0p0Ew2j1Jv0t1m7YhQ40O0h6v.jpg",
            "https://t3.ftcdn.net/jpg/02/89/27/75/360_F_289277519_Hw2F80722r9xGj027hVz18T8Oa4nF13t.jpg",
        ],
    },
    {
        id: 103,
        name: "Priya Sharma",
        charges: 200,
        experience: 3,
        rating: 4.5,
        category: "Cooking",
        description: "Excellent cook specializing in Indian and continental cuisine. Can handle party catering.",
        imgUrl: [
            "https://t4.ftcdn.net/jpg/02/76/85/43/360_F_276854388_4O6B99iT641QWv0tC0p4tT5E2W2v517j.jpg",
            "https://t3.ftcdn.net/jpg/03/53/89/07/360_F_353890760_4TJwWPFZkG0C2EbHdAPQ1JNKokPbKQGE.jpg",
        ],
    }
    ];

    return (
        <div className='min-h-screen bg-gray-100 pt-24 pb-12 font-sans'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-4xl font-extrabold text-teal-700 mb-4'>
                    Available Professional Helpers
                </h2>
                <p className='text-lg text-gray-600 mb-10'>
                    Browse vetted cleaners. Filter by rate, location, and specialty soon!
                </p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {maids.map(maid => (
                        <div key={maid.id} className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-teal-500'>
                            
                            {/* Header: Name and Rating */}
                            <div className="flex justify-between items-start mb-4 border-b pb-3">
                                <p className='text-2xl font-bold text-gray-800 flex items-center'>
                                    {maid.name}
                                </p>
                                <div className="flex items-center text-yellow-600 font-semibold text-sm bg-yellow-50 px-3 py-1 rounded-full shadow-inner">
                                    <Star className='w-4 h-4 fill-yellow-600 mr-1'/> {maid.rating} ({maid.reviews})
                                </div>
                            </div>
                            
                            {/* Details Grid */}
                            <div className="space-y-3 text-sm text-gray-700">
                                <div className='flex justify-between items-center'>
                                    <span className="font-medium flex items-center text-teal-700">
                                        <MapPin className='w-4 h-4 mr-2'/> Location:
                                    </span> 
                                    <span className='font-semibold'>{maid.location}</span>
                                </div>
                                
                                <div className='flex justify-between items-center'>
                                    <span className="font-medium flex items-center text-teal-700">
                                        <DollarSign className='w-4 h-4 mr-2'/> Hourly Rate:
                                    </span> 
                                    <span className='font-bold text-green-600'>${maid.rate} / hr</span>
                                </div>
                                
                                <div className='flex justify-between items-center'>
                                    <span className="font-medium flex items-center text-teal-700">
                                        <CheckCircle className='w-4 h-4 mr-2'/> Availability:
                                    </span> 
                                    <span>{maid.type} ({maid.experience})</span>
                                </div>
                            </div>

                            {/* Specialty/Description */}
                            <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                                <p className='text-sm font-semibold text-teal-800 mb-1'>Specialty:</p>
                                <p className='text-base text-gray-700'>{maid.specialty}</p>
                            </div>

                           <Link to="/maid-details">
                            <button className='mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md'>
                                Book {maid.name}
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
                
                {/* Back to Home Link */}
                <div className='mt-12 text-center'>
                    <Link to="/" className='text-teal-600 hover:text-teal-800 font-medium flex items-center justify-center transition'>
                        <HomeIcon className='w-5 h-5 mr-2'/> Return to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default AllMaid;