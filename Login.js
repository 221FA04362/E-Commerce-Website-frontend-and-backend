import React, { useState, useEffect } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [loginSuccess, setLoginSuccess] = useState(false); // State to track successful login

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a successful login (replace with actual logic/API call)
        console.log('Login Data:', formData);
        setLoginSuccess(true); // Set login success to true after submitting
    };

    useEffect(() => {
        if (loginSuccess) {
            setTimeout(() => {
                alert('Login Successful!');
                setLoginSuccess(false); // Reset login success after alert
            }, 500);
        }
    }, [loginSuccess]);

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2>Login</h2>
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
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                {loginSuccess && <p style={styles.successMessage}>Login Successful!</p>}
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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
        cursor: 'pointer'
    },
    successMessage: {
        color: 'green',
        marginTop: '10px'
    }
};

export default LoginPage;
