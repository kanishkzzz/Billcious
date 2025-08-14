import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import createSelectors from "./selectors";

type State = {
  billName: string;
  createdAt: Date;
  notes: string;
  category: string;
};

type Action = {
  setBillName: (billName: string) => void;
  setCreatedAt: (createdAt: Date) => void;
  setNotes: (notes: string) => void;
  setCategory: (category: string) => void;
  reset: () => void;
};

const initialState: State = {
  billName: "",
  createdAt: new Date(),
  notes: "",
  category: "Default",
};

const useDetailsTabStoreBase = createWithEqualityFn<State & Action>(
  (set) => ({
    ...initialState,
    setBillName: (billName) => set({ billName: billName }),
    setCreatedAt: (createdAt) => set({ createdAt: createdAt }),
    setNotes: (notes) => set({ notes: notes }),
    setCategory: (category) => set({ category: category }),
    reset: () => set(initialState),
  }),
  shallow,
);

const useDetailsTabStore = createSelectors(useDetailsTabStoreBase);

export default useDetailsTabStore;
