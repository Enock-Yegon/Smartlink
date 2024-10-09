import React from 'react';

const Apply = () => {
    return (
        <div className="min-h-screen bg-green-100 flex flex-col justify-start items-center p-6 mt-28"> {/* Added mt-16 for margin-top */}
            <h2 className="text-3xl font-bold mb-6">Apply Now</h2>
            <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                <h3 className="text-2xl font-semibold mb-4">Student Information</h3>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentName">
                            Student Name
                        </label>
                        <input
                            type="text"
                            id="studentName"
                            placeholder="Enter student's full name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                            Grade Applying For
                        </label>
                        <select
                            id="grade"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="">Select a grade</option>
                            <option value="kindergarten">Kindergarten</option>
                            <option value="daycare">Day Care</option>
                            <option value="1">Grade 1</option>
                            <option value="2">Grade 2</option>
                            <option value="3">Grade 3</option>
                            <option value="4">Grade 4</option>
                            <option value="5">Grade 5</option>
                            <option value="6">Grade 6</option>
                            <option value="7">Grade 7</option>
                            <option value="8">Grade 8</option>
                            
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4">Parent/Guardian Information</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianName">
                            Parent/Guardian Name
                        </label>
                        <input
                            type="text"
                            id="guardianName"
                            placeholder="Enter parent/guardian full name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter phone number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
                        >
                            Submit Application
                        </button>
                    </div>
                    <p className="text-center text-gray-600 text-xl mb-4 flex space-x-8">
                        For More Information ?&nbsp;
                        <a href="/contact" className="text-green-600 hover:underline">
                            Contact Us
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Apply;
