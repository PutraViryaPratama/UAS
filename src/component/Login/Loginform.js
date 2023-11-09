import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.css"

<title>Komik gratis tiap hari! | LINE WEBTOON</title>

const LoginForm = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (props) => {
        props.preventDefault();
        // Contoh validasi login
        if (username === "admin" && password === "admin") {
            alert("Login berhasil");
            // Redirect ke halaman dashboard atau halaman berikutnya
            navigate("/beranda");
        } else {
            alert("Login gagal");
        }
    };


    return (
        <div className="container">
            <div className="cover">
                <h1>Login</h1>
                <form onSubmit={handleLogin} className="for">
                    <input className="in"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(props) => setUsername(props.target.value)}
                    />
                    <input className="in"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(props) => setPassword(props.target.value)}
                    />
                    <button className="login-btn" type="submit">Login</button>
                </form>
                <p className="text">Or login using</p>
                <div className="alt-login">
                    <div className="facebook"></div>

                    <div className="google"></div>
                </div>
            </div>
        </div>

    )
}

export default LoginForm;