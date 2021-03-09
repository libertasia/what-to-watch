import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import PageFooter from '../../shared/page-footer/page-footer';
import PageLogo from '../../shared/page-logo/page-logo';
import MovieList from '../../shared/movie-list/movie-list';
import UserBlock from '../../shared/user-block/user-block';
import {FilmsShape} from '../../../shapes';
import {fetchFavoriteFilmsList} from '../../../store/api-actions';

const MyList = (props) => {
  const {favoriteFilms, onLoadData} = props;

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageLogo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList visibleFilms={favoriteFilms} />
      </section>
      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  favoriteFilms: FilmsShape,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = ({FILMS}) => ({
  favoriteFilms: FILMS.favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteFilmsList());
  },
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);

