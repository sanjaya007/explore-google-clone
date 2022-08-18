import React from "react";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { useGlobalContext } from "../context/context";
import "../css/videos.css";

const Videos = () => {
  const { response, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (response.type === "videos") {
    if (response.data.length > 1) {
      return (
        <div className="videos-box">
          <div className="frame-box flex-top-row-start-wrap">
            {response.data.map((value, index) => {
              if (value.additional_links[0].href.includes("www.youtube.com")) {
                return (
                  <div className="box" key={index}>
                    <ReactPlayer
                      url={value.additional_links[0].href}
                      controls
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="other-box flex-top-row-start-wrap">
            {response.data.map((value, index) => {
              if (!value.additional_links[0].href.includes("www.youtube.com")) {
                return (
                  <a
                    href={value.additional_links[0].href}
                    className="list fmb-10"
                    key={index}
                    target="__blank"
                    rel="noreferrer"
                  >
                    <h5 className="ftxt-green-dark fmb-2">Video</h5>
                    <p>{value.additional_links[0].text}</p>
                  </a>
                );
              }
            })}
          </div>
        </div>
      );
    } else {
      return <NotFound />;
    }
  } else {
    return <Loading />;
  }
};

export default Videos;
