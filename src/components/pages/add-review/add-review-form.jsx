import React, {useState} from 'react';

const RATINGS_COUNT = 10;

const AddReviewForm = () => {
  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });

  const setRating = (evt) => setReview({...review, rating: evt.target.value});
  const setComment = (evt) => setReview({...review, comment: evt.target.value});

  const ratings = [];
  for (let index = 1; index <= RATINGS_COUNT; index++) {
    ratings.push(
        (
          <React.Fragment>
            <input className="rating__input" id={`star-` + index} type="radio" name="rating" defaultValue={index} />
            <label className="rating__label" htmlFor={`star-` + index}>Rating {index}</label>
          </React.Fragment>
        )
    );
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars" onChange={setRating}>
          {ratings}
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

export default AddReviewForm;
