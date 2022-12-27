import { atom } from 'nanostores';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { v4 as uuid } from 'uuid';

export interface GoalType {
  id?: string;
  title: string;
}

export const goalStore = atom<GoalType[]>([]);

export const addGoal = (goal: GoalType) => {
  goalStore.set([
    ...goalStore.get(),
    {
      id: Math.random().toString(),
      ...goal,
    },
  ]);
};

export const deleteGoal = (id: string) => {
  goalStore.set(goalStore.get().filter((goal) => goal.id !== id));
};
