import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const activeStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 1; i <= 5; i++) {
      let starClass = '';
      if (i <= activeStars) {
        starClass = 'active';
      } else if (i === activeStars + 1 && hasHalfStar) {
        starClass = 'active-half';
      }
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className={`star ${starClass}`} />
      );
    }
    return stars;
  };
  return <div className="stars">{renderStars()}</div>;
};

export default Stars;
