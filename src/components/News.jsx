import React from "react";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { useGlobalContext } from "../context/context";
import "../css/news.css";

const News = () => {
  const { response, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (response.type === "news") {
    if (response.data.length > 1) {
      return (
        <div className="news-box">
          {response.data.map((value) => (
            <div className="box" key={value.id}>
              <div className="source flex-top-row-start fmb-10">
                <div className="label fmr-10">
                  <p className="ftxt-green-dark">Source:</p>
                </div>
                <div className="info">
                  <p className="ftxt-blue-dark" title={value.published}>
                    {value.source.title}
                  </p>
                  <a
                    href={value.source.href}
                    className="ftxt-blue"
                    target="__blank"
                    title={value.published}
                    rel="noreferrer"
                  >
                    {value.source.href}
                  </a>
                </div>
              </div>
              <div className="title">
                <h1 className="ftxt-space fmb-10">{value.title}</h1>
                <div className="see-more flex-top-row-start fmb-10">
                  <p className="ftxt-orange-dark fmr-10">See More: </p>
                  <a
                    href={value.link}
                    target="__blank"
                    className="ftxt-blue"
                    rel="noreferrer"
                  >
                    {value.link}
                  </a>
                </div>
              </div>
              {value.sub_articles.length > 0 && (
                <div className="other fmt-20">
                  {value.sub_articles.map((val, index) => (
                    <a
                      href={val.url}
                      className="list fmb-10"
                      key={index}
                      target="__blank"
                      rel="noreferrer"
                    >
                      <div className="publisher">
                        <h5 className="ftxt-green-dark fmb-2">
                          {val.publisher}
                        </h5>
                      </div>
                      <div className="link">
                        <p>{val.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
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

export default News;
