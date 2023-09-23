"use client";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    action?: React.ReactNode;
    body?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, action, body }) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="justify-center items-center flex h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 hide-scroll-bar">
                <div className="relative w-[80%] my-6 mx-auto h-full lg:h-auto md:h-auto">
                    {/*content*/}
                    <div
                        className={`translate duration-300 h-full
                                    ${
                                        showModal
                                            ? "translate-y-0"
                                            : "translate-y-full"
                                    }
                                    ${showModal ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="w-full flex items-center p-8 rounded-t justify-center relative border-b-[1px]">
                                <button
                                    className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                                    onClick={handleClose}
                                >
                                    <IoMdClose size={18} />
                                </button>
                                {/* action  */}
                                <div className="flex gap-3 text-lg font-semibold absolute right-9">
                                    {action}
                                </div>
                            </div>
                            {/*body*/}
                            <div className="relative flex-auto">{body}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
