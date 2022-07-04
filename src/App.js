import React from "react";
import "./App.css";
import { Header } from "./pages/components/Header";
import { Footer } from "./pages/components/Footer";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Basket } from "./pages/Basket";
import { Order } from "./pages/Order";
import { Reviews } from "./pages/Reviews";
import { Appliances } from "./pages/components/CategoryComponents.js/Appliances";
import { Phones } from "./pages/components/CategoryComponents.js/Phones";
import { Computers } from "./pages/components/CategoryComponents.js/Computers";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/order" element={<Order />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/appliances" element={<Appliances />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
