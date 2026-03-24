import { useContext } from "react";
import { AuthContext } from "../services/auth.conext";
import { login, logout, register, getCurrentUser } from "../services/auth.api";


export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handlLogin = async ({ email, password }) => {
        setLoading(true)
        const data = await login({ email, password })
        setUser(data.user)
        setLoading(false)
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        const data = await register({ username, email, password })
        setUser(data.user)
        setLoading(false)
    }

    const handleLogout = async () => {
        setLoading(true)
        const data = await logout()
        setUser(null)
        setLoading(false)
    }

    return { user, loading, handlLogin, handleRegister, handleLogout }
}