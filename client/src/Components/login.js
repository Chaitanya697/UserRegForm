
// import React, { useState } from 'react';
// import './login.css'; 
// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username === 'admin' && password === 'password') {
//       alert('Login Successful!');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h3 className="heading">Login</h3>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="btn1" onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import './login.css';

// function Login() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [registeredUser, setRegisteredUser] = useState({
//     username: 'admin',
//     password: 'password'
//   });

//   const handleLogin = () => {
//     if (username === registeredUser.username && password === registeredUser.password) {
//       alert('Login Successful!');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleSignUp = () => {
//     if (username.trim() === '' || password.trim() === '') {
//       alert('Please enter a username and password');
//     } else {
//       setRegisteredUser({ username, password });
//       alert('Registration Successful! Now login.');
//       setIsSignUp(false);
//       setUsername('');
//       setPassword('');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h3 className="heading">{isSignUp ? 'Sign Up' : 'Login'}</h3>

//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder={isSignUp ? 'New Password' : 'Password'}
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {isSignUp ? (
//         <>
//           <button className="btn1" onClick={handleSignUp}>Register</button>
//           <p>
//             Already have an account?{' '}
//             <button onClick={() => setIsSignUp(false)} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
//               Login
//             </button>
//           </p>
//         </>
//       ) : (
//         <>
//           <button className="btn1" onClick={handleLogin}>Login</button>
//           <p>
//             New user?{' '}
//             <button onClick={() => setIsSignUp(true)} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
//               Sign Up
//             </button>
//           </p>
//         </>
//       )}
//     </div>
//   );
// }
// export default Login;
