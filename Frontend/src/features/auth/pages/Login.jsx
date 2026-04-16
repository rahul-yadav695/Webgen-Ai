import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  {useAuth}  from '../services/auth.conext.jsx'

const Login = () => {

    const { Loading, handleLogin } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        handleLogin({ email, password })
    }

    if (Loading) {
     return  <h1>Loading....</h1>
    }

    if (Loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <p className="text-white text-lg">Logging in...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-8">

            <div className="w-full max-w-md bg-black">

                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
                    Login
                </h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="text-white block mb-2 text-sm sm:text-base">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" className="w-full px-4 py-2 sm:py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition text-sm sm:text-base" />
                    </div>

                    <div className="mb-6">
                        <label className="text-white block mb-2 text-sm sm:text-base">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="w-full px-4 py-2 sm:py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition text-sm sm:text-base" />
                    </div>

                    <button type="submit" disabled={Loading} className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-500 text-white py-2 sm:py-3 rounded-full font-semibold transition duration-300 text-sm sm:text-base">
                        {Loading ? "Logging in..." : "Login"}
                    </button>

                </form>

                <p className="text-white text-xs sm:text-sm opacity-90 mt-4 text-center sm:text-left">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-pink-500 font-semibold hover:underline ml-1">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Login