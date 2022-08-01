import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider(props) {
  const { uid } = useParams();
  console.log(uid);
  const [user, setUser] = useState({
    _id: 11,
    username: "emcuong",
    password: "emcuong123",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("Error");
  return context;
}

export { useAuth, AuthProvider };
