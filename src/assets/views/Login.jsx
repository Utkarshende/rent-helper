import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Layout/Navbar';
import Heading from '../components/Layout/Heading';


function Login({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        // --- SIMULATED LOGIN LOGIC ---
        if (email === 'test@example.com' && password === 'password123') {
            console.log('Login successful.');
            // This is where you would get user data from a server:
            const userData = { name: 'Test User', email: email }; 
            handleLogin(userData); // Transition to dashboard
        } else {
            setError('Invalid email or password.');
        }
        // -----------------------------
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar isLoggedIn={false} />
            <div className="pt-24 flex justify-center items-center min-h-[80vh] p-4">
                <div className="p-10 bg-white rounded-xl shadow-2xl max-w-md w-full transition-all duration-300 hover:shadow-3xl">
                    <Heading heading="User Login" className="text-teal-600 mb-8 text-3xl font-extrabold text-center"/>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Email Field */}
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

                        {/* Password Field */}
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
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=" text-black appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-150 ease-in-out"
                                />
                            </div>
                        </div>

                        {/* Error Message Display */}
                        {error && (
                            <p className="text-sm text-red-600 text-center bg-red-50 p-2 rounded-md border border-red-200">
                                {error}
                            </p>
                        )}

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out transform hover:scale-[1.01]"
                            >
                                Sign In
                            </button>
                        </div>
                        
                        {/* Optional Links (Forgot Password/Sign Up) */}
                        <div className="flex items-center justify-between text-sm">
                            <Link 
                                to="/forgot-password" 
                                className="font-medium text-teal-600 hover:text-teal-500 hover:underline"
                            >
                                Forgot your password?
                            </Link>
                            <p className="text-gray-600">
                                Need an account? 
                                <Link 
                                    to="/register"
                                    className="ml-1 font-medium text-teal-600 hover:text-teal-500 hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;