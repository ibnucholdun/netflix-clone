import { create } from "zustand";

export type ModalStoreType = {
  movieId?: string;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
};

const useInfoModal = create<ModalStoreType>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId) => set({ movieId, isOpen: true }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;
