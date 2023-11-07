import React, { useContext } from "react";
import "../styles/_displayedNews.scss";
import placeholderImg from "../images/placeholder-800x600.png";
import NewsContext from "../components/NewsContext";
import { NavLink } from "react-router-dom";

const DisplayedNews = ({ post, openModal }) => {
  const { addToDetailPage } = useContext(NewsContext);

  return (
    <div className="post">
      <div className="post-img" onClick={() => openModal(post)}>
        <img src={post.urlToImage || placeholderImg} alt="post image" />
      </div>
      <div className="latest-news-category">
        <p>{post.source.id}</p>
      </div>
      <div className="post-description">
        <h3>{post.title}</h3>
        <p className="limited-text">{post.description}</p>
        <p className="post-info">
          {post.publishedAt} / {post.author} / Seen
        </p>
      </div>
      <NavLink
        onClick={() => {
          addToDetailPage(post);
        }}
        to="/detailPage"
      >
        See more &raquo;
      </NavLink>
    </div>
  );
};

export default DisplayedNews;
