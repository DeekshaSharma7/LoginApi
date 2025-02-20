// // // // UserLogin.js
// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // function UserLogin() {
// // //   const [username, setUsername] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleLogin = async () => {
// // //     try {
// // //       const response = await axios.post("http://localhost:5000/user/login", {
// // //         username,
// // //         password,
// // //       });
// // //       localStorage.setItem("userToken", response.data.token);
// // //       window.location.href = "/user/dashboard";
// // //     } catch (error) {
// // //       alert("Invalid credentials");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>User Login</h2>
// // //       <input
// // //         type="text"
// // //         placeholder="Username"
// // //         onChange={(e) => setUsername(e.target.value)}
// // //       />
// // //       <input
// // //         type="password"
// // //         placeholder="Password"
// // //         onChange={(e) => setPassword(e.target.value)}
// // //       />
// // //       <button onClick={handleLogin}>Login</button>
// // //     </div>
// // //   );
// // // }
// // // export default UserLogin;








// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const UserLogin = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const response = await fetch("http://localhost:5000/user/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ username, password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         localStorage.setItem("userToken", data.token);
// //         navigate("/user/dashboard"); // Redirect to user dashboard
// //       } else {
// //         setError(
// //           data.message || "Login failed. Please check your credentials."
// //         );
// //       }
// //     } catch (error) {
// //       setError("Server error. Please try again later.");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>User Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // };

// // export default UserLogin;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("http://localhost:5000/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem("userToken", data.token);
//           navigate("/user/dashboard"); // Redirect to the user dashboard
//           console.log("user login successfully")
//       } else {
//         setError(data.message || "Login failed. Try again.");
//       }
//     } catch (err) {
//       setError("Server Error. Try again later.");
//     }
//   };

//   return (
//     <div>
//       <h2>User Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default UserLogin;






import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("userToken", data.token);
        navigate("/user/dashboard"); // Redirect to the user dashboard
        console.log("User logged in successfully");
      } else {
        setError(data.message || "Login failed. Try again.");
      }
    } catch (err) {
      setError("Server Error. Try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default UserLogin;
