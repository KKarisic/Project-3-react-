import React, { createContext, useEffect, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const addToDetailPage = (test) => {
    setSelectedPost(test);
  };

  return (
    <NewsContext.Provider value={{ selectedPost, addToDetailPage }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
