import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import ListProducts from "./views/ListProducts";
import Stock from "./views/Stock";

function App() {
  return (
    <div className="App container">
      <Header />
      <h1 className="title_app">La boutique à savons</h1>
      <main className="container">
        <Routes>
          <Route path="/" element={<ListProducts />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
