import React from "react";

const GiphyCard = (props) => {
  const {
    title,
    imageURL,
    username,
    import_datetime,
    trending_datetime,
    key,
    browseURL,
  } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem", color: "black" }}>
        <iframe
          src={imageURL}
          className="card-img-top mt-1"
          alt="..."
          title={key}
        />
        {/*<a link={imageURL}>Go to Gif</a>*/}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <b>Username:</b> {username}
          </p>
          <p className="card-text">
            <b>Import Date Time:</b> {import_datetime}
          </p>
          <p className="card-text">
            <b>Trending Date Time:</b> {trending_datetime}
          </p>
          <a href={browseURL}>Browse More...</a>
        </div>
      </div>
    </div>
  );
};

export default GiphyCard;
