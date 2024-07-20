import { create } from "zustand";

interface ActiveBoardState {
  activeBoardId: number;
  setActiveBoardId: (id: number) => void;
}

export const useActiveBoardStore = create<ActiveBoardState>()((set) => ({
  activeBoardId: 1,
  setActiveBoardId: (newActiveBoardId) =>
    set({ activeBoardId: newActiveBoardId }),
}));
