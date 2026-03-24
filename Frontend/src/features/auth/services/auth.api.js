import axios from "axios";

const API_URL = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const register = async ({ username, email, password }) => {
  try {
    const response = await API_URL.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log("Registration error:", err);
    throw err;
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await API_URL.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log("Login error:", err);
    throw err;
  }
};

export const logout = async () => {
  try {
    await API_URL.post("/logout");
  } catch (err) {
    console.log("Logout error:", err);
    throw err;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await API_URL.get("/get-me");
    return response.data;
  } catch (err) {
    console.log("Get current user error:", err);
    throw err;
  }
};