import { create } from 'zustand';

export interface BearState {
  seletedUser: boolean;
  seleted: () => void;
}

export const useStore = create<BearState>((set) => ({
  seletedUser: false,
  seleted: () => {
    set({
      seletedUser: true,
    });
  },
}));
