import React, { useState } from 'react';
import './login.css';

export const Login = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., validation, API calls, etc.)
        alert(firstName, lastName, password, phone );
    };

    return (
        <div className="login">
            <h1 className="title">Login/SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div className="credentials">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
}