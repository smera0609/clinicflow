import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      loginData.email === "admin@clinicflow.com" &&
      loginData.password === "admin123"
    ) {
      alert("Login successful!");
      navigate("/admin");
    } else {
      alert("Invalid login. Use admin@clinicflow.com / admin123");
    }
  }

  return (
    <div className="login-page">

      <form className="login-form" onSubmit={handleSubmit}>

        <h1>Admin Login</h1>

        <p>Login to manage appointments and leads.</p>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="admin@clinicflow.com"
          value={loginData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="admin123"
          value={loginData.password}
          onChange={handleChange}
        />

        <button type="submit" className="primary-btn">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;