import React, { useState } from 'react';

type Props = {};

const MyInput = (props: Props) => {
  const [name, setName] = useState('Momo');
  console.log(name);
  return (
    <>
      <div>MyInput {name}</div>
      <input
        className="my-2 rounded border-2 border-indigo-400"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default MyInput;
