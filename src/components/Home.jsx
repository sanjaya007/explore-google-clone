import React from "react";
import { useGlobalContext } from "../context/context";
import MaterialUISwitch from "./Switch";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const { theme, setTheme, query, setQuery } = useGlobalContext();
  const navigate = useNavigate();

  const searchTrigger = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setQuery(query.trim());
      navigate("/search/all");
    }
  };

  return (
    <div className="home-box flex-css">
      <div className="search-box">
        <form>
          <div className="title fmb-20">
            <h1>
              <span className="ftxt-red">E</span>
              <span className="ftxt-blue">x</span>
              <span className="ftxt-green">p</span>
              <span className="ftxt-yellow-dark">l</span>
              <span className="ftxt-red">o</span>
              <span className="ftxt-mint">r</span>
              <span className="ftxt-blue">e</span>
            </h1>
          </div>
          <div className="input-box flex-css-row fmb-30">
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
            />
            <div className="close-icon" onClick={() => setQuery("")}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="btn-container flex-css-row">
            <button
              href="#"
              className="fmr-16"
              onClick={(e) => {
                searchTrigger(e);
              }}
              type="submit"
            >
              Explore Search
            </button>
            <a
              href={"https://my-collection-app.netlify.app/"}
              target={"_blank"}
            >
              My Collection
            </a>
          </div>
        </form>
      </div>
      <div className="switch-box">
        <MaterialUISwitch
          theme={theme}
          onChange={() => {
            if (theme === "light") {
              localStorage.setItem("exploretheme", "dark");
              setTheme("dark");
            } else {
              localStorage.setItem("exploretheme", "light");
              setTheme("light");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Home;
