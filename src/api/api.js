export const postLogin = async () => {
    try {
        const response = await fetch('https://reactnative.dev/movies.json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                "username": USERNAME_DO_USUARIO,
                "password": SENHA_DO_USUARIO,
            })
        });
    } catch (error) {
      console.error(error);
    }
  
}