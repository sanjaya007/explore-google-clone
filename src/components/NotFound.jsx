import React from "react";
import "../css/not_found.css";

const NotFound = () => {
  return (
    <div className="notfound-box flex-css">
      <div className="box">
        <div className="title fmb-6">
          <h1 className="ftxt-blue">
            <span className="ftxt-red">E</span>
            <span className="ftxt-blue">x</span>
            <span className="ftxt-green">p</span>
            <span className="ftxt-yellow-dark">l</span>
            <span className="ftxt-red">o</span>
            <span className="ftxt-mint">r</span>
            <span className="ftxt-blue">e</span>
          </h1>
        </div>
        <div className="info">
          <h4 className="ftxt-red fmb-4">Sorry !</h4>
          <p>No data found.</p>
          <p>Check your keyword</p>
          <p>Try again !</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
