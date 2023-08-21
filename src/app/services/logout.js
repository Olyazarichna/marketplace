const logout = async () => {
  const url = 'https://navkolodozvillya.onrender.com/auth/logout';
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
