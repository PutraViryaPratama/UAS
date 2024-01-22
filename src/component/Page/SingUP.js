import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Login/loginform.css";
import React from "react";

export const SignUp = () => {
  const [id, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sign = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/web/users",
        {
          id,
          password,
          email,
        }
      );

      console.log("Response Status:", response.status);

      // Check if registration is successful
      if (response.status === 201) {
        console.log("Registration Successful", response.data);
          
        // Redirect ke halaman beranda jika registrasi berhasil
        navigate("/");
      } else {
        console.log("Registration Failed");
      }

    } catch (error) {
      if (error.response) {
        // Respons diterima dengan status yang bukan 2xx
        console.log("Error Response Data:", error.response.data);
        console.log("Error Response Status:", error.response.status);
      } else if (error.request) {
        // Permintaan dikirim tetapi tidak menerima respons
        console.log("No Response Received");
      } else {
        // Terjadi kesalahan selama pengolahan permintaan
        console.error("Error During Request Processing:", error.message);
      }
    }
  };

  return (
    <div className="container">
      <p>halo</p>
      <div className="cover">
        <h1>SignUp</h1>
        <form onSubmit={sign} className="for">
          <input
            className="in"
            type="text"
            placeholder="UserID"
            value={id}
            onChange={(e) => setUserID(e.target.value)}
          />
          <input
            className="in"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="in"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="login-btn" type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};
