import React, { Component } from "react";
import NewsItem from "../NewsItem";

export class News extends Component {
  constructor() {
    super();
    let articles = [];
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2> My News Feed App</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title.slice(0, 45)}
                description={element.description.slice(0, 45)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
