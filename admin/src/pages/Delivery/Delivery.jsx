import React, { useState } from 'react';
import './Delivery.css';
import { FaEdit, FaTrash, FaUser, FaHistory, FaSave, FaTimes } from 'react-icons/fa';

const Delivery = () => {
    const [deliveryBoys, setDeliveryBoys] = useState([
        {
            id: 1,
            name: 'Rahul Kumar',
            email: 'rahul@example.com',
            mobileNo: '9876543210',
            city: 'Mumbai',
            address: '123, Andheri West',
        },
        {
            id: 2,
            name: 'Anjali Sharma',
            email: 'anjali@example.com',
            mobileNo: '9123456780',
            city: 'Delhi',
            address: '45, Connaught Place',
        },
    ]);

    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        email: '',
        mobileNo: '',
        city: '',
        address: '',
    });

    // ===================== EDIT =====================
    const handleEditClick = (boy) => {
        setEditId(boy.id);
        setEditForm({
            name: boy.name,
            email: boy.email,
            mobileNo: boy.mobileNo,
            city: boy.city,
            address: boy.address,
        });
    };

    const handleCancelEdit = () => {
        setEditId(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleSaveEdit = (id) => {
        const updatedBoys = deliveryBoys.map((boy) =>
            boy.id === id ? { ...boy, ...editForm } : boy
        );
        setDeliveryBoys(updatedBoys);
        setEditId(null);
        alert(`Delivery Boy ID: ${id} updated successfully!`);
    };

    // ===================== DELETE =====================
    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete Delivery Boy ID: ${id}?`)) {
            const updatedBoys = deliveryBoys.filter((boy) => boy.id !== id);
            setDeliveryBoys(updatedBoys);
            alert(`Deleted Delivery Boy ID: ${id}`);
        }
    };

    // ===================== PROFILE =====================
    const handleProfile = (id) => {
        const boy = deliveryBoys.find((b) => b.id === id);
        if (boy) {
            alert(
                `Profile Details:\n\n` +
                `Name: ${boy.name}\n` +
                `Email: ${boy.email}\n` +
                `Mobile No: ${boy.mobileNo}\n` +
                `City: ${boy.city}\n` +
                `Address: ${boy.address}`
            );
        } else {
            alert('Delivery Boy not found.');
        }
    };

    // ===================== HISTORY =====================
    const handleHistory = (id) => {
        // Dummy history display. Replace with navigation or real data.
        alert(`Order history for Delivery Boy ID: ${id}\n(You can navigate to the history page from here.)`);
    };

    return (
        <div className="delivery-container">
            <h2>Delivery Boys Management</h2>
            <table className="delivery-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveryBoys.map((boy) => (
                        <tr key={boy.id}>
                            <td>{boy.id}</td>

                            {/* Conditional Rendering for Edit Mode */}
                            {editId === boy.id ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editForm.name}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            value={editForm.email}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="mobileNo"
                                            value={editForm.mobileNo}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="city"
                                            value={editForm.city}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="address"
                                            value={editForm.address}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{boy.name}</td>
                                    <td>{boy.email}</td>
                                    <td>{boy.mobileNo}</td>
                                    <td>{boy.city}</td>
                                    <td>{boy.address}</td>
                                </>
                            )}

                            <td>
                                {editId === boy.id ? (
                                    <>
                                        <button
                                            onClick={() => handleSaveEdit(boy.id)}
                                            className="btn save-btn"
                                            style={{ backgroundColor: '#4CAF50', color: 'white' }} // Green background with white text
                                        >
                                            <FaSave /> Save
                                        </button>
                                        <button
                                            onClick={handleCancelEdit}
                                            className="btn cancel-btn"
                                            style={{ backgroundColor: '#f44336', color: 'white' }} // Red background with white text
                                        >
                                            <FaTimes /> Cancel
                                        </button>

                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEditClick(boy)} className="btn edit-btn">
                                            <FaEdit /> Edit
                                        </button>
                                        <button onClick={() => handleDelete(boy.id)} className="btn delete-btn">
                                            <FaTrash /> Delete
                                        </button>
                                        <button onClick={() => handleProfile(boy.id)} className="btn profile-btn">
                                            <FaUser /> Profile
                                        </button>
                                        <button onClick={() => handleHistory(boy.id)} className="btn history-btn">
                                            <FaHistory /> History
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Delivery;
