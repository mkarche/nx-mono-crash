import type { ReactNode } from 'react';
import { users } from '@integrated-mono/astro/store';
import { useStore } from '@nanostores/react';

interface UsersListProps {}

const UsersList = (props: UsersListProps) => {
  const usersList = useStore(users);
  console.log('users', usersList);

  return (
    <div className="p-4 my-4 rounded min-w-[10rem] min-h-[4rem] bg-indigo-400 text-white">
      <ul>
        {usersList.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
