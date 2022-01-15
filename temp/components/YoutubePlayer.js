import React from 'react';
import YouTube from 'react-youtube';

function YoutubePlayer() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <>
      <YouTube videoId="" opts={opts} onReady={_onReady} />
    </>
  );
}

export default YoutubePlayer;
