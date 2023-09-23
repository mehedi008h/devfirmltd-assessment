import React from "react";

interface Props {
    children: React.ReactNode;
    px?: string;
    py?: string;
    border?: string;
    margin?: string;
}

const Card = ({ children, px, py, border, margin }: Props) => {
    return (
        <div
            className={`bg-white w-full rounded-lg ${px} ${py} ${border} ${margin}`}
        >
            {children}
        </div>
    );
};

export default Card;
