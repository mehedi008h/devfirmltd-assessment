"use client";
import React from "react";

interface Props {
    type: string;
    placeHolder: string;
    label?: string;
    value?: string | number;
    width?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    rounded?: string;
    name: string;
    onChange: any;
}

const Input = ({
    type,
    placeHolder,
    label,
    value,
    width,
    leftIcon,
    rightIcon,
    rounded = "rounded-full",
    name,
    onChange,
}: Props) => {
    return (
        <div className={`flex flex-col gap-1 ${width}`}>
            {/* input label  */}
            {label && (
                <h3 className="font-semibold text-base text-[#3B3E44]">
                    {label}
                </h3>
            )}
            <div
                className={`border ${rounded} flex items-center px-2 py-1.5 w-full`}
            >
                {/* left icon */}
                {leftIcon && leftIcon}
                {/* input  */}
                <input
                    type={type}
                    className={`outline-none ${leftIcon && "ps-2"} ${
                        rightIcon && "pe-2"
                    } w-full px-2`}
                    placeholder={placeHolder}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                {/* right icon  */}
                {rightIcon && rightIcon}
            </div>
        </div>
    );
};

export default Input;
