import React from "react";
import "./Header.css";
import headerImg from "../../assets/frontend_assets/header_img.png"; // adjust path if needed

const Header = () => {
  return (
    <div
      className="header"
      style={{
        background: `url(${headerImg}) no-repeat center center`,
        backgroundSize: "cover", // "contain" or "cover" depending on your design
      }}
    >
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button onClick={() => window.location.href = "#explore-menu"}>
          View Menu
        </button>

      </div>
    </div>
  );
};

export default Header;
