import React from "react";
import Footer from "./components/Footer";
import "./App.css";
import Routers from "./components/Routers";
import { useGlobalContext } from "./context/context";

const App = () => {
  const { theme } = useGlobalContext();
  return (
    <div className={`main-container ${theme}-body`}>
      <Routers />
      <Footer />
    </div>
  );
};

export default App;
