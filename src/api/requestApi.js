import axios from 'axios';

const request = axios.create({
  baseURL: 'https://65ec6bff0ddee626c9b0386d.mockapi.io/api/v1/',
});

const getRequestSite = async (url, param = {}) => {
  try {
    const response = await request.get(url, { params: param });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getRequestSite };
