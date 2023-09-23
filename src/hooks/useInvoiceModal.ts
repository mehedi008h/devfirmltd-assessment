import { create } from "zustand";

interface InvoiceModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useInvoiceModal = create<InvoiceModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useInvoiceModal;
