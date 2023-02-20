import React, { useCallback, useMemo, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import { UserContext } from "./context/AdminContext";
import Contact from "./views/Contact";
import HomePage from "./views/HomePage";
import ListProducts from "./views/ListProducts";
import OneProduct from "./views/OneProduct";
import SearchProducts from "./views/SearchProducts";
import Stock from "./views/Stock";

/*****      APP     *****/
export default function App() {
  // State
  const [isLog, setIsLog] = useState({
    loggin: false,
    admin: false,
  });

  // Handles
  const toggleLoggin = useCallback(
    (user: string, v: boolean) => {
      setIsLog({
        ...isLog,
        [user]: v,
      });
    },
    [isLog]
  );
  const value = useMemo(() => {
    return {
      userLog: isLog,
      toggleLog: toggleLoggin,
    };
  }, [isLog, toggleLoggin]);

  return (
    <UserContext.Provider value={value}>
      <div className="App container my-1">
        <Header />
        <Link to="/">
          <h1 className="title_app">Les 3 petits savons</h1>
        </Link>

        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/boutique" element={<ListProducts />} />
            <Route path="/boutique/:categories" element={<SearchProducts />} />
            <Route path="/boutique/douche" element={<OneProduct />} />
            <Route path="/boutique/corps" element={<OneProduct />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
  );
}
