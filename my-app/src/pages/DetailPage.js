import React, { useContext } from "react";
import "../styles/_detailPage.scss";
import placeholderImg from "../images/placeholder-800x600.png";
import NewsContext from "../components/NewsContext";

const DetailedPage = () => {
  const { selectedPost } = useContext(NewsContext);

  // if (!selectedPost) {
  //   return <p>No post selected.</p>;
  // }

  console.log(selectedPost);

  return (
    <div className="detail-page">
      <h2>Detailed Page</h2>
      <div className="post">
        <div className="post-img">
          <img
            src={selectedPost.urlToImage || placeholderImg}
            alt="post image"
          />
        </div>
        <div className="latest-news-category">
          <p>{selectedPost.source.id}</p>
        </div>

        <div className="post-description">
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.description}</p>
          <p className="post-info">
            {selectedPost.publishedAt} / {selectedPost.author} / Seen
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
