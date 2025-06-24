// import './App.css';
// // import { useState } from 'react';

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <p>Count: {count}</p>
      
//       <button className="btn1" onClick={() => setCount(count + 1)}>
//         INCREMENT
//       </button>
      
//       <button className="btn2" onClick={() => {
//         if (count > 0) {
//           setCount(count - 1);
//         }
//       }}>
//         DECREMENT
//       </button> */}
//       <h3 className="heading">Login</h3>
//       <div className="login-container">
//       <div>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button className="btn1">Login</button>
//       </div>
//       </div>
//     </>
//   );
// }

// export default App;
// src/App.js

// src/App.js

import React from 'react';
import './App.css';
// import Login from './Components/login';
import Userdetails from './Components/userdetails';

function App() {
  return (
    <div className="App">
      <Userdetails />
    </div>
  );
}

export default App;

