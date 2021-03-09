import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {commentPost} from '../../../store/api-actions';
import {FilmShape} from '../../../shapes';

const RATINGS_COUNT = 10;
const MIN_REVIEW_LENGTH = 5;
const MAX_REVIEW_LENGTH = 400;

const AddReviewForm = (props) => {
  const {film, onReviewSubmit, errorMessage} = props;

  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });

  let [isPostDisabled, setIsPostDisabled] = useState(true);

  useEffect(() => {
    if (review.rating === 0 || review.comment.length < MIN_REVIEW_LENGTH || review.comment.length > MAX_REVIEW_LENGTH) {
      setIsPostDisabled(false);
    } else {
      setIsPostDisabled(false);
    }
  }, [review.rating, review.comment]);

  const setRating = (evt) => setReview({...review, rating: evt.target.value});
  const setComment = (evt) => setReview({...review, comment: evt.target.value});

  const handleReviewSubmit = (evt) => {
    evt.preventDefault();
    onReviewSubmit(film.id, review.rating, review.comment);
  };

  const ratingValues = Array.from({length: RATINGS_COUNT}, (_, i) => i + 1);

  return (
    <form action="#" className="add-review__form" onSubmit={handleReviewSubmit}>
      <div className="rating">
        <div className="rating__stars" onChange={setRating}>
          {
            ratingValues.map((value) => (
              <React.Fragment key={`star-${value}`}>
                <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value}/>
                <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={setComment} minLength={MIN_REVIEW_LENGTH} maxLength={MAX_REVIEW_LENGTH} required/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isPostDisabled}>Post</button>
        </div>
      </div>
      {errorMessage && `${errorMessage}`}
    </form>
  );
};

AddReviewForm.propTypes = {
  film: FilmShape,
  onReviewSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

const mapStateToProps = ({FILMS, ERRORS}) => ({
  film: FILMS.film,
  errorMessage: ERRORS.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(id, rating, comment) {
    dispatch(commentPost(id, rating, comment));
  },
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
