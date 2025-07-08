// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test1Layout from "./pages/Test1Layout.jsx";
import Test2Admin from "./pages/Test2Admin.jsx";
import Test3ProductDetail from "./pages/Test3ProductDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test1Layout />} />
        <Route path="/admin" element={<Test2Admin />} />
        <Route path="/product/:id" element={<Test3ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
