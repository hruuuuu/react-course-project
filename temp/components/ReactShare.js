import React from 'react';
import { FacebookShareButton, LineShareButton } from 'react-share';
import { FacebookIcon, LineIcon } from 'react-share';

function ReactShare() {
  return (
    <>
      <FacebookShareButton url="http://localhost:3000">
        <FacebookIcon />
      </FacebookShareButton>
      <LineShareButton url="http://localhost:3000">
        <LineIcon />
      </LineShareButton>
    </>
  );
}

export default ReactShare;
