import React from "react";
import LoginForm from "../Login/Loginform";
import { Beranda } from "../Beranda/Beranda";
import { Routes, Route } from "react-router-dom";
import History from "../History/History";
import Genres from "../Genre/Genres";


const BarLink = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/beranda/" element={<Beranda />}></Route>
      <Route path ="/history" element={<History />}></Route>
      <Route path="/genre" element={<Genres />}></Route>
    </Routes>
  );
};

export default BarLink;
