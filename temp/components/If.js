import React, { useState } from 'react';

function If() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        +
      </button>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        -
      </button>
      {/* 邏輯與 */}
      <div>{total > 10 && '不能買超過10件'}</div>
      <div>{total < 1 && '請至少選擇一件'}</div>
    </>
  );
}

export default If;
