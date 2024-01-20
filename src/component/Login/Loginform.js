import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.css";
import axios from "axios";

const LoginForm = () => {
    const [id, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const logLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3001/web/auth/login",
                {
                    id,
                    password,
                }
            );

            console.log("Response Status:", response.status);

            if (response.status === 200) {
                if (response.data.id) {
                    console.log("Login Successful", response.data);
                    localStorage.setItem('loggedInStatus', 'true');
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('id', response.data.id)
                    // Redirect ke halaman beranda jika login berhasil
                    navigate("/beranda");
                }

            } else {
                console.log("Login Failed", response.data);
                // Tampilkan pesan kesalahan kepada pengguna atau lakukan tindakan lainnya
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
            <div className="cover">
                <h1>Login</h1>
                <form onSubmit={logLogin} className="for">
                    <input
                        className="in"
                        type="text"
                        placeholder="Username"
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
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                </form>
                <p className="text">Or login using</p>
                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
