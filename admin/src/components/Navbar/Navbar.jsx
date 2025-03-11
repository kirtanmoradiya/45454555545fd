import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, admin, setAdmin, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken("");
    setAdmin(false);
    toast.success("Logout Successfully");
    navigate("/login"); // Redirect to login after logout
  };

  const goHome = () => {
    navigate("/");
  };

  const goProfile = () => {
    if (token) {
      navigate("/profile"); // If you have a profile page
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Delmi Logo" onClick={goHome} />

      {token ? (
        <p className="login-conditon" onClick={logout}>Logout</p>
      ) : (
        <p className="login-conditon" onClick={() => navigate("/login")}>Login</p>
      )}

      <img
        className="profile"
        src={assets.profile_image}
        alt="Profile"
        onClick={goProfile}
      />
    </div>
  );
};

export default Navbar;
