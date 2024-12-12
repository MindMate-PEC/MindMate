const axios = require('axios');

const sentimentAnalysis = async (text) => {
  try {
    const response = await axios.post('http://localhost:5000/predict', { text });

    if (response.data && response.data.prediction) {
      return response.data.prediction;
    } else {
      throw new Error('Invalid response from the Flask API.');
    }
  } catch (error) {
    console.error('Error communicating with the Flask API:', error.message);
    throw new Error('Failed to analyze sentiment. Please try again later.');
  }
};

module.exports = sentimentAnalysis;
