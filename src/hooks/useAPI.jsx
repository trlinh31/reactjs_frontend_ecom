import axios from 'axios';

const request = axios.create({
  baseURL: 'https://65ec6bff0ddee626c9b0386d.mockapi.io/api/v1/',
  headers: { 'content-type': 'application/json' },
});

export const useGetAllProducts = async () => {
  try {
    const response = await request.get('products');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetProductById = async (id) => {
  try {
    const response = await request.get('products/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetProductByName = async (keywords) => {
  try {
    const response = await request.get('products', { params: { search: keywords } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
