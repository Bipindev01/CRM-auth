import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      alert(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Login
        </button>

      </form>

      <p className="mt-3">
        Don't have an account?
        <Link to="/"> Register</Link>
      </p>

    </div>
  );
}

export default Login;