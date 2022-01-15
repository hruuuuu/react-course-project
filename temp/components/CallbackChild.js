import { React, useEffect } from 'react';

function CallbackChild(props) {
  //console.log(props);
  const privateData = 'child data';
  // useEffect(() => {
  //   //生命週期方法
  //   props.setData(privateData);
  // }, []);
  return (
    <>
      <button
        onClick={() => {
          props.setData(privateData);
        }}
      >
        送資料給父母
      </button>
    </>
  );
}

export default CallbackChild;
