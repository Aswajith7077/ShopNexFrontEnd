import { useContext, useLayoutEffect, useState } from "react";
import { createContext } from "react";
import { deserialize } from "../Constants";

const AuthContext = createContext();

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth === undefined)
    throw new Error("Auth is not Defined [User Defined Error]");
  return auth;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useLayoutEffect(()=>{
    const userString = localStorage.getItem("ShopNex");
    if(user)
      setUser(deserialize(userString))
    
  },[])

  return (
    <AuthContext.Provider
      value={{ user: user, setUser: setUser }}
    >{children}</AuthContext.Provider>
  );
};


export{
  useAuth,
  AuthProvider
}
