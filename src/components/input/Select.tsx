"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Card, Search } from "@/components";

interface Props {
    placeHolder: string;
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    rounded?: string;
    options: string[];
    name: string;
    setFieldValue(field: string, value: string | number): void;
}

const Select = ({
    placeHolder,
    label,
    leftIcon,
    rightIcon,
    rounded = "rounded-full",
    options,
    name,
    setFieldValue,
}: Props) => {
    const [text, setText] = useState(placeHolder);
    const [toogle, setToggle] = useState(false);

    // toggle option bar
    const handleToogle = () => setToggle(!toogle);

    // handle options change
    const handleOption = (option: string) => {
        setText(option);
        handleToogle();
        setFieldValue(name, option);
    };
    return (
        <div className="flex flex-col gap-1 w-full">
            {/* input label  */}
            {label && (
                <h3 className="font-semibold text-base text-[#3B3E44]">
                    {label}
                </h3>
            )}
            <div className={`border ${rounded} px-2 py-1.5 relative`}>
                <div
                    className="flex items-center transition-all"
                    onClick={handleToogle}
                >
                    {/* left icon */}
                    {leftIcon && leftIcon}
                    {/* input  */}
                    <h3
                        className={`${leftIcon && "ps-2"} ${
                            rightIcon && "pe-2"
                        } w-full px-2 font-normal text-base text-[#84878B]`}
                    >
                        {text}
                    </h3>
                    {/* right icon  */}
                    {toogle ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

                {toogle && (
                    <div className="mt-2 absolute top-10 z-10 transition-all">
                        <Card border="border" px="px-2" py="py-2">
                            <Search />
                            <div className="mt-2 px-1 flex flex-col gap-2">
                                {options.map((option, i) => (
                                    <h1
                                        key={i}
                                        className="text-[#84878B] text-lg font-normal cursor-pointer hover:text-gray-700"
                                        onClick={() => handleOption(option)}
                                    >
                                        {option}
                                    </h1>
                                ))}
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;
