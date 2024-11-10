import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/login'); // Navigate to login page after registration
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Register</button>
                </form>
            </div>
        </div>
    );
};

// Styles
const styles = {
    body: {
        fontFamily: 'BookmanOldStyle',
        backgroundColor: 'navajowhite',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    container: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px'
    },
    button: {
        backgroundColor: '#ff4081',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        borderRadius: '5px'
    }
};

export default RegisterPage;
