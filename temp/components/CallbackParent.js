import { React, useState } from 'react';
import CallbackSiblingA from './CallbackSiblingA';
import CallbackSiblingB from './CallbackSiblingB';

function CallbackParent() {
  const [data, setData] = useState('');
  return (
    <>
      <h2>chlid A</h2>
      <CallbackSiblingA setData={setData} />
      <h2>child B</h2>
      <CallbackSiblingB data={data} />
    </>
  );
}

export default CallbackParent;
