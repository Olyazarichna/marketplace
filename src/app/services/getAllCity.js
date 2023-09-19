const getAllCity = async () => {
    const url = 'http://54.175.43.71/city/getAll';
    try {
      const response = await fetch(url, { cache: 'no-cache' });
      if (!response.ok) {
        console.log('responseError',response);
        throw new Error('Failed to fetch data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export default getAllCity;
  