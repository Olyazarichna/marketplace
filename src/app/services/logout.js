import { API_BASE_URL } from "../constants/apiUrls";

const logout = async () => {
  const url = `${API_BASE_URL}/auth/logout`;
  try {
    const response = await fetch(url, {
      method: 'POST',
    });

    if (response.ok) {
      console.log('Logout successful');
    } else {
      console.error('Logout failed');
    }
  } catch (error) {
    console.log(error);
  }
};

export default logout;
