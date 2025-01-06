import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import './card.css';
// import './home.css';
import Model from './models/innerElement'; // Ensure the path to Model is correct

const Card = ({ search, books }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const maxResults = 10; // Number of books displayed per page

  /**
   * Handle card click to open modal with book details
   */
  const handleCardClick = (item) => {
    setBookItem(item);
    setShow(true);
  };

  /**
   * Pagination handlers
   */
  const handleNext = () => setStartIndex((prevIndex) => prevIndex + maxResults);
  const handlePrevious = () => setStartIndex((prevIndex) => Math.max(prevIndex - maxResults, 0));

  // Filter books to exclude those without price or thumbnail
  const filteredBooks = books.filter(
    (item) => item.saleInfo?.listPrice?.amount && item.volumeInfo?.imageLinks?.smallThumbnail
  );

  return (
    <div className="container">
      {/* Display search results header */}
      {filteredBooks.length > 0 && <h2 className="search-header">Your search result:</h2>}

      {/* Render book list */}
      {filteredBooks.length > 0 ? (
        <>
          <div className="book-list">
            {filteredBooks.slice(startIndex, startIndex + maxResults).map((item, index) => {
              const thumbnail = item.volumeInfo?.imageLinks?.smallThumbnail;
              const title = item.volumeInfo?.title || 'No Title';
              const amount = item.saleInfo?.listPrice?.amount;

              return (
                <div key={index} className="card" onClick={() => handleCardClick(item)}>
                  <img src={thumbnail} alt={title} />
                  <div className="bottom">
                    <h3 className="title">{title}</h3>
                    <p className="amount">&#8377;{amount}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination controls */}
          <div className="pagination">
            <button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className="pagination-button"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + maxResults >= filteredBooks.length}
              className="pagination-button"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </>
      ) : null}

      {/* Modal for displaying book details */}
      {show && <Model show={show} item={bookItem} onClose={() => setShow(false)} />}
    </div>
  );
};

export default Card;
