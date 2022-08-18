import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";
import "../css/all_result.css";
import NotFound from "./NotFound";

const All_Result = () => {
  const { response, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (response.type === "all") {
    if (response.data.length > 1) {
      return (
        <div className="all-box">
          {response.data.map((value, index) => (
            <div className="box" key={index}>
              <div className="cite">
                {value.cite && value.cite.domain ? (
                  <p>{value.cite.domain.replace("https://", "")}</p>
                ) : (
                  <p> {value.link.replace("https://", "")} </p>
                )}
              </div>
              <div className="title">
                <a
                  href={value.link}
                  target="__blank"
                  className="ftxt-space"
                  rel="noreferrer"
                >
                  <h1>{value.title}</h1>
                </a>
              </div>
              <div className="link">
                <a
                  href={value.link}
                  target="__blank"
                  className="ftxt-blue-dark"
                  rel="noreferrer"
                >
                  {value.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return <NotFound />;
    }
  } else {
    return <Loading />;
  }
};

export default All_Result;
