import { atom } from 'nanostores';

export const users = atom<string[]>([]);

export const addUser = (user: string) => {
  if (user && user !== '') {
    users.set([...users.get(), user]);
  }
};
