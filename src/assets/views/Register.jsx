import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import Heading from '../components/Layout/Heading';
import { Link } from 'react-router';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!name || !email || !password) {
            setError('Please fill in all required fields.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        console.log('Registering user with:', { name, email, password });
        setIsRegistered(true);

        setName('');
        setEmail('');
        setPassword('');
    };

    if (isRegistered) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans">
                <Navbar />
                <div className="pt-24 flex justify-center items-center min-h-[80vh] p-4">
                    <div className="p-10 bg-white rounded-xl shadow-2xl max-w-md w-full text-center">
                        <Heading heading="Registration Successful!" className="text-green-600 mb-4 text-3xl font-extrabold"/>
                        <p className="text-gray-700 mb-6">
                            Thank you for joining us. You can now proceed to log in.
                        </p>
                        <Link 
                            to="/login" 
                            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                        >
                            Go to Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar/>
            <div className="pt-24 flex justify-center items-center min-h-[80vh] p-4">
                <div className="p-10 bg-white rounded-xl shadow-2xl max-w-lg w-full transition-all duration-300 hover:shadow-3xl">
                    <Heading heading="Create Your Account" className="text-teal-600 mb-8 text-3xl font-extrabold text-center"/>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className=" text-black appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-150 ease-in-out"
                                />
                            </div>
                        </div>

                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=" text-black appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-150 ease-in-out"
                                />
                            </div>
                        </div>

                        <div>
                            <label 
                                htmlFor="password" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="  text-black appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-150 ease-in-out"
                                />
                            </div>
                            <p className="mt-2 text-xs text-gray-500">
                                Password must be at least 6 characters.
                            </p>
                        </div>

                        {error && (
                            <p className="text-sm text-red-600 text-center bg-red-50 p-2 rounded-md border border-red-200">
                                {error}
                            </p>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out transform hover:scale-[1.01]"
                            >
                                Register
                            </button>
                        </div>
                        
                        {/* Login Link */}
                        <div className="text-center text-sm mt-4">
                            <p className="text-gray-600">
                                Already have an account? 
                                <Link 
                                    to="/login" // Placeholder route for login
                                    className="ml-1 font-medium text-teal-600 hover:text-teal-500 hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}


export default Register ;