import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [serviceData, setServicesData] = useState("");

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log(isLoggedIn);

  //logout
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // aunthentication
  const userAuthentication = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get service data
  const getServiceData = async () => {
    try {
      const responce = await fetch("http://localhost:8000/api/data/service", {
        method: "GET",
      });
      if (responce.ok) {
        const data = await responce.json();
        setServicesData(data.responce);
        console.log("services", data.responce);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServiceData();
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, serviceData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
