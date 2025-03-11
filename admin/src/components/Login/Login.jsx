import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets"; // ✅ assuming your logo is here

const Login = ({ url }) => {
  const navigate = useNavigate();
  const { setAdmin, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${url}/api/user/login`, data);
      const result = response.data;

      if (result.success) {
        setToken(result.token);
        localStorage.setItem("token", result.token);

        if (result.role === "admin") {
          setAdmin(true);
          localStorage.setItem("admin", true);
          toast.success("Logged in as Admin!");
          navigate("/add");
        } else {
          setAdmin(false);
          localStorage.setItem("admin", false);
          toast.success("Logged in as User!");
          navigate("/orders");
        }
      } else {
        toast.error(result.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const admin = localStorage.getItem("admin");

    if (token) {
      if (admin === "true") {
        navigate("/add");
      } else {
        navigate("/orders");
      }
    }
  }, [navigate]);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-logo">
          <img src={assets.logo} alt="Delmi Logo" onClick={() => navigate("/")} />
        </div>

        <div className="login-popup-title">
          <h2>Welcome Back</h2>
          <p>Please log in to continue</p>
        </div>

        <div className="login-popup-inputs">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="login-popup-footer">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Register here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
