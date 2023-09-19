import { API_BASE_URL } from "../constants/apiUrls";
const getCity = async () => {
  const url = `${API_BASE_URL}/city`;
  try {
    const response = await fetch(url, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getCity;
