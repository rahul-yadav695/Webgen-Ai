import { createContext, useState, useContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true)

            await new Promise((res) => setTimeout(res, 1000))

            setUser({ email })

            console.log("Login Success")

        } catch (err) {
            console.log("Login Error:", err)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <main className="h-300"><h1 className="flex justify-center items-center bg-black text-white">Loading....</h1></main>
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}