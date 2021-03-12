import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import PropTypes from 'prop-types';
import {FilmShape} from '../../../shapes';
import LoadingScreen from '../../loading-screen/loading-screen';
import PlayButton from './play-button';
import {fetchFilmById} from '../../../store/api-actions';
import {getFilm, getFilmLoadedStatus} from '../../../store/selectors';

const Player = (props) => {
  const {film, isFilmLoaded, onLoad} = props;

  const id = parseInt(useParams().id, 10);

  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    onLoad(id);
  }, [id]);

  useEffect(() => {
    if (!isFilmLoaded) {
      return;
    }
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying, isFilmLoaded]);

  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const onPlayBtnClickHandler = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <video
        src={film.videoLink}
        ref={videoRef}
        className="player__video"
        poster={film.backgroundImage}
        onClick={onPlayBtnClickHandler}>
      </video>
      <button type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>
        <div className="player__controls-row">
          <PlayButton
            isPlaying={isPlaying}
            onButtonClick={onPlayBtnClickHandler}
          />
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  film: FilmShape,
  isFilmLoaded: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  isFilmLoaded: getFilmLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchFilmById(id));
  },
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
