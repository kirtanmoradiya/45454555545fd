import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" style={{ width: "150px" }} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nostrum iure suscipit maiores non harum incidunt unde magnam
            molestias ipsum qui vel aut natus aspernatur ipsa dignissimos,
            numquam assumenda deserunt.
          </p>
          <div className="footer-social-icons">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/in/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.facebook_icon} alt="Facebook" />
  </a>

  {/* Twitter */}
  <a
  href="https://www.instagram.com/yourprofile"  // Replace with your IG username
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={assets.instagram_icon} alt="Instagram" />
</a>


  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.linkedin_icon} alt="LinkedIn" />
  </a>
</div>

        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+92-308-4900522</li>
            <li>contact@delmi.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Delmi.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
