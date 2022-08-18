import React from "react";
import "../css/loading.css";
import spinner from "../images/spinner.gif";

const Loading = () => {
  return (
    <div className="loading-box flex-css">
      <div className="gif-box">
        <img src={spinner} alt="spinner" />
      </div>
    </div>
  );
};

export default Loading;
