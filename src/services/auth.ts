type Response = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'asdljhfaslkjdfhaslkjdhfalskjdhfalksjdhflaksjhdf',
        user: {
          name: 'Veame',
          email: 'veame@gmail.com',
        },
      });
    }, 2000);
  });
}
