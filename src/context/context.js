import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const API_URL = "https://google-search3.p.rapidapi.com/api/v1";

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState({
    type: "",
    data: [],
  });

  useEffect(() => {
    const localTheme = localStorage.getItem("exploretheme");
    if (localTheme) {
      setTheme(localStorage.getItem("exploretheme"));
    } else {
      setTheme(localStorage.setItem("exploretheme", "light"));
    }
  }, []);

  const splitPath = (path) => {
    const keyWord = "/search/";
    const keyLength = keyWord.length;
    const indexPos = path.indexOf("/search/");
    const slicedPath = path.slice(indexPos + keyLength);
    return slicedPath;
  };

  const getResult = async (path) => {
    setIsLoading(true);
    const config = {
      method: "GET",
      url: `${API_URL}/${path}/q=${query}&num=50`,
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "1294c84cc8msh761b325fd1cd7dap1f4f57jsn3dbacb4f64e9",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        setIsLoading(false);
      }

      switch (path) {
        case "search":
          setResponse(() => ({
            type: "all",
            data: response.data.results,
          }));
          break;
        case "image":
          setResponse(() => ({
            type: "images",
            data: response.data.image_results,
          }));
          break;
        case "news":
          setResponse(() => ({
            type: "news",
            data: response.data.entries,
          }));
          break;
        case "video":
          setResponse(() => ({
            type: "videos",
            data: response.data.results,
          }));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        query,
        setQuery,
        getResult,
        response,
        isLoading,
        setIsLoading,
        splitPath,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider, useGlobalContext };
