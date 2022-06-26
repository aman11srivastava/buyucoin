import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CoinsTable from "./components/CoinsTable";
import SingleCoin from "./components/SingleCoin";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path={"/"}/>
              <Route element={<CoinsTable/>} path={"/coins"}/>
              <Route element={<SingleCoin/>} path={"/coin/:market"}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
