import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CoinsTable from "./components/CoinsTable";
import SingleCoin from "./components/SingleCoin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<CoinsTable/>} path={"/"}/>
              <Route element={<SingleCoin/>} path={"/coin/:market"}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
