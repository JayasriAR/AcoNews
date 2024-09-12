import React from 'react';


function Trending({ trendingArticles }) {
  return (
    <div className="trending-container">
      <h2>Trending News</h2>
      <div className="trending-carousel">
        {trendingArticles.map((article, index) => (
          <div key={index} className="trending-item">
            <img src={article.image} alt={article.title} className="trending-image" />
            <h5>{article.title}</h5>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
