import React from "react";
import { useState, useEffect } from "react";
import GiphyCard from "./GiphyCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, giphyListActions } from "../store/listgiphy-actions";

const Container = () => {
  const listGiphy = useSelector((state) => state.gifList);
  const dispatch = useDispatch();

  const sendRequest = async () => {
    dispatch(fetchData());
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div className="container text-center" style={{ color: "white" }}>
      <div className="row my-4">
        {listGiphy.map((item, index) => {
          return (
            <div className="col col-md-3 my-2" key={index}>
              <GiphyCard
                key={item.id}
                title={item.title}
                imageURL={item.embed_url}
                username={item.username}
                import_datetime={item.import_datetime}
                trending_datetime={item.trending_datetime}
                browseURL={item.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
