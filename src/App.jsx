import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import './App.scss';

import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Route>
    </Routes>
  );
}

export default App;
