import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

// Pages
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import User from "./pages/User/User";
import Delivery from "./pages/Delivery/Delivery";

// Toast Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "https://food-delivery-backend-5b6g.onrender.com";
  const location = useLocation();

  const hideLayout = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {/* ✅ Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* ✅ Navbar (Hidden on Login & Register pages) */}
      {!hideLayout && <Navbar />}

      <div
  className="page-container"
  style={{
    flex: 1,
    display: "flex",
    justifyContent: hideLayout ? "flex-start" : "flex-start",
    alignItems: hideLayout ? "flex-start" : "flex-start",
    padding: hideLayout ? "0" : "20px",
    minHeight: "100vh",
    marginLeft: "169px", // Use camelCase for inline styles!
  }}
      >
        {/* ✅ Sidebar (Hidden on Login & Register pages) */}
        {!hideLayout && <Sidebar />}

        {/* ✅ Main Page Content */}
        <div
          className="page-content"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: hideLayout ? "center" : "flex-start",
            alignItems: hideLayout ? "center" : "flex-start",
            padding: hideLayout ? "0" : "20px",
            minHeight: "100vh",
         
          }}
        >
          <Routes>
            {/* ✅ Auth Pages */}
            <Route path="/" element={<Login url={url} />} />
            <Route path="/register" element={<Register url={url} />} />

            {/* ✅ Admin Pages */}
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />

            {/* ✅ User & Delivery Pages */}
            <Route path="/add-user" element={<User url={url} />} />
            <Route path="/add-delivery-boy" element={<Delivery url={url} />} />

            {/* ✅ Fallback for Undefined Routes */}
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center" }}>
                  <h1>404 - Page Not Found</h1>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
