import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                <h1 className="text-white text-4xl font-bold mb-8">Login</h1>

                <div className="mb-4">
                    <label className="text-white block mb-2">Email</label>
                    <input type="email" placeholder="Enter email address" className="w-full px-4 py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500" />
                </div>

                <div className="mb-6">
                    <label className="text-white block mb-2">Password</label>
                    <input type="password" placeholder="Enter password" className="w-full px-4 py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500" />
                </div>

                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-semibold transition duration-300">
                    Login
                </button>


                <p className="text-white text-sm opacity-90">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-pink-500 font-semibold hover:underline ml-1">
                    Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login