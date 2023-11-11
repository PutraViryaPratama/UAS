import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import BarLink from "./component/util/BarLink";
import { Beranda } from "./component/Beranda/Beranda";


function App() {
  return (
      <body>
        <div className="App">
          <BarLink />
        </div>
      </body>
  );
}

export default App;

