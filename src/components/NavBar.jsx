import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import MaterialUISwitch from "./Switch";
import { useGlobalContext } from "../context/context";

const NavBar = () => {
  const {
    theme,
    setTheme,
    query,
    setQuery,
    splitPath,
    getResult,
    setIsLoading,
  } = useGlobalContext();
  const location = useLocation();
  const path = location.pathname;
  const finalPath = splitPath(path);

  const navigate = useNavigate();

  const triggerAPI = (path) => {
    switch (path) {
      case "all":
        getResult("search");
        break;
      case "images":
        getResult("image");
        break;
      case "news":
        getResult("news");
        break;
      case "videos":
        getResult("video");
        break;
    }
  };

  const hitSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setQuery(query.trim());
      triggerAPI(finalPath);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    triggerAPI(finalPath);
  }, [location]);

  useEffect(() => {
    if (query === "") {
      navigate("/home");
    }
  }, []);

  return (
    <div className="nav-bar flex-css-row-sb">
      <div className="left-nav flex-css-row-start">
        <Link to={"/home"} className="title">
          <h1>
            <span className="ftxt-red">E</span>
            <span className="ftxt-blue">x</span>
            <span className="ftxt-green">p</span>
            <span className="ftxt-yellow-dark">l</span>
            <span className="ftxt-red">o</span>
            <span className="ftxt-mint">r</span>
            <span className="ftxt-blue">e</span>
          </h1>
        </Link>
        <form className="input-box flex-css-row">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="icon-box close-icon" onClick={() => setQuery("")}>
            <i className="fa-solid fa-xmark ftxt-red"></i>
          </div>
          <div className="border-line ftxt-gray fpx-10">|</div>
          <div className="icon-box search-icon">
            <button onClick={(e) => hitSearch(e)} type="submit">
              <i className="fa-solid fa-magnifying-glass ftxt-blue"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="right-nav">
        <div className="switch-box fml-30">
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
    </div>
  );
};

export default NavBar;
