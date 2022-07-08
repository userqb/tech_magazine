import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Basket } from "./components/Basket/Basket";
import { Reviews } from "./components/Reviews/Reviews";
import { Order } from "./components/Order/Order";
import { Account } from "./components/Account/Account";
import { Computers } from "./components/Category/Computers";
import { Phones } from "./components/Category/Phones";
import { Appliances } from "./components/Category/Appliances";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Account />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/redirect" element={<Navigate to="/order" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
