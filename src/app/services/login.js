const login = async({email,password})=>{
    const url="https://navkolodozvillya.onrender.com/auth/authenticate";
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
         console.log('response', response);
        if (response.ok) {
           
          const data = await response.json();
          console.log('Login successful:', data);
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.log(error);
      }
}

export default login;

//gg@gg.gf
//ggg_898GGG