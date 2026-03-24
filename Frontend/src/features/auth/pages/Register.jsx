import React from 'react'
import {Navigate ,  Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen flex">
      
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          
          <h1 className="text-white text-4xl font-bold mb-8">Register</h1>

          <div className="mb-4">
            <label className="text-white block mb-2">Username</label>
            <input type="text" placeholder="Enter username" className="w-full px-4 py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500"/>
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2">Email</label>
            <input type="email" placeholder="Enter email address" className="w-full px-4 py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500"/>
          </div>

          <div className="mb-6">
            <label className="text-white block mb-2">Password</label>
            <input type="password" placeholder="Enter password" className="w-full px-4 py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500"/>
          </div>

          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-semibold transition duration-300">
            Register
          </button>

        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-600 to-purple-700 items-center justify-center">
        <div className="text-center text-white px-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg opacity-90">
            Already have an account? Login and continue your journey with us 🚀
          </p>

          <button className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          <Link to={'/login'} >Login</Link>  
          </button>
        </div>
      </div>

    </div>
  )
}

export default Register