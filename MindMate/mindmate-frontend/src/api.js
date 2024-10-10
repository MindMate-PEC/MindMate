import axios from 'axios';

// Set the base URL for your backend
const API_URL = 'http://localhost:3000';  // Change this to match your backend URL

// Register a new user
export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/user/register`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Create a new note
export const createNote = async (token, userId, heading, content) => {
  try {
    const response = await axios.post(`${API_URL}/notes/postNote`, { userId, heading, content }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch user notes
export const fetchNotes = async (token, userId) => {
  try {
    const response = await axios.post(`${API_URL}/notes/getNotes`, { userId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
