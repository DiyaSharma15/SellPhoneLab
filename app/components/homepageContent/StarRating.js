import { useState } from 'react';
import styles from '../../cssFiles/StarRating.module.css'; // CSS module for styling

const StarRating = ({ onRating }) => {
  const [rating, setRating] = useState(0);

  const handleSetRating = (rate) => {
    setRating(rate);
    onRating(rate); // Pass the rating up to the parent component
  };

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? styles.on : styles.off}
            onClick={() => handleSetRating(index)}
          >
            &#9733; {/* Star Unicode Character */}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
