import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Basket } from "./components/Basket/Basket";
import { Reviews } from "./components/Reviews/Reviews";
import { Order } from "./components/Order/Order";
import { Account } from "./components/Account/Account";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <div className="app_interval">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/order" element={<Order />} />
          <Route path="/account" element={<Account />} />
          <Route path="/redirect" element={<Navigate to="/order" />} />
          <Route path="product/:id" element={<Reviews />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
