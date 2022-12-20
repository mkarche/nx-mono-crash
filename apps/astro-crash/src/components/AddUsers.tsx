import React, { useRef, useState } from 'react';
import { addUser } from '@integrated-mono/astro/store';
import UsersList from './UsersList';

const AddUsers = () => {
  const [name, setName] = useState('');
  //const nameRef = useRef<HTMLInputElement>(null);
  //nameRef.current ="";
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label className="font-bold text-lg" htmlFor="name">
        User to Add
      </label>
      <input
        className="mx-2 p-4 rounded border-2 border-indigo-500"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        type="submit"
        className="p-4 rounded bg-indigo-500 text-white"
        onClick={() => {
          addUser(name);
          setName('');
        }}
      >
        Add User
      </button>
    </form>
  );
};

export default AddUsers;
