const register = async ({ firstName, lastName, email, password }) => {
  const url = 'https://navkolodozvillya.onrender.com/auth/register';
  const userData = {
    firstName,
    lastName,
    email,
    password,
  };

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
      console.log('Registration successful:', data);
    } else {
      console.error('Registration failed');
    }
  } catch (error) {
    console.log(error);
  }
};

export default register;

