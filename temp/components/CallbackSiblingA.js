import React from 'react';

function CallbackSiblingA(props) {
  const privateData = 'child A data';
  return (
    <>
      <button
        onClick={() => {
          props.setData(privateData);
        }}
      >
        送資料給兄弟B
      </button>
    </>
  );
}

export default CallbackSiblingA;
