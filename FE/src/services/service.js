// service.js
import apiClient from '../client/client.js';

const callApiService = async (method, endpoint, data) => {
  try {
    // This sends the request through the client
    const response = await apiClient(method, endpoint, data);
    return response;
  } catch (error) {
    throw new Error('Service Error: ' + error.message);
  }
};

export default callApiService;
