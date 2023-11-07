import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/_latestNews.scss";
import Modal from "../components/Modals";
import DisplayedNews from "../components/DisplayedNews";

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=cbdba62af5b84b53923d1f8d1549d7d2"
        );
        setPosts(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="latest-news">
      <h2>Latest news</h2>
      <div className="posts">
        {currentPosts.map((post, index) => (
          <DisplayedNews key={index} post={post} openModal={openModal} />
        ))}

        <Modal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          modalContent={modalContent}
        />
      </div>
      <div className="pagination">
        <button
          className="previous-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <div className="page-numbers">
          {Array.from({ length: pageNumbers }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="next-btn"
          disabled={indexOfLastPost >= posts.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LatestNews;
