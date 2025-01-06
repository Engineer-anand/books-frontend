import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './styleInner.css';
import { } from '@fortawesome/free-solid-svg-icons';

function InnerElement({ show, item, onClose }) {
    if (!show) {
        return null;
    }

    const thumbnail = item?.volumeInfo?.imageLinks?.smallThumbnail;

    return (
        <div className="overlay">
            <div className="overlay-inner">
                {/* Close button */}
                <button className="close" onClick={onClose}>
                    <FontAwesomeIcon icon={faClose} />
                </button>

                <div className="inner-box">
                    {/* Book Thumbnail */}
                    {thumbnail && <img src={thumbnail} alt={item.volumeInfo.title || "Book Thumbnail"} />}
                    
                    <div className="info">
                        {/* Book Details */}
                        <h1>{item.volumeInfo.title || "No Title Available"}</h1>
                        <h3>{item.volumeInfo.authors?.join(", ") || "Unknown Author"}</h3>
                        <h4>
                            {item.volumeInfo.publisher || "Unknown Publisher"}
                            <span>{item.volumeInfo.publishedDate || "No Date"}</span>
                        </h4>
                        <br />
                        {/* Preview Link */}
                        {item.volumeInfo.previewLink && (
                            <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                                <button>More</button>
                            </a>
                        )}
                    </div>
                </div>

                {/* Book Description */}
                {item.volumeInfo.description && (
                    <h4 className="description">{item.volumeInfo.description}</h4>
                )}
            </div>
        </div>
    );
}

export default InnerElement;
