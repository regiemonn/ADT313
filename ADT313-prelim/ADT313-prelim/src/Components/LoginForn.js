// src/components/LoginForm.js
import React, { useRef } from 'react';

const LoginForm = ({ onLogin }) => {
const usernameRef = useRef(null);
const passwordRef = useRef(null);

const handleSubmit = (e) => {
e.preventDefault();
const username = usernameRef.current.value;
const password = passwordRef.current.value;
onLogin(username, password);
};

return (
<form onSubmit={handleSubmit}>
<h1>Login</h1>
<input type="text" placeholder="Username" ref={usernameRef} />
<input type="password" placeholder="Password" ref={passwordRef} />
<button type="submit">Login</button>
</form>
);
};

export default LoginForm;
