import React, {createContext, ReactNode, useState} from 'react';
import * as auth from '../services/auth';

type AuthContextData = {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
  children: ReactNode;
};

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const res = await auth.signIn();

    setUser(res.user);
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
