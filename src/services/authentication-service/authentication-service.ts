export type SignInParams = {
  email: string;
  password: string;
};

export const signIn = async (_params: SignInParams) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 5000);
  });
};

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export const signUp = async (_params: SignUpParams) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 5000);
  });
};
