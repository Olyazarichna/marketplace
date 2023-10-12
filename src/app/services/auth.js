import { API_BASE_URL } from '../constants/apiUrls';

const register = async ({ firstName, lastName, email, password }) => {
  const url = `${API_BASE_URL}/auth/register`;
  const userData = {
    email,
    password,
  };
  if (firstName) {
    userData.firstName = firstName;
  }
  if (lastName) {
    userData.lastName = lastName;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Registration failed');
    }
  } catch (error) {
    console.log(error);
  }
};

export default register;
