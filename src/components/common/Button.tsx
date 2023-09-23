import React from "react";

interface Props {
    bg: string;
    btnText: string;
    icon?: React.ReactNode;
    outline?: boolean;
    handleAction?: () => void;
    type?: string;
}

const Button = ({ bg, btnText, icon, outline, handleAction, type }: Props) => {
    const btnType =
        type === "submit" ? "submit" : type === "reset" ? "reset" : "button";
    return (
        <button
            type={btnType}
            onClick={handleAction}
            className={`${
                outline
                    ? "border border-gray-500 text-gray-600"
                    : `bg-[${bg}] text-white`
            }  px-5 py-2 rounded-full flex items-center gap-2 cursor-pointer`}
        >
            {icon}
            <h3 className="text-base font-semibold">{btnText}</h3>
        </button>
    );
};

export default Button;
