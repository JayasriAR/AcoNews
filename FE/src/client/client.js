// client.js
import axios from 'axios';

const apiClient = async (method, endpoint, data = {}) => {
  try {
    const response = await axios({
      method,
      url: `https://aconews-7t4h.onrender.com${endpoint}`, // base URL + endpoint
      params: method === 'get' ? data : {},
      data: method !== 'get' ? data : {},
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default apiClient;
