import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

  // ✅ Load from localStorage on first render
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedAdmin = localStorage.getItem("admin");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedAdmin) {
      setAdmin(storedAdmin === "true");
    }
  }, []);

  // ✅ Save to localStorage whenever token or admin changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("admin", admin.toString());
  }, [admin]);

  // ✅ Example login function (optional)
  const login = async (email, password, url) => {
    try {
      const response = await axios.post(`${url}/api/login`, {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        setAdmin(response.data.isAdmin); // Backend must send isAdmin (true/false)

        // ✅ Save immediately (or handled by useEffect)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("admin", response.data.isAdmin.toString());

        return { success: true };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      return { success: false, message: "Login failed. Try again." };
    }
  };

  const logout = () => {
    setToken("");
    setAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
  };

  const contextValue = {
    token,
    setToken,
    admin,
    setAdmin,
    login, // exposing login if you need it in Login.jsx
    logout, // optional: expose logout for buttons
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
