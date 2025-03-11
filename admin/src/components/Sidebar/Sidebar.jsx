import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Delmi Admin</h2>
      </div>

      <div className="sidebar-options">
        {/* Add Items */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.add_icon} alt="Add Items Icon" />
          <p>Add Items</p>
        </NavLink>

        {/* List Items */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.order_icon} alt="List Items Icon" />
          <p>List Items</p>
        </NavLink>
        {/* Orders */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.order_icon} alt="Orders Icon" />
          <p>Orders</p>
        </NavLink>

        {/* Add User */}
        <NavLink
          to="/add-user"
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img
            src={assets.user_icon}
            alt="Add User Icon"
            style={{ height: '30px' }}
          />
          <p>Add User</p>
        </NavLink>

        {/* Add Delivery Boy */}
        <NavLink
          to="/add-delivery-boy"
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img
            src={assets.product_icon}
            alt="Add Delivery Boy Icon"
            style={{ height: '30px' }}
          />
          <p>Add Delivery Boy</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
