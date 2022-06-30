import React from "react";
import "./App.css";
import { Header } from "./pages/components/Header";
import { Footer } from "./pages/components/Footer";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Basket } from "./pages/Basket";

function App() {
  return (
    <div className="App">
      <div></div>
      <div></div>
      <Header />
      <div>dstgfdg</div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
