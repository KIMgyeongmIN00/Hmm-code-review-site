import { createContext } from 'react';

// { id:string, email: string, nickname: string, isSignin: boolean }
const AuthContext = createContext(null);
export default AuthContext;
