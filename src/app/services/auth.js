const register = async ({ firstName, lastName, email, password }) => {
  const url = 'https://navkolodozvillya.onrender.com/auth/register';
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
      const token = data.accessToken; 
      console.log('Registration successful:', data);
      console.log('token:', token);
      localStorage.setItem('authToken', token);
      
    } else {
      console.error('Registration failed');
    }
  } catch (error) {
    console.log(error);
  }
};

export default register;


