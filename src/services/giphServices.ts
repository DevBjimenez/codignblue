import axios from 'axios';
const API_URL = 'http://api.giphy.com/v1/gifs/search';
const api_key = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa';
const LIMIT = 20;
export const find = async (q: string) => {
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        q,
        api_key,
        limit: LIMIT,
      },
    });
    return data;
  } catch (error) {
    throw Error((error as Error).message || 'Failed');
  }
};
