// src/api/auth.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // à adapter à ton backend
});

// Inscription
export const registerUser = async (formData) => {
  const res = await API.post("/register", formData);
  return res.data;
};

// Connexion
export const loginUser = async (formData) => {
  const res = await API.post("/login", formData);
  return res.data;
};
