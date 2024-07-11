import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                {isLogin ? (
                    <form>
                        <label>
                            Username:
                            <input type="text" name="username" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                ) : (
                    <form>
                        <label>
                            Username:
                            <input type="text" name="username" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <label>
                            Confirm Password:
                            <input type="password" name="confirmPassword" />
                        </label>
                        <button type="submit">Sign Up</button>
                    </form>
                )}
                <button onClick={toggleForm}>
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;