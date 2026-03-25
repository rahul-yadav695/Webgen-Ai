import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
        <div className="w-full max-w-md">

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center md:text-left">
            Register
          </h1>

          <div className="mb-4">
            <label className="text-white block mb-2 text-sm sm:text-base">Username</label>
            <input type="text" placeholder="Enter username" className="w-full px-4 py-2 sm:py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"/>
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2 text-sm sm:text-base">Email</label>
            <input type="email" placeholder="Enter email address" className="w-full px-4 py-2 sm:py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"/>
          </div>

          <div className="mb-6">
            <label className="text-white block mb-2 text-sm sm:text-base">Password</label>
            <input type="password" placeholder="Enter password" className="w-full px-4 py-2 sm:py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"/>
          </div>

          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 sm:py-3 rounded-full font-semibold transition duration-300 text-sm sm:text-base">
            Register
          </button>

          <p className="text-white text-xs sm:text-sm mt-4 text-center md:hidden">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-500 font-semibold hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-600 to-purple-700 items-center justify-center">
        <div className="text-center text-white px-10 max-w-md">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-base lg:text-lg opacity-90">
            Already have an account? Login and continue your journey with us 🚀
          </p>

          <Link to="/login">
            <button className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Login
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Register