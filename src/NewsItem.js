import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={
                !imageUrl
                  ? "https://as1.ftcdn.net/v2/jpg/03/07/93/88/1000_F_307938835_NChzYE26DIyfzHdAdW722BTaOnjaHSqV.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a
                href={newsUrl}
                target="_blank"
                className="btn btn-primary btn-sm"
              >
                Read More ...
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
