import React, {useState} from 'react';
import {connect} from 'react-redux';

const RATINGS_COUNT = 10;

const AddReviewForm = () => {
  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });

  const setRating = (evt) => setReview({...review, rating: evt.target.value});
  const setComment = (evt) => setReview({...review, comment: evt.target.value});

  const ratingValues = Array.from({length: RATINGS_COUNT}, (_, i) => i + 1);

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars" onChange={setRating}>
          {
            ratingValues.map((value) => (
              <React.Fragment key={`star-${value}`}>
                <input className="rating__input" id={`star-${value}`} type="radio" name="rating" defaultValue={value} />
                <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={setComment} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = ({FILMS}) => ({
  film: FILMS.film,
});

export {AddReviewForm};
export default connect(mapStateToProps, null)(AddReviewForm);
