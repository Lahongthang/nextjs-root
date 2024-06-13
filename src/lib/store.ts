import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { persist } from 'zustand/middleware';

export type User = {
  id: string;
  username: string;
  email: string;
};

export type State = {
  users: User[];
};

export type Actions = {
  addUser: (username: string, email: string) => void;
  updateUser: (payload: User) => void;
  deleteUser: (id: string) => void;
};

export const useUserStore = create<State & Actions>()(
  persist(
    (set) => ({
      users: [],
      addUser: (username: string, email: string) =>
        set((state) => ({
          users: [...state.users, { id: uuid(), username, email }],
        })),
      updateUser: (payload: User) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === payload.id ? { ...user, ...payload } : user,
          ),
        })),
      deleteUser: (id: string) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
    }),
    { name: 'user-store', skipHydration: true },
  ),
);
