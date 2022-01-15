import React, { useState } from 'react';

function Asynchronous() {
  const [total, setTotal] = useState(0);
  //非同步
  /*
  console.log(1);
  setTimeout(() => {
    console.log(2); //callback
  }, 0);
  console.log(3);
  //同步
  let a = 1;
  let b = a + 1;
  console.log(a, b);
  */
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1); //非同步 會最慢執行
          console.log(total);
        }}
      >
        {total}
      </h1>
      <h1
        onClick={() => {
          const newTotal = total + 1;
          setTotal(newTotal); //先執行完程式之後再setTotal
          console.log(newTotal);
        }}
      >
        {total}
      </h1>
    </>
  );
}

export default Asynchronous;
