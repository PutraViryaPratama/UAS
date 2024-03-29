import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.css";
import axios from "axios";
import { Button } from "@mui/material";

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
                    localStorage.setItem('id', response.data.id)
                    navigate("/beranda");
                }

            } else {
                console.log("Login Failed", response.data);
            }
        } catch (error) {
            if (error.response) {
                console.log("Error Response Data:", error.response.data);
                console.log("Error Response Status:", error.response.status);
            } else if (error.request) {
                console.log("No Response Received");
            } else {
                console.error("Error During Request Processing:", error.message);
            }
        }    };



    return (
        <div className="container">
            <div className="cover">
                <h1>Login</h1>
                <form onSubmit={logLogin} className="for">
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
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                </form>
                <h3 onClick={() =>navigate('/forgot')} className="text">forgot password?</h3>
                <div className="alt-login">
                    <Button onClick={()=>navigate('/test')}>Sign up</Button>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
