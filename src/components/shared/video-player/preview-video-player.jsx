import React, {Fragment, useEffect, useRef} from 'react';
import {PreviewVideoPlayerShape} from '../../../shapes';

const PreviewVideoPlayer = ({isPlaying, src, posterImage, width, height, alt}) => {
  const videoRef = useRef();

  useEffect(() => {
    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onload = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <Fragment>
      <video muted
        src={src}
        poster={posterImage}
        ref={videoRef}
        width={width}
        height={height}
        alt={alt}>
      </video>
    </Fragment>
  );
};

PreviewVideoPlayer.propTypes = PreviewVideoPlayerShape;

export default PreviewVideoPlayer;
