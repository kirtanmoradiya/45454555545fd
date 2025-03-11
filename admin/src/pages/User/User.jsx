import React, { useState } from 'react';
import { FaEdit, FaTrash, FaUser, FaHistory, FaPlus } from 'react-icons/fa';
import './User.css';

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', mobileNo: '1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobileNo: '0987654321' },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isViewingProfile, setIsViewingProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [editData, setEditData] = useState({
    id: '',
    name: '',
    email: '',
    mobileNo: '',
  });

  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    mobileNo: '',
  });

  // ========== HANDLERS ========== //

  // Open Edit Modal
  const handleEditClick = (user) => {
    setEditData(user);
    setIsEditing(true);
  };

  // Edit Form Change
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Save Edited User
  const handleSaveChanges = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === editData.id ? editData : user))
    );
    closeEditModal();
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setEditData({ id: '', name: '', email: '', mobileNo: '' });
  };

  // Open Add Modal
  const handleAddUserClick = () => {
    setIsAdding(true);
  };

  // New User Form Change
  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Add New User
  const handleAddNewUser = () => {
    const { name, email, mobileNo } = newUserData;

    if (!name || !email || !mobileNo) {
      alert('Please fill in all fields.');
      return;
    }

    const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;

    const newUser = { id: newId, name, email, mobileNo };
    setUsers([...users, newUser]);

    closeAddModal();
  };

  const closeAddModal = () => {
    setIsAdding(false);
    setNewUserData({ name: '', email: '', mobileNo: '' });
  };

  // Delete User
  const handleDelete = (userId) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  // Open Profile
  const handleProfileClick = (user) => {
    setSelectedUser(user);
    setIsViewingProfile(true);
  };

  const closeProfileModal = () => {
    setIsViewingProfile(false);
    setSelectedUser(null);
  };

  const handleHistoryClick = (user) => {
    alert(`Showing history for ${user.name}`);
  };

  // ========== RENDER ========== //

  return (
    <div className="user-fullscreen-container">
      <h1 className="page-title">User Management</h1>

      <button className="add-user-btn" onClick={handleAddUserClick}>
        <FaPlus /> Add User
      </button>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">No users found.</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
                <td className="actions-cell">
                  <button className="action-btn edit-btn" onClick={() => handleEditClick(user)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="action-btn delete-btn" onClick={() => handleDelete(user.id)}>
                    <FaTrash /> Delete
                  </button>
                  <button className="action-btn profile-btn" onClick={() => handleProfileClick(user)}>
                    <FaUser /> Profile
                  </button>
                  <button className="action-btn history-btn" onClick={() => handleHistoryClick(user)}>
                    <FaHistory /> History
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Edit User Modal */}
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit User</h2>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleEditInputChange}
                placeholder="Enter name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleEditInputChange}
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                value={editData.mobileNo}
                onChange={handleEditInputChange}
                placeholder="Enter mobile number"
              />
            </div>

            <div className="modal-actions">
              <button className="action-btn save-btn" onClick={handleSaveChanges}>Save</button>
              <button className="action-btn cancel-btn" onClick={closeEditModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Add New User Modal */}
      {isAdding && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New User</h2>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={newUserData.name}
                onChange={handleNewUserChange}
                placeholder="Enter name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={newUserData.email}
                onChange={handleNewUserChange}
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                value={newUserData.mobileNo}
                onChange={handleNewUserChange}
                placeholder="Enter mobile number"
              />
            </div>

            <div className="modal-actions">
              <button className="action-btn save-btn" onClick={handleAddNewUser}>Add User</button>
              <button className="action-btn cancel-btn" onClick={closeAddModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {isViewingProfile && selectedUser && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Profile Details</h2>
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Mobile No:</strong> {selectedUser.mobileNo}</p>

            <div className="modal-actions">
              <button className="action-btn cancel-btn" onClick={closeProfileModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
