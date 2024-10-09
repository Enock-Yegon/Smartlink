import React from 'react';
import { auth } from '../firebase'; // Adjust the import based on your file structure
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Import Link for navigation
import SmartlinkLogo from '../Assets/SmartlinkLogo.jpg'; // Adjust path to your logo

const Login = () => {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            // You can access the user info here
            const user = result.user;
            console.log('Google Sign-In successful:', user);
            // Redirect or handle user info as needed
        } catch (error) {
            console.error('Error during Google sign-in:', error);
        }
    };

    return (
        <div className="min-h-screen bg-green-100 flex flex-col">
            {/* Logo and School Name */}
            <div className="p-12 flex items-center">
                <Link to="/" className="flex items-center">
                    <img src={SmartlinkLogo} alt="School Logo" className="h-16 mr-6 rounded-full shadow-md hover:opacity-90 transition-opacity duration-200" />
                    <h1 className="text-3xl font-extrabold tracking-wide text-[#0000A0] shadow-sm leading-tight hover:text-blue-800 transition-colors duration-300">
                        SMARTLINK <br /> ACADEMY
                    </h1>
                </Link>
            </div>

            <div className="flex items-center justify-center flex-grow">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="flex justify-center mb-4">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-1 rounded hover:bg-blue-500 transition"
                            >
                                LOGIN
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-gray-600 text-sm mb-4">
                        Don't have an account ?&nbsp;
                        <a href="/register" className="text-blue-600 hover:underline">
                            Register
                        </a>
                    </p>

                    {/* OR separator */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-600">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Google Sign In button */}
                    <div className="flex justify-center mb-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition"
                        >
                            <img src="images/Google__G__logo.png" alt="Google logo" className="h-5 mr-2" />
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
