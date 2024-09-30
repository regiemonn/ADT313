
import React, { useState, useEffect, useRef, useCallback, useReducer } from 'react';

// Calculator reducer
const calculatorReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, result: state.num1 + state.num2 };
        case 'SUBTRACT':
            return { ...state, result: state.num1 - state.num2 };
        case 'MULTIPLY':
            return { ...state, result: state.num1 * state.num2 };
        case 'DIVIDE':
            return { ...state, result: state.num1 / state.num2 };
        default:
            return state;
    }
};

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [calculatorState, dispatch] = useReducer(calculatorReducer, { num1: 0, num2: 0, result: 0 });
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const validateForm = () => {
        if (!username || !password) {
            setError('Both fields are required');
            return false;
        }
        setError('');
        return true;
    };

    const handleLogin = useCallback((e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            setTimeout(() => {
                setIsLoggedIn(true);
                setLoading(false);
            }, 3000);
        }
    }, [username, password]);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            background: isDarkMode ? '#333' : '#fff', 
            color: isDarkMode ? '#fff' : '#000', 
            flexDirection: 'column' 
        }}>
            <button onClick={toggleDarkMode} style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
            {!isLoggedIn ? (
                <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '24px' }}>Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        ref={usernameRef}
                        style={{ margin: '10px 0', padding: '10px', width: '200px' }}
                    />
                    <div style={{ position: 'relative', margin: '10px 0' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={passwordRef}
                            style={{ padding: '10px', width: '200px', paddingRight: '40px' }} // Extra padding for the button
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                color: isDarkMode ? '#fff' : '#000', // Match text color
                            }}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '24px' }}>Welcome, {username}!</h3>
                    <button onClick={handleLogout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Logout
                    </button>
                    <div>
                        <h3 style={{ fontSize: '24px' }}>Calculator</h3>
                        <input
                            type="number"
                            onChange={(e) => (calculatorState.num1 = Number(e.target.value))}
                            placeholder="Number 1"
                            style={{ margin: '10px 0', padding: '10px', width: '200px' }}
                        />
                        <input
                            type="number"
                            onChange={(e) => (calculatorState.num2 = Number(e.target.value))}
                            placeholder="Number 2"
                            style={{ margin: '10px 0', padding: '10px', width: '200px' }}
                        />
                        <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
                        <button onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
                        <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Multiply</button>
                        <button onClick={() => dispatch({ type: 'DIVIDE' })}>Divide</button>
                        <p>Result: {calculatorState.result}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;