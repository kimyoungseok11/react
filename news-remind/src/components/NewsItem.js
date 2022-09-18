import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 10px;
    img {
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      text-decoration: none;
      color: "#000";
    }
  }
`;

const NewsItem = (props) => {
  const { title, description, url, urlToImage } = props.article;
  return (
    <div>
      <NewsItemBlock>
        <div className="thumbnail">
          <a href={url}>
            <img src={urlToImage} alt="news-image"></img>
          </a>
        </div>
        <div className="contents">
          <h2>
            <a href={url}>{title}</a>
          </h2>
          <p>{description}</p>
        </div>
      </NewsItemBlock>
    </div>
  );
};

export default NewsItem;
