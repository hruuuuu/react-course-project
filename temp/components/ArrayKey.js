import React from 'react';
import { data } from '../data/index.js';

function ArrayKey() {
  return (
    <>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div>{item.name}</div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default ArrayKey;
