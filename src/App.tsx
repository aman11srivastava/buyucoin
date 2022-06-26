import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CoinsTable from "./components/CoinsTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<CoinsTable/>} path={"/"}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
