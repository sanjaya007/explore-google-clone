import React from "react";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { useGlobalContext } from "../context/context";
import "../css/images.css";

const Images = () => {
  const { response, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (response.type === "images") {
    if (response.data.length > 1) {
      return (
        <div className="images-box flex-top-row-start-wrap">
          {response.data.map((value, index) => (
            <a
              href={value.link.href}
              className="box"
              key={index}
              data-img={value.image.src}
              rel="noreferrer"
              title={value.link.title}
            >
              <div className="img-box">
                <img src={value.image.src} alt="" loading="lazy" />
              </div>
              <div className="info"></div>
            </a>
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

export default Images;
