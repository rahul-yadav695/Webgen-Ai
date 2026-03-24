import axios from "axios";

const register = async ({ username, email, password }) => {
    try {
        const response = await axios.post('http://localhost:3000/api/register', {
            username, email, password
        }, {
            withCredentials: true
        })
        return response.data
    } catch (err) {
        console.log('Registration error:', err)
    }
}


const login = async ({ email, password }) => {
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            email, password
        }, {
            withCredentials: true
        })
        return response.data
    } catch (err) {
        console.log('Login error:', err)
    }
}

module.exports = {
    register,
    login
}