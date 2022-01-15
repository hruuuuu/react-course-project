import React from 'react';
import PropsChild from './PropsChild';

function PropsParent(props) {
  return (
    <>
      <PropsChild text="Hello Amy" firstName="Amy" lastName="Lin" /> <hr />
      {/* 自訂的props寫在html attribute的地方 會傳遞入PropsChild */}
      {/* <PropsChild text="Hello" /> */}
      {/* <PropsChild firstName={123} lastName={true}/> */}
    </>
  );
}

export default PropsParent;
