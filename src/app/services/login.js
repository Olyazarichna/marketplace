import { API_BASE_URL } from "../constants/apiUrls";

const login = async ({ email, password }) => {
  const url = `${API_BASE_URL}/auth/authenticate`;
  const user = {
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok || response.status === 200) {
      const data = await response.json();
      const token = data.accessToken;
      localStorage.setItem('authToken', token);
      return data;
    }
    if (!response.ok || response.status === 401) {
      console.error('Login failed: Incorrect email or password.');
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.log(error);
  }
};

export default login;

//gg@gg.gf
//ggg_898GGG
